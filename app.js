// State
let mySchedule = new Set(JSON.parse(localStorage.getItem('primavera-schedule')) || []);
let myUsername = localStorage.getItem('primavera-username') || 'Me';

// Friends: array of { id, name, schedule: Set, active: boolean }
let friends = [];
try {
  const storedFriends = JSON.parse(localStorage.getItem('primavera-friends')) || [];
  friends = storedFriends.map(f => ({
    id: f.id || Math.random().toString(36).substring(2, 9),
    name: f.name || 'Friend',
    schedule: new Set(f.schedule || []),
    active: f.active !== undefined ? f.active : true
  }));
} catch (e) {
  friends = [];
}

let currentView = 'lineup';

// DOM Elements
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');
const shareBtn = document.getElementById('shareBtn');
const navCompare = document.getElementById('navCompare');
const toast = document.getElementById('toast');

// Initialize
function init() {
  updateHeaderName();

  // Check URL for shared schedule
  const urlParams = new URLSearchParams(window.location.search);
  const sharedIds = urlParams.get('shared');
  const sharedName = urlParams.get('name') || 'Friend';
  
  if (sharedIds) {
    const ids = sharedIds.split(',').filter(id => lineup.find(b => b.id === id));
    if (ids.length > 0) {
      showImportDialog(ids, sharedName);
    }
  }

  // Event Listeners
  navItems.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const view = e.currentTarget.dataset.view;
      switchView(view);
    });
  });

  shareBtn.addEventListener('click', handleShare);

  // Initial Render
  switchView(currentView);
}

function updateHeaderName() {
  const el = document.getElementById('header-user-name');
  if (el) {
    if (myUsername && myUsername !== 'Me') {
      el.textContent = myUsername;
      el.style.display = 'inline-block';
    } else {
      el.style.display = 'none';
    }
  }
}

function showImportDialog(ids, defaultName) {
  const dialog = document.getElementById('import-dialog');
  const nameInput = document.getElementById('import-friend-name');
  const messageEl = document.getElementById('import-message');
  
  nameInput.value = defaultName;
  messageEl.textContent = `Would you like to import this schedule of ${ids.length} sets?`;
  
  dialog.classList.remove('hidden');
  
  const handleConfirm = () => {
    let name = nameInput.value.trim();
    if (!name) name = 'Friend';
    
    // Check limit
    if (friends.length >= 4) {
      showToast("Cannot add more than 4 friends. Please remove one first!");
      dialog.classList.add('hidden');
      cleanupUrl();
      return;
    }
    
    // Add to friends
    const newFriend = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      schedule: new Set(ids),
      active: true
    };
    friends.push(newFriend);
    saveFriends();
    
    showToast(`Added ${name}'s schedule!`);
    dialog.classList.add('hidden');
    
    // Redirect to compare view
    cleanupUrl();
    switchView('compare');
  };
  
  const handleCancel = () => {
    dialog.classList.add('hidden');
    cleanupUrl();
  };
  
  const confirmBtn = document.getElementById('import-confirm');
  const cancelBtn = document.getElementById('import-cancel');
  
  confirmBtn.onclick = handleConfirm;
  cancelBtn.onclick = handleCancel;
}

function saveFriends() {
  const friendsToStore = friends.map(f => ({
    id: f.id,
    name: f.name,
    schedule: Array.from(f.schedule),
    active: f.active
  }));
  localStorage.setItem('primavera-friends', JSON.stringify(friendsToStore));
}

function cleanupUrl() {
  const url = new URL(window.location);
  url.searchParams.delete('shared');
  url.searchParams.delete('name');
  window.history.replaceState({}, document.title, url.pathname);
}

// Render Functions
function switchView(view) {
  currentView = view;
  
  // Update Nav
  navItems.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });

  // Render Content
  mainContent.innerHTML = '';
  
  if (view === 'lineup') {
    renderLineup();
  } else if (view === 'schedule') {
    renderSchedule();
  } else if (view === 'compare') {
    renderCompare();
  }
}

// Helper to sort festival times chronologically
// Treats early morning times (e.g. 00:00 to 08:59) as late night of the previous festival day
function compareFestivalTimes(a, b) {
  const getMinutes = (timeStr) => {
    const [h, m] = timeStr.split(':').map(Number);
    return (h < 9 ? h + 24 : h) * 60 + m;
  };
  return getMinutes(a.time) - getMinutes(b.time);
}

function groupLineupByDay(bandsToInclude = null) {
  const grouped = {};
  lineup.forEach(band => {
    if (bandsToInclude && !bandsToInclude.has(band.id)) return;
    
    if (!grouped[band.day]) {
      grouped[band.day] = [];
    }
    grouped[band.day].push(band);
  });
  return grouped;
}

function renderLineup() {
  const grouped = groupLineupByDay();
  
  Object.entries(grouped).forEach(([day, bands]) => {
    const section = document.createElement('div');
    section.className = 'day-section';
    
    const header = document.createElement('h2');
    header.className = 'day-header';
    header.textContent = day;
    section.appendChild(header);

    // Sort by time
    bands.sort(compareFestivalTimes);

    bands.forEach(band => {
      const isSelected = mySchedule.has(band.id);
      const card = createBandCard(band, isSelected, () => toggleBand(band.id));
      section.appendChild(card);
    });

    mainContent.appendChild(section);
  });
}

function renderSchedule() {
  if (mySchedule.size === 0) {
    mainContent.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
        <h3>Your schedule is empty</h3>
        <p>Go to the lineup and tap on bands to add them here.</p>
      </div>
    `;
    return;
  }

  const title = document.createElement('h2');
  title.style.fontSize = '1.3rem';
  title.style.marginBottom = '1.2rem';
  title.style.color = 'var(--text-primary)';
  title.style.fontFamily = 'var(--font-display)';
  title.textContent = myUsername && myUsername !== 'Me' ? `${myUsername}'s Timetable` : 'My Timetable';
  mainContent.appendChild(title);

  const grouped = groupLineupByDay(mySchedule);

  Object.entries(grouped).forEach(([day, bands]) => {
    const section = document.createElement('div');
    section.className = 'day-section';
    
    const header = document.createElement('h2');
    header.className = 'day-header';
    header.textContent = day;
    section.appendChild(header);

    // Sort by time
    bands.sort(compareFestivalTimes);

    bands.forEach(band => {
      const timeStr = band.time.split(' - ')[0]; // Start time
      const item = document.createElement('div');
      item.className = 'timeline-item';
      
      const timeCol = document.createElement('div');
      timeCol.className = 'time-col';
      timeCol.textContent = timeStr;

      const content = document.createElement('div');
      content.className = 'timeline-content';
      
      const card = createBandCard(band, true, () => {
        toggleBand(band.id);
        switchView('schedule'); // Re-render
      });
      card.style.marginBottom = '0';
      
      content.appendChild(card);
      item.appendChild(timeCol);
      item.appendChild(content);
      section.appendChild(item);
    });

    mainContent.appendChild(section);
  });
}

function renderCompare() {
  mainContent.innerHTML = '';
  
  const hubContainer = document.createElement('div');
  hubContainer.className = 'friends-hub';
  
  // 1. Profile Section
  const profileSec = document.createElement('div');
  profileSec.className = 'hub-section';
  profileSec.innerHTML = `
    <h2>Your Profile</h2>
    <div class="profile-edit">
      <input type="text" id="user-name-input" class="glass-input" placeholder="Your Name" value="${myUsername}">
      <button id="save-name-btn" class="action-btn">Save</button>
    </div>
  `;
  hubContainer.appendChild(profileSec);
  
  // 2. Friends Section
  const friendsSec = document.createElement('div');
  friendsSec.className = 'hub-section';
  
  const friendsTitle = document.createElement('h2');
  friendsTitle.textContent = `Friends (${friends.length}/4)`;
  friendsSec.appendChild(friendsTitle);
  
  const friendsListContainer = document.createElement('div');
  friendsListContainer.className = 'friends-list';
  
  // Render each friend
  const colors = ['--friend1-color', '--friend2-color', '--friend3-color', '--friend4-color'];
  friends.forEach((friend, idx) => {
    const friendColor = `var(${colors[idx % colors.length]})`;
    
    const row = document.createElement('div');
    row.className = 'friend-row';
    
    row.innerHTML = `
      <div class="friend-info-left">
        <div class="friend-dot-indicator" style="background-color: ${friendColor}"></div>
        <span class="friend-name">${friend.name} (${friend.schedule.size} sets)</span>
      </div>
      <div class="friend-actions">
        <label class="friend-toggle-label">
          <input type="checkbox" class="friend-toggle" data-id="${friend.id}" ${friend.active ? 'checked' : ''}>
          Show
        </label>
        <button class="action-btn delete-btn" data-id="${friend.id}">Remove</button>
      </div>
    `;
    friendsListContainer.appendChild(row);
  });
  friendsSec.appendChild(friendsListContainer);
  
  // Add Friend Form
  const addForm = document.createElement('div');
  addForm.className = 'add-friend-form';
  if (friends.length < 4) {
    addForm.innerHTML = `
      <div class="add-friend-row">
        <input type="text" id="friend-name-input" class="glass-input" placeholder="Friend's Name">
        <button id="add-friend-btn" class="action-btn">Add Friend</button>
      </div>
      <input type="text" id="friend-url-input" class="glass-input" placeholder="Paste Share Link or Code (e.g. thu-1,thu-15)">
    `;
  } else {
    addForm.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-secondary); text-align: center;">Maximum 4 friends added. Remove a friend to add another.</p>`;
  }
  friendsSec.appendChild(addForm);
  hubContainer.appendChild(friendsSec);
  
  // 3. Combined Timeline Section
  const timelineSec = document.createElement('div');
  timelineSec.className = 'hub-section';
  
  const activeFriends = friends.filter(f => f.active);
  
  const timelineTitle = document.createElement('h2');
  timelineTitle.textContent = 'Group Schedule Compare';
  timelineSec.appendChild(timelineTitle);
  
  // Legend
  const legend = document.createElement('div');
  legend.className = 'compare-legend';
  let legendHtml = `<div class="legend-item"><div class="legend-dot avatar-user" style="width: 10px; height: 10px; border-radius: 50%;"></div>${myUsername}</div>`;
  activeFriends.forEach((f, idx) => {
    legendHtml += `<div class="legend-item"><div class="legend-dot avatar-friend${idx}" style="width: 10px; height: 10px; border-radius: 50%;"></div>${f.name}</div>`;
  });
  legend.innerHTML = legendHtml;
  timelineSec.appendChild(legend);
  
  // Collect all schedules
  const combinedIds = new Set([...mySchedule]);
  activeFriends.forEach(f => {
    f.schedule.forEach(id => combinedIds.add(id));
  });
  
  if (combinedIds.size === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.style.padding = '1.5rem 0';
    empty.innerHTML = `
      <p style="font-size: 0.9rem;">No sets added to compare. Add sets to your schedule or activate friends to see comparison timeline.</p>
    `;
    timelineSec.appendChild(empty);
  } else {
    const grouped = groupLineupByDay(combinedIds);
    
    Object.entries(grouped).forEach(([day, bands]) => {
      const dayContainer = document.createElement('div');
      dayContainer.className = 'day-section';
      
      const dayHeader = document.createElement('h3');
      dayHeader.className = 'day-header';
      dayHeader.style.position = 'static';
      dayHeader.style.fontSize = '1rem';
      dayHeader.style.marginTop = '1rem';
      dayHeader.textContent = day;
      dayContainer.appendChild(dayHeader);
      
      bands.sort(compareFestivalTimes);
      
      bands.forEach(band => {
        const timeStr = band.time.split(' - ')[0];
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const timeCol = document.createElement('div');
        timeCol.className = 'time-col';
        timeCol.textContent = timeStr;
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        
        const card = createBandCard(band, false, null);
        card.style.marginBottom = '0';
        card.style.border = 'none';
        card.style.padding = '0';
        card.style.background = 'transparent';
        
        // Find attendees
        const attendees = [];
        if (mySchedule.has(band.id)) {
          attendees.push({ name: myUsername, label: myUsername.substring(0, 2).toUpperCase(), type: 'user' });
        }
        activeFriends.forEach((f, idx) => {
          if (f.schedule.has(band.id)) {
            attendees.push({ name: f.name, label: f.name.substring(0, 2).toUpperCase(), type: `friend${idx}` });
          }
        });
        
        // Render Avatar Stack
        const stack = document.createElement('div');
        stack.className = 'attendee-stack';
        attendees.forEach(att => {
          const avatar = document.createElement('div');
          avatar.className = `attendee-avatar avatar-${att.type}`;
          avatar.textContent = att.label;
          avatar.title = att.name;
          stack.appendChild(avatar);
        });
        
        // Build card layout
        const cardContainer = card.querySelector('.band-info');
        if (cardContainer) {
          card.appendChild(stack);
        }
        
        content.appendChild(card);
        item.appendChild(timeCol);
        item.appendChild(content);
        dayContainer.appendChild(item);
      });
      
      timelineSec.appendChild(dayContainer);
    });
  }
  
  hubContainer.appendChild(timelineSec);
  mainContent.appendChild(hubContainer);
  
  // Save profile name
  document.getElementById('save-name-btn').addEventListener('click', () => {
    const input = document.getElementById('user-name-input');
    const newName = input.value.trim();
    if (newName) {
      myUsername = newName;
      localStorage.setItem('primavera-username', myUsername);
      showToast("Profile name saved!");
      updateHeaderName();
      renderCompare();
    }
  });
  
  // Friend Toggles
  document.querySelectorAll('.friend-toggle').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      const friend = friends.find(f => f.id === id);
      if (friend) {
        friend.active = e.target.checked;
        saveFriends();
        renderCompare();
      }
    });
  });
  
  // Friend Delete
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const index = friends.findIndex(f => f.id === id);
      if (index !== -1) {
        const name = friends[index].name;
        friends.splice(index, 1);
        saveFriends();
        showToast(`Removed ${name}`);
        renderCompare();
      }
    });
  });
  
  // Add Friend Button
  const addFriendBtn = document.getElementById('add-friend-btn');
  if (addFriendBtn) {
    addFriendBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('friend-name-input');
      const urlInput = document.getElementById('friend-url-input');
      
      const name = nameInput.value.trim();
      const inputStr = urlInput.value.trim();
      
      if (!name) {
        showToast("Please enter a friend name!");
        return;
      }
      
      if (!inputStr) {
        showToast("Please paste a share link or code!");
        return;
      }
      
      let parsedIds = [];
      try {
        if (inputStr.includes('shared=')) {
          const url = new URL(inputStr);
          const sharedParam = url.searchParams.get('shared');
          if (sharedParam) {
            parsedIds = sharedParam.split(',');
          }
        } else {
          parsedIds = inputStr.split(',');
        }
      } catch (err) {
        parsedIds = inputStr.split(',');
      }
      
      const validIds = parsedIds.map(id => id.trim()).filter(id => lineup.find(b => b.id === id));
      
      if (validIds.length === 0) {
        showToast("No valid set IDs found in input!");
        return;
      }
      
      const newFriend = {
        id: Math.random().toString(36).substring(2, 9),
        name: name,
        schedule: new Set(validIds),
        active: true
      };
      
      friends.push(newFriend);
      saveFriends();
      showToast(`Added ${name}!`);
      renderCompare();
    });
  }
}

// Helpers
function createBandCard(band, isSelected, onClick) {
  const card = document.createElement('div');
  card.className = `band-card ${isSelected ? 'selected' : ''}`;
  
  card.innerHTML = `
    <div class="band-info">
      <h3>${band.band}</h3>
      <div class="band-meta">
        <span>${band.time}</span>
        <span class="stage-badge">${band.stage}</span>
      </div>
    </div>
    ${onClick ? `<div class="select-toggle"></div>` : ''}
  `;

  if (onClick) {
    card.addEventListener('click', (e) => {
      onClick();
      card.classList.toggle('selected');
    });
  }

  return card;
}

function toggleBand(id) {
  if (mySchedule.has(id)) {
    mySchedule.delete(id);
  } else {
    mySchedule.add(id);
  }
  localStorage.setItem('primavera-schedule', JSON.stringify([...mySchedule]));
}

function handleShare() {
  if (mySchedule.size === 0) {
    showToast("Your schedule is empty!");
    return;
  }
  
  let name = myUsername;
  if (name === 'Me') {
    const promptedName = prompt("Enter your name so your friends know whose schedule this is:", "");
    if (promptedName && promptedName.trim()) {
      name = promptedName.trim();
      myUsername = name;
      localStorage.setItem('primavera-username', myUsername);
      updateHeaderName();
      if (currentView === 'compare') {
        renderCompare();
      }
    } else {
      name = 'Friend';
    }
  }
  
  const baseUrl = window.location.origin + window.location.pathname;
  const ids = Array.from(mySchedule).join(',');
  const shareUrl = `${baseUrl}?shared=${ids}&name=${encodeURIComponent(name)}`;
  
  navigator.clipboard.writeText(shareUrl).then(() => {
    showToast("Share link copied to clipboard!");
  }).catch(() => {
    prompt("Copy this link to share:", shareUrl);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// Start
document.addEventListener('DOMContentLoaded', init);
