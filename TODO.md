# ✅ TODO Checklist

All open TODOs in the codebase, gathered in one place. Tick an item off here **and** remove the matching `TODO` comment in code when it's done.

## Project-wide (`playwright.config.ts`)

- [ ] Add npm scripts to `package.json`: `test`, `test:ui`, `typecheck` (`tsc --noEmit`), `report`
- [ ] Add Prettier (`.prettierrc` with `"semi": true`) to fix mixed semicolons and missing end-of-file newlines
- [x] Update README: mark Page Object Model as in progress, add `pages/`, `actions/`, `types/` to the structure

## Actions (`actions/generalActions.ts`)

- [ ] `clickElement`: accept click options (e.g. `force`, `button`, `timeout`, `exact`) instead of always using exact matching
- [ ] `validateTextInElement`: accept validation options (e.g. `exact`, `ignoreCase`, `timeout`) instead of always using exact matching

## Resolved on this branch

- [x] Import `test` from a fixtures file once page objects exist (was in `tests/homePageTest.spec.ts`)
