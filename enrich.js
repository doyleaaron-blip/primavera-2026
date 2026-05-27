const fs = require('fs');
const path = require('path');

const lineupPath = path.join(__dirname, 'lineup.js');
let lineupContent = fs.readFileSync(lineupPath, 'utf8');

// Use a regex or just eval to get the array
let lineup = [];
eval(lineupContent.replace('const lineup =', 'lineup ='));

const descriptions = {
  "Yard Act": "AI Summary: Celebrated for their spiky, spoken-word post-punk, critics praise their sharp social commentary and infectious groove.",
  "Wet Leg": "AI Summary: Breakout indie rock duo known for deadpan lyrics and catchy, hook-laden anthems that charm reviewers universally.",
  "Panda Bear": "AI Summary: Animal Collective member delivering hypnotic, sample-heavy psychedelic pop. Reviews highlight his celestial vocal harmonies.",
  "Father John Misty": "AI Summary: Acclaimed for his theatrical indie-folk and biting, satirical lyricism that critics often describe as brilliantly cynical.",
  "Bad Gyal": "AI Summary: A pioneer in the Spanish dancehall and reggaeton scene, praised for her high-energy performances and club-ready hits.",
  "Mac DeMarco": "AI Summary: The king of 'jangle-pop' and slacker rock, loved by fans and critics alike for his laid-back, goofy charm.",
  "Overmono": "AI Summary: Electronic duo celebrated for their ecstatic UK bass and techno productions, earning rave reviews for their live sets.",
  "Massive Attack": "AI Summary: Trip-hop legends. Critics consistently hail their live shows as politically charged, visually stunning, and sonically massive.",
  "The Cure": "AI Summary: Goth-rock pioneers with a massive catalog. Reviews praise Robert Smith's enduring vocal prowess and their emotionally sweeping concerts.",
  "Slowdive": "AI Summary: Shoegaze titans whose ethereal, wall-of-sound live performances are often described as transcendent and deeply atmospheric.",
  "Skrillex": "AI Summary: Electronic music visionary. His recent sets are praised for pushing genre boundaries and maintaining relentless crowd energy.",
  "PinkPantheress": "AI Summary: Breakout star known for her byte-sized, nostalgic UK garage and drum-n-bass pop tracks that dominate both TikTok and critical lists.",
  "Ethel Cain": "AI Summary: Southern gothic indie rock praised for its cinematic storytelling, dark Americana aesthetic, and her hauntingly powerful vocals.",
  "Gorillaz": "AI Summary: Damon Albarn's virtual band is renowned for their eclectic genre-hopping and visually spectacular, guest-heavy live shows.",
  "Big Thief": "AI Summary: Indie folk-rock darlings. Critics adore Adrianne Lenker's raw, poetic songwriting and the band's intense, emotive chemistry.",
  "Peggy Gou": "AI Summary: Global DJ superstar blending house and techno with infectious pop sensibilities, praised for her impeccable crowd control.",
  "Little Simz": "AI Summary: One of UK rap's brightest stars. Reviewers consistently award her perfect scores for her lyrical dexterity and grandiose live arrangements.",
  "The xx": "AI Summary: Known for their intimate, minimalist indie-pop. Critics often highlight the palpable chemistry and emotional vulnerability in their performances.",
  "Addison Rae": "AI Summary: Pop artist who transitioned from viral fame to critical intrigue with her polished, self-aware alt-pop sound.",
  "Knocked Loose": "AI Summary: Hardcore heavyweights. Reviews describe their live shows as viscerally aggressive, flawlessly executed, and intensely cathartic.",
  "Viagra Boys": "AI Summary: Swedish post-punk outfit acclaimed for their chaotic, satirical, and aggressively fun live energy.",
  "Carl Cox": "AI Summary: A true legend of house and techno. Critics and fans revere his unparalleled mixing skills and joyous stage presence."
};

lineup = lineup.map(band => {
  const desc = descriptions[band.band] || `AI Summary: Rising act at Primavera Sound bringing a highly anticipated mix of rhythm, melody, and unique festival energy.`;
  return { ...band, description: desc };
});

const newContent = `const lineup = ${JSON.stringify(lineup, null, 2)};\n`;
fs.writeFileSync(lineupPath, newContent);
console.log('Successfully enriched lineup.js with descriptions.');
