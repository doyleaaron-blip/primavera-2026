const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const lineup = fs.readFileSync('lineup.js', 'utf8');
const app = fs.readFileSync('app.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously", url: "http://localhost/" });

let mockStorage = {
  'primavera-schedule': JSON.stringify(["wed-1", "wed-2"]),
  'primavera-friends': JSON.stringify([
    { id: '1', name: 'Alice', schedule: ["wed-1", "wed-3"], active: true, isSynced: false }
  ])
};

Object.defineProperty(dom.window, 'localStorage', {
  value: {
    getItem: key => mockStorage[key] || null,
    setItem: (key, val) => mockStorage[key] = val,
    removeItem: key => delete mockStorage[key]
  }
});
dom.window.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve([]) });

// Define lineup on window
dom.window.eval(lineup.replace("const lineup =", "window.lineup ="));
dom.window.eval(app);

setTimeout(() => {
    dom.window.switchView('compare');
    const mainContent = dom.window.document.getElementById('main-content');
    console.log("Main content HTML:");
    console.log(mainContent.innerHTML);
}, 1000);
