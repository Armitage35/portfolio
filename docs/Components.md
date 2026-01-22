

# Components

> This document describes how components interact throughout this project. For general usage, setup, and contribution guidelines, see [USAGE.md](USAGE.md) in this folder.

## About the Project

This portfolio is a modular Vue.js application. Each section (Projects, Skills, Testimonials, CV, etc.) is implemented as a reusable component or view. The structure below outlines the main components and their relationships.

**Note:** All project usage, setup, and contribution instructions are now in USAGE.md. Always use `yarn` for scripts and dependency management.

## Component Structure

- App
  - Components
    - Buttons
      - Primary button
      -Secondary button
    - Cards
    - Menu
    - Skill Cartridge (SkillCartridge)
    - Testimonials
  - Views
    - CV
  - Portfolio
    - Entrance
    - Intro
    - Skills
    - Work and Education
      - Work
      - Education
    - Projects
      - Project modal
    - Testimonials
    - Footer

## Testing

All components and views are covered by unit and snapshot tests (see `tests/unit/`).
- Unit tests check component logic and rendering.
- Snapshot tests ensure UI consistency.
- See USAGE.md for how to run tests and interpret results.

## Editing or Adding Components

- Add new features by creating components in `src/components/` and importing them where needed.
- Update styles in the corresponding SCSS file.
- For new data (projects, clients, etc.), update the relevant files in `src/assets/`.

For more details, see [USAGE.md](USAGE.md).
