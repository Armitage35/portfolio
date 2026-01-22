# Claude AI Agent Usage Guide

## Purpose
This document is intended for AI agents (including Claude) to understand how to use and interact with this repository, as well as to track changes made on 21 January 2026.

---

## Repository Overview
- Type: Vue.js portfolio website
- Structure:
  - src/ contains main application code, components, views, assets, and styles.
  - public/ contains static files and the main HTML entry point.
  - tests/ contains unit and snapshot tests for components.
  - Configuration files for Babel, Jest, Sass, and project metadata are at the root.

---

## How to Use This Repository
1. Install dependencies:
   - Use npm install or yarn install in the root directory.
2. Development server:
   - Run npm run serve or yarn serve to start the local dev server.
3. Build for production:
   - Run npm run build or yarn build.
4. Linting:
   - Run npm run lint to check code style and errors.
5. Testing:
   - Run npm run test:unit for unit tests.

---

## Changes Made on 21 January 2026

- Router: Added route meta titles and dynamic document title updates in src/main.js and src/routes.js
- Router: Switched to dynamic imports for main views to enable code splitting and lazy loading in src/routes.js
- Styling: Adjusted layout and removed unnecessary height in Home and App (src/App.scss, src/Views/Portfolio/Home/Home.scss)
- Styling: Improved global styles
- Skills: Simplified skill data structure and display (src/Views/Portfolio/Skills/Skills.vue, src/components/SkillCartridge/SkillCartridge.vue, src/i18n.json, src/mixins/skillSimplifierMixin.js)
- Skills: Removed skillLevel from UI
- Technical File: Improved layout, print styles, and navigation (src/Views/TechnicalFile/TechnicalFile.scss, src/Views/TechnicalFile/TechnicalFile.vue, src/Views/TechnicalFile/TechnicalFileEntry/TechnicalFileEntry.scss, src/Views/TechnicalFile/TechnicalFileEntry/TechnicalFileEntry.vue, src/Views/TechnicalFile/TechnicalSideMenu/TechnicalSidemenu.scss)
- Modal: Improved accessibility and ESC key handling (src/components/Modal/Modal.vue, tests/unit/components/Modal.spec.js)
- Tests: Updated Footer snapshot to match current output (tests/unit/components/__snapshots__/Footer.snapshot.spec.js.snap)
- Other: Improved text and print layout (src/Views/TechnicalFile/TechnicalFile.scss, src/Views/TechnicalFile/TechnicalFileEntry/TechnicalFileEntry.scss, src/i18n.json)
- Other: Updated site bubble (src/Views/TechnicalFile/TechnicalFileEntry/TechnicalFileEntry.scss)
- Other: Updated deployment workflow (.github/workflows/development.yml, README.md)
- Linting (npm run lint) and build (yarn build) commands were executed successfully.

---

## How I Handle Fixes

Whenever you describe a problem or show an error, I will:

- Analyze the error and determine the root cause.
- Immediately apply the required fix (code, config, or otherwise) as soon as the solution is clear.
- Avoid asking for confirmation or permission before making the change, unless absolutely necessary.
- Only ask for clarification if the problem or the desired outcome is ambiguous.

This ensures a fast, efficient workflow: you describe the problem, I fix it right away.

---

## Notes for AI Agents
- Always check this file for the latest usage instructions and change logs.
- If you make changes, update this file with a summary of your modifications and the date.
- For detailed component or view documentation, see the docs/ folder.

---

_Last updated: 21 January 2026_
