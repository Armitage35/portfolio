# Visual Regression Testing Guide

## Overview

Your portfolio now includes comprehensive visual regression tests to ensure future changes don't break the look and feel of the application.

## Test Types

### 1. **Snapshot Tests** (`*.snapshot.spec.js`)
These tests capture the exact HTML output of components and alert you when changes occur:

- **Experience.snapshot.spec.js** - Captures experience card HTML with and without links
- **Modal.snapshot.spec.js** - Captures modal window structure with/without links  
- **Project.snapshot.spec.js** - Captures project card HTML
- **Footer.snapshot.spec.js** - Captures footer component structure

### 2. **Visual Layout Tests** (`visual-layout.spec.js`)
These tests verify that key DOM elements and CSS classes are present:

- Verifies flex layout structures
- Checks for presence of all major components
- Ensures proper spacing and positioning classes exist

## How Snapshot Testing Works

When you run `yarn test:unit`:

1. **First run**: Jest captures snapshots in `__snapshots__` folders
2. **Subsequent runs**: Jest compares actual output to snapshots
3. **If changed**: Test fails and shows the diff
4. **To approve changes**: Run `yarn test:unit -- -u` to update snapshots

## Common Scenarios

### ✅ Intentional CSS Changes
If you intentionally change styling:
```bash
yarn test:unit -- -u  # Update snapshots to match new styling
```

### ⚠️ Accidental DOM Changes
If a test fails unexpectedly:
```bash
yarn test:unit  # View the diff to see what changed
```

## Test Statistics

**Current Coverage:**
- 31 total tests (19 functional + 12 visual)
- 9 test suites
- 6 HTML snapshots capturing exact component structure

## Running Tests

```bash
# Run all tests
yarn test:unit

# Run tests in watch mode (re-runs on file changes)
yarn test:unit:watch

# Update snapshots after intentional changes
yarn test:unit -- -u

# Generate coverage report
yarn test:unit:coverage
```

## GitHub Actions

All tests run automatically on push:
- ✅ Unit tests (31 tests)
- ✅ Linting (ESLint + SASS-lint)
- ✅ Build verification
- ✅ Auto-deployment to GitHub Pages (if all tests pass)

## Best Practices

1. **Review diffs carefully** - When snapshots fail, examine the diff to ensure changes are intentional
2. **Commit snapshots** - Include `__snapshots__` folders in your git commits
3. **Update incrementally** - Don't blindly approve all snapshot changes; review each one
4. **Test before pushing** - Run `yarn test:unit` locally before committing

## Troubleshooting

### "Tests failed unexpectedly"
Check the diff in your terminal to see what component structure changed.

### "Need to update snapshots"
Run `yarn test:unit -- -u` to capture the new structure (after verifying changes are intentional).

### "Snapshots missing"
Run `yarn test:unit` once to generate initial snapshots in `__snapshots__` folders.
