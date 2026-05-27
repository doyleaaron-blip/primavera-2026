# Primavera Sound 2026 Festival Planner

A lightweight, mobile-first web application designed to help you and your friends coordinate your schedules at Primavera Sound Barcelona 2026. This app requires zero backend infrastructure, storing state entirely in the browser and leveraging static hosting.

## 🎸 Key Features

- **Interactive Lineup & Scheduling**: Browse the full festival lineup and toggle bands to build your personal schedule.
- **Spotify Integration (For You)**: Securely authenticate with Spotify (via PKCE OAuth) to pull your top artists and genres. The app's recommendation engine scores the festival lineup against your listening history and generates a curated list of recommended acts.
- **Recommendation Dismissal**: Seamlessly dismiss recommendations you aren't interested in; the app will remember your choice and instantly slide a new band into its place.
- **Group Compare**: Share your unique schedule code with friends. Add your friends' codes to the app to overlay their schedules onto yours and easily spot overlaps.
- **Streaming Previews**: One-click shortcuts to search for bands on Spotify or Qobuz directly from their lineup card.

## 🛠️ Technology Stack

- **Core**: Vanilla HTML, CSS, and JavaScript. No build step or heavy frameworks (like React or Vue) required.
- **Styling**: Hand-written, modern CSS utilizing CSS variables, Flexbox, glassmorphism UI elements, and responsive media queries.
- **State Management**: `localStorage` is used to persist your schedule, your friends' schedules, and dismissed recommendations across sessions.
- **Hosting**: Deployed directly via GitHub Pages.

## 🚀 Local Development

Since the app uses ES modules and fetch API requests, you will need to serve the files using a local HTTP server to avoid CORS issues.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/doyleaaron-blip/primavera-2026.git
   cd primavera-2026
   ```

2. **Run a local server**:
   If you have Python installed:
   ```bash
   python -m http.server 8000
   ```
   Or using Node.js (`http-server` or `live-server`):
   ```bash
   npx http-server
   ```

3. **Open the app**:
   Navigate to `http://localhost:8000` in your web browser.

## 📦 File Structure

- `index.html`: The main UI structure and layout.
- `style.css`: All application styling, themes, animations, and responsive rules.
- `app.js`: The core logic, state management, Spotify OAuth flow, recommendation engine, and DOM manipulation.
- `lineup.js`: The static database containing the festival lineup.
- `enrich.js`: A Node.js utility script used during development to programmatically inject AI-generated summaries and genre tags into the lineup dataset.

## 🎵 Spotify Authentication Details

The application uses the **Authorization Code with PKCE** flow for Spotify API access. This is a secure flow designed for frontend applications because it doesn't require storing a client secret.

- It requests the `user-top-read` scope to analyze your listening history.
- The `access_token` and PKCE `code_verifier` are kept entirely in local storage.
- The callback URI dynamically infers the domain (whether you're on `localhost` or GitHub pages) to handle redirects flawlessly.

## 🚀 Deployment

The app is deployed using GitHub Pages. Any changes pushed to the `main` branch will automatically be reflected on the live site.

```bash
git add .
git commit -m "Your feature description"
git push
```
