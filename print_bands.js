const fs = require('fs');
let content = fs.readFileSync('lineup.js', 'utf8');
let lineup = [];
eval(content.replace('const lineup =', 'lineup ='));
console.log(JSON.stringify(lineup.map(b => b.band)));
