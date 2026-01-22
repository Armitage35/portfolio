# Changelog

## [Unreleased]

## [2021-01-10]
### Added
- Initial project setup using Vue CLI and SCSS for styling. *(Project foundation)*
- Added main folder structure: `src/`, `public/`, `docs/`, `tests/`. *(Project structure)*
- Created `App.vue`, `main.js`, and base routing with Vue Router. *(App shell, navigation)*
- Added first components: Experience, Project, Modal, Footer, SkillCartridge, Testimonial. *(Experience section, Projects section, Modal dialogs, Footer, Skills display, Testimonials)*
- Added initial SCSS variables and global styles. *(Styling system)*
- Added sample assets and images in `src/assets/`. *(Content and visuals)*
- Added `README.md` with project overview and instructions. *(Documentation)*
- Added `package.json` with scripts for serve, build, lint, and test. *(Build, test, and dev workflow)*

### Changed
- N/A

### Fixed
- N/A

## [2021-02-15]
### Added
- Added unit and snapshot tests for Experience, Project, Modal, and Footer components. *(Testing: Experience, Project, Modal, Footer)*
- Added `sass-lint.yml` and integrated SCSS linting into test scripts. *(Code quality: SCSS linting)*
- Added documentation in `docs/Components.md` and `docs/USAGE.md`. *(Documentation)*

### Changed
- Improved component structure and modularity. *(Component architecture)*
- Updated SCSS for better maintainability and responsiveness. *(Styling system)*

### Fixed
- Fixed minor layout and style bugs in initial components. *(UI polish)*

## [2021-03-01]
### Added
- Added internationalization support with `src/i18n.json`. *(Multi-language support)*
- Added more sample data for projects, skills, testimonials, and work experience. *(Content: Projects, Skills, Testimonials, Work)*
- Added deployment script `src/deploy.sh` and instructions for GitHub Pages. *(Deployment)*

### Changed
- Updated routing to support new views: Portfolio, CV, Technical File. *(Navigation, Portfolio, CV, Technical File)*
- Improved accessibility and keyboard navigation in Modal component. *(Accessibility: Modal)*

### Fixed
- Fixed issues with image paths and asset loading in production builds. *(Deployment, assets)*

## [2026-01-21]
### Added
- Switched to dynamic imports for main views in `src/routes.js` to enable code splitting and lazy loading. *(Performance, navigation)*
- Added route meta titles and dynamic document title updates in `src/main.js` and `src/routes.js`. *(SEO, navigation)*
- Added and improved global styles and layout in `src/App.scss`, `src/Views/Portfolio/Home/Home.scss`. *(Styling, layout)*
- Added/updated `.eslintrc.js` and `.eslintrc.yml` for linting configuration. *(Code quality)*
- Added/updated `vue.config.js` to show lint errors as warnings. *(Developer experience)*
- Added/updated `docs/Components.md` and `docs/USAGE.md` for documentation. *(Documentation)*
- Added/updated `tests/unit/App.spec.js` and `tests/unit/Views.spec.js` for routing and rendering tests. *(Testing: routing, rendering)*
- Added/updated `.github/workflows/ensure-ai-guide-and-changelog.yml` for workflow automation. *(CI/CD, documentation enforcement)*
- Added/updated `claude.md` for AI agent usage and change tracking. *(AI agent support)*
- Added/updated `CHANGELOG.md` for change tracking. *(Documentation)*

### Changed
- Improved accessibility and ESC key handling in `src/components/Modal/Modal.vue`. *(Accessibility: Modal)*
- Improved layout, print styles, and navigation in `src/Views/TechnicalFile/TechnicalFile.scss`, `src/Views/TechnicalFile/TechnicalFile.vue`, `src/Views/TechnicalFile/TechnicalFileEntry/TechnicalFileEntry.scss`, `src/Views/TechnicalFile/TechnicalFileEntry/TechnicalFileEntry.vue`, `src/Views/TechnicalFile/TechnicalSideMenu/TechnicalSidemenu.scss`. *(Technical File view, print support, navigation)*
- Simplified skill data structure and display in `src/Views/Portfolio/Skills/Skills.vue`, `src/components/SkillCartridge/SkillCartridge.vue`, `src/i18n.json`, `src/mixins/skillSimplifierMixin.js`. *(Skills section)*
- Removed `skillLevel` from UI. *(Skills section)*
- Improved text and print layout in `src/Views/TechnicalFile/TechnicalFile.scss`, `src/Views/TechnicalFile/TechnicalFileEntry/TechnicalFileEntry.scss`, `src/i18n.json`. *(Technical File view, print support)*
- Updated site bubble in `src/Views/TechnicalFile/TechnicalFileEntry/TechnicalFileEntry.scss`. *(Technical File view)*
- Updated deployment workflow in `.github/workflows/development.yml`, `README.md`. *(Deployment, documentation)*
- Updated Footer snapshot to match current output in `tests/unit/components/__snapshots__/Footer.snapshot.spec.js.snap`. *(Testing: Footer)*

### Fixed
- Fixed casing and consistency in SCSS color values in `src/Views/TechnicalFile/TechnicalFile.scss` and `src/Views/TechnicalFile/TechnicalFileSideMenu/TechnicalSidemenu.scss`. *(Styling: Technical File)*
- Fixed person name casing in `src/i18n.json` for testimonials. *(Testimonials)*

---

---

*This changelog follows the Keep a Changelog format.*
