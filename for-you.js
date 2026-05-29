async function renderForYou() {
  mainContent.innerHTML = '<div class="empty-state">Loading...</div>';
  const token = window.localStorage.getItem('spotify_access_token');
  
  // 1. Calculate Schedule-based recommendations
  const scheduledBands = lineup.filter(b => mySchedule.has(b.id));
  const scheduleGenreCounts = {};
  scheduledBands.forEach(b => {
    if (b.genres) {
      b.genres.forEach(g => {
        g.split(/[\s-]+/).forEach(w => {
          if (w.length > 2) {
            const word = w.toLowerCase();
            scheduleGenreCounts[word] = (scheduleGenreCounts[word] || 0) + 1;
          }
        });
      });
    }
  });
  
  const scheduleTopWords = new Set(
    Object.entries(scheduleGenreCounts)
      .sort((a,b) => b[1] - a[1])
      .map(e => e[0])
      .slice(0, 15)
  );
  
  const scheduleScored = lineup.map(b => {
    if (mySchedule.has(b.id) || dismissedBands.has(b.id)) return { band: b, score: -1 };
    let score = 0;
    if (b.genres) {
      b.genres.forEach(g => {
        g.split(/[\s-]+/).forEach(w => {
          if (scheduleTopWords.has(w.toLowerCase())) score += 1;
        });
      });
    }
    return { band: b, score };
  }).filter(x => x.score > 0);
  
  scheduleScored.sort((a,b) => b.score - a.score);
  const scheduleMatches = scheduleScored.map(x => x.band);

  mainContent.innerHTML = '';
  
  const headerRow = document.createElement('div');
  headerRow.style.display = 'flex';
  headerRow.style.justifyContent = 'space-between';
  headerRow.style.alignItems = 'center';
  headerRow.style.marginBottom = '1.5rem';
  headerRow.innerHTML = `
    <h2 style="font-size: 1.3rem; color: var(--accent-secondary);">Your Recommendations</h2>
    ${token ? '<button id="disconnect-spotify" style="background: transparent; color: var(--text-secondary); border: none; font-size: 0.8rem; text-decoration: underline; cursor: pointer;">Disconnect</button>' : ''}
  `;
  mainContent.appendChild(headerRow);
  if (token) {
    document.getElementById('disconnect-spotify').addEventListener('click', () => {
      window.localStorage.removeItem('spotify_access_token');
      renderForYou();
    });
  }

  const renderedBands = new Set();

  if (!token) {
    const spotifyPromo = document.createElement('div');
    spotifyPromo.innerHTML = `
      <div class="empty-state" style="padding-top: 1rem; padding-bottom: 2rem;">
        <p style="margin: 0 0 1rem 0; font-size: 0.9rem;">Connect your Spotify account and we'll scan your Top Artists to find bands you'll love at Primavera.</p>
        <button id="spotify-connect-btn" class="btn-spotify">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.44 7.38 9.54 7.2 5.58 8.4c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.68-1.38 12.24-1.14 16.62 1.5.539.36.719 1.02.419 1.56-.299.42-1.02.599-1.8.24z"/></svg>
          Connect Spotify
        </button>
      </div>
    `;
    mainContent.appendChild(spotifyPromo);
    document.getElementById('spotify-connect-btn').addEventListener('click', initiateSpotifyAuth);
  } else {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=50', {
        headers: { 'Authorization': 'Bearer ' + token }
      });
      
      if (response.status === 401) {
        window.localStorage.removeItem('spotify_access_token');
        renderForYou();
        return;
      }
      
      if (!response.ok) throw new Error('Spotify API Error');
      
      const data = await response.json();
      const topArtists = data.items;
      const topArtistNames = topArtists.map(a => a.name.toLowerCase());
      
      const directMatches = lineup.filter(b => topArtistNames.includes(b.band.toLowerCase()) && !mySchedule.has(b.id) && !dismissedBands.has(b.id));
      
      const genreCounts = {};
      topArtists.forEach(a => {
        if(a.genres) {
          a.genres.forEach(g => {
            genreCounts[g] = (genreCounts[g] || 0) + 1;
          });
        }
      });
      
      const sortedGenres = Object.entries(genreCounts).sort((a,b) => b[1] - a[1]).map(e => e[0]);
      const topGenres = sortedGenres.slice(0, 5);
      
      const topGenreWords = new Set();
      sortedGenres.slice(0, 15).forEach(g => {
        g.split(/[\s-]+/).forEach(w => {
          if (w.length > 2) topGenreWords.add(w.toLowerCase());
        });
      });
      
      const scoredBands = lineup.map(b => {
        if (mySchedule.has(b.id) || dismissedBands.has(b.id) || directMatches.find(d => d.id === b.id)) {
          return { band: b, score: -1 };
        }
        
        let score = 0;
        if (b.genres) {
          b.genres.forEach(g => {
            g.split(/[\s-]+/).forEach(w => {
              if (topGenreWords.has(w.toLowerCase())) score += 1;
            });
          });
        }
        return { band: b, score };
      }).filter(x => x.score > 0);
      
      scoredBands.sort((a,b) => b.score - a.score);
      const genreMatches = scoredBands.map(x => x.band);
      
      if (directMatches.length > 0) {
        const directSec = document.createElement('div');
        directSec.className = 'day-section';
        directSec.innerHTML = `<h3 class="day-header" style="top:0; font-size:1rem; color: var(--success-color);">Because you listen to them</h3>`;
        directMatches.forEach(band => {
          renderedBands.add(band.id);
          const card = createBandCard(band, false, () => {
            toggleBand(band.id);
            renderForYou();
          }, () => {
            dismissedBands.add(band.id);
            localStorage.setItem('primavera-dismissed', JSON.stringify([...dismissedBands]));
            renderForYou();
          });
          directSec.appendChild(card);
        });
        mainContent.appendChild(directSec);
      }
      
      if (genreMatches.length > 0) {
        const genreSec = document.createElement('div');
        genreSec.className = 'day-section';
        genreSec.innerHTML = `<h3 class="day-header" style="top:0; font-size:1rem;">Because you like ${topGenres.slice(0,2).join(' & ')}</h3>`;
        genreMatches.slice(0, 15).forEach(band => {
          renderedBands.add(band.id);
          const card = createBandCard(band, false, () => {
            toggleBand(band.id);
            renderForYou();
          }, () => {
            dismissedBands.add(band.id);
            localStorage.setItem('primavera-dismissed', JSON.stringify([...dismissedBands]));
            renderForYou();
          });
          genreSec.appendChild(card);
        });
        mainContent.appendChild(genreSec);
      }
    } catch(e) {
      console.error(e);
      const errState = document.createElement('div');
      errState.className = 'empty-state';
      errState.textContent = 'Failed to load Spotify recommendations. Please try reconnecting.';
      mainContent.appendChild(errState);
      window.localStorage.removeItem('spotify_access_token');
    }
  }
  
  const finalScheduleMatches = scheduleMatches.filter(b => !renderedBands.has(b.id)).slice(0, 15);
  if (finalScheduleMatches.length > 0) {
    const schedSec = document.createElement('div');
    schedSec.className = 'day-section';
    schedSec.innerHTML = `<h3 class="day-header" style="top:0; font-size:1rem;">Based on your schedule</h3>`;
    finalScheduleMatches.forEach(band => {
      const card = createBandCard(band, false, () => {
        toggleBand(band.id);
        renderForYou();
      }, () => {
        dismissedBands.add(band.id);
        localStorage.setItem('primavera-dismissed', JSON.stringify([...dismissedBands]));
        renderForYou();
      });
      schedSec.appendChild(card);
    });
    mainContent.appendChild(schedSec);
  } else if (mySchedule.size === 0 && !token) {
     const emptyState = document.createElement('div');
     emptyState.className = 'empty-state';
     emptyState.textContent = "Add some bands to your schedule in the Lineup tab to get recommendations!";
     mainContent.appendChild(emptyState);
  }
}
