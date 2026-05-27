const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable", url: "http://localhost/" });

let mockStorage = {};
Object.defineProperty(dom.window, 'localStorage', {
  value: {
    getItem: key => mockStorage[key] || null,
    setItem: (key, val) => mockStorage[key] = val,
    removeItem: key => delete mockStorage[key]
  }
});
dom.window.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve([]) });

dom.window.addEventListener('error', (e) => {
    console.error("UNHANDLED ERROR:", e.error);
});

dom.window.document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded");
});

setTimeout(() => {
    console.log("Done");
    const mainContent = dom.window.document.getElementById('main-content');
    if (mainContent) {
      console.log("Main content HTML length:", mainContent.innerHTML.length);
    }
}, 3000);
