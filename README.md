# Cypress + Cucumber UI Automation Framework (Demo)

A small, readable test automation framework showing how I structure UI tests:
**Cypress** for execution, **Cucumber (Gherkin)** for BDD scenarios, and the
**Page Object Model** to keep selectors out of the test logic.

The application under test is the public practice site
[Sauce Demo](https://www.saucedemo.com), which exists for exactly this purpose.
Its login credentials are published on the site itself.

## What is covered

| Feature           | Scenarios                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------ |
| Login             | valid login, locked-out user, invalid credentials, required-field validation (data-driven) |
| Product catalogue | product count, price sorting, add/remove from cart and cart badge                          |
| Cart and checkout | full order end to end, checkout form validation (data-driven)                              |

Scenarios tagged `@smoke` form a quick sanity subset.

## Project structure

```
cypress/
  e2e/                      Gherkin feature files (the test scenarios)
  fixtures/users.json       Test users (public demo credentials)
  support/
    pages/                  Page objects: one class per page, selectors live here
    step_definitions/       Step definitions that connect Gherkin to page objects
    commands.js             Custom commands (cached UI login via cy.session)
    e2e.js                  Support entry point
cypress.config.js           Cypress + Cucumber preprocessor setup
cucumber-html-report.js     Builds an HTML report from the Cucumber JSON output
.github/workflows/          GitHub Actions pipeline
```

## Design choices

- **Selectors use `data-test` attributes**, which are more stable than CSS classes or text.
- **No hard-coded waits.** Cypress retries assertions automatically.
- **Page objects hold selectors and actions; step definitions stay thin.**
- **Login goes through the real login page** (Sauce Demo is a single-page app, so deep links like `/inventory.html` are not served directly).
- **Data-driven scenarios** use Scenario Outlines with Examples tables.

## Getting started

Requirements: Node.js 18+ and npm.

```bash
npm install
```

Run all scenarios headless:

```bash
npm test
```

Run only the smoke subset:

```bash
npm run test:smoke
```

Open the interactive runner:

```bash
npm run cy:open
```

Build the HTML report (after a run):

```bash
npm run report
# open reports/html/index.html
```

## CI

`.github/workflows/cypress.yml` installs dependencies, runs the suite on every
push and pull request, builds the HTML report, and uploads it (with failure
screenshots) as a build artifact.

## Tech stack

Cypress 13, `@badeball/cypress-cucumber-preprocessor`, esbuild,
`multiple-cucumber-html-reporter`, GitHub Actions.

## Notes

- This is a demo against a public practice site, not a client project.
- Sauce Demo can change its markup; if a selector breaks, update it in the
  matching page object only.
