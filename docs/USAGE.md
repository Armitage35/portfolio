
# Documentation for Portfolio Repository

## What This Project Is

This repository is a personal portfolio website built with Vue.js. It is designed to present your professional experience, skills, projects, testimonials, and CV in a visually appealing and interactive way. The site is modular, with each section (such as Projects, Skills, Testimonials, CV) implemented as a reusable Vue component.

## How It Works

- The entry point is `src/main.js`, which loads the main `App.vue` component.
- The app uses Vue Router (see `src/routes.js`) to manage navigation between different views (Portfolio, CV, Technical File, etc.).
- Each major section (Portfolio, CV, Technical File) is a view under `src/Views/` and contains its own subcomponents and styles.
- Components are organized in `src/components/` and grouped by feature (e.g., Experience, Project, Modal, Footer, etc.).
- Styles are written in SCSS and organized by component and view for maintainability.
- Static assets (images, logos, etc.) are in `src/assets/`.
- Internationalization (i18n) is supported via `src/i18n.json`.

## What the Project Contains

- **src/**: All source code, including:
   - `App.vue`: The root component
   - `main.js`: App entry point
   - `routes.js`: Route definitions
   - `components/`: Reusable UI components
   - `Views/`: Main views/pages (Portfolio, CV, Technical File)
   - `assets/`: Images and static files
   - `mixins/`: Vue mixins for code reuse
   - SCSS files for styling
- **public/**: Static files and the main HTML template
- **docs/**: Documentation for components and usage
- **tests/**: Unit and snapshot tests for components and layout
- **package.json**: Project dependencies and scripts
- **README.md**: Project summary and quick start

## How Testing Works

The project uses Jest and Vue Test Utils for testing. There are two main types of tests:

- **Unit tests** (in `tests/unit/components/*.spec.js`):
   - Test the logic and rendering of individual Vue components (e.g., Experience, Footer, Modal, Project)
   - Ensure that components behave as expected given different props and events
- **Snapshot tests** (in `tests/unit/components/*.snapshot.spec.js`):
   - Capture the rendered output of components and compare it to a saved snapshot
   - Help detect unexpected changes in the UI
- **Visual/layout test** (`tests/unit/visual-layout.spec.js`):
   - Checks the overall layout and structure of the main app

To run all tests:
```sh
yarn test:unit
```
Test results will be displayed in the terminal. Snapshots are stored in `tests/unit/components/__snapshots__/`.

## How to Add or Edit Content

- To add a new project, client, or work experience, update the relevant JSON or Vue files in `src/assets/` or `src/components/`.
- To add a new section or feature, create a new component in `src/components/` and import it where needed.
- To update styles, edit the corresponding SCSS file.

## How to Contribute

- Use Yarn for all dependency management and scripts
- Follow the code style (see `.eslintrc`, `sass-lint.yml`)
- Write or update unit/snapshot tests for new or changed components
- Update documentation in `docs/` as needed

## Additional Resources

- See `docs/Components.md` for component structure and usage
- See `README.md` for a project summary

---

**Note:** This project uses [Yarn](https://yarnpkg.com/) for dependency management and scripts. Please use `yarn` instead of `npm` for all commands.

For any issues or questions, please open an issue or contact the repository maintainer.

## Folder Structure

- **src/**: Main source code (Vue components, styles, assets, views)
- **public/**: Static files and the main HTML entry point
- **docs/**: Documentation for components and project usage
- **tests/**: Unit and snapshot tests
- **package.json**: Project dependencies and scripts
- **README.md**: Project summary and quick start

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (v6 or higher)


### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd portfolio
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```


### Development
To start a local development server with hot reload:
```sh
yarn serve
```


### Linting
To check code style and lint errors:
```sh
yarn lint
```


### Testing
To run unit and snapshot tests:
```sh
yarn test:unit
```


### Building for Production
To build the project for production:
```sh
yarn build
```
The output will be in the `dist/` folder.

### Deployment

You can deploy the contents of the `dist/` folder to any static hosting service (e.g., GitHub Pages, Netlify, Vercel). A sample deployment script is provided in `src/deploy.sh`.

## Contributing
- Follow the existing code style (see `.eslintrc`, `sass-lint.yml`)
- Write unit tests for new components
- Update documentation in `docs/` as needed

## Additional Resources
- See `docs/Components.md` for component structure and usage
- See `README.md` for a project summary

---


**Note:** This project uses [Yarn](https://yarnpkg.com/) for dependency management and scripts. Please use `yarn` instead of `npm` for all commands.

For any issues or questions, please open an issue or contact the repository maintainer.
