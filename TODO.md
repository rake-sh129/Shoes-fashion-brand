# TODO - Fix Vite 404 (localhost page not found)

- [x] 1) Update the repo-root `index.html` to correctly load the Vite entry from `premium-sneakers/src/main.jsx` (so `npm run dev` from the repo root works).
- [x] 2) Update repo-root `package.json` (scripts + Vite config) to point Vite at the `premium-sneakers` project.
- [x] 3) Add/verify a repo-root `vite.config.js` that uses `root: 'premium-sneakers'` (or equivalent) so Vite serves the correct app.
- [x] 4) Run `npm run dev` at the repo root and verify the page loads at http://localhost:5173/.
- [ ] 5) If needed, check the `react-router-dom` basename / route handling for `/`.


