<h1 align="center">🎭 QA Playground · Playwright</h1>

<p align="center">
  <i>My sandbox for learning, breaking and mastering <a href="https://playwright.dev/">Playwright</a> end-to-end testing.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/status-learning_in_public-orange?style=for-the-badge" alt="Status"/>
</p>

---

## 🧪 What is this?

A hands-on playground where I explore Playwright features one experiment at a time: locators, assertions, cross-browser runs, traces and reports. The goal is to turn the official docs into working, readable tests and keep a record of what I learn along the way.

## ⚙️ Setup at a glance

| | |
|---|---|
| **Runner** | `@playwright/test` + TypeScript |
| **Browsers** | Chromium · Firefox · WebKit |
| **Parallelism** | Fully parallel locally, 1 worker on CI |
| **Target app** | [UI Testing Playground](http://uitestingplayground.com) |
| **Retries** | 2 on CI, 1 locally |
| **Assertion timeout** | 10s (`expect.timeout`) |
| **Debugging** | Trace retained on failure |
| **Reporting** | Playwright HTML report |
| **Design** | Page Object Model + custom fixtures |

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Download the browsers
npx playwright install

# 3. Run the whole suite (all 3 browsers)
npx playwright test
```

### Handy commands

```bash
npx playwright test --ui                 # interactive UI mode
npx playwright test --headed             # watch the browser do its thing
npx playwright test --project=chromium   # run a single browser
npx playwright test --debug              # step through with the inspector
npx playwright show-report               # open the last HTML report
npx playwright codegen playwright.dev    # record a test by clicking around
```

## 📁 Project structure

```
qa-playground-playwright/
├── tests/
│   └── homePageTest.spec.ts   # data-driven spec: every home page link navigates to its page
├── pages/
│   ├── base.page.ts           # abstract BasePage: path + navigate() + shared actions
│   └── HomePage/
│       └── home.page.ts       # HomePage object + HomePageLinks enum
├── actions/
│   └── generalActions.ts      # reusable click/validate helpers wrapped in test.step
├── fixtures/
│   └── homePageFixture.ts     # `homePage` fixture: builds and opens the HomePage
├── types/
│   └── ui.types.ts            # shared types (e.g. ARIA Role)
├── playwright.config.ts       # browsers, retries, timeouts, reporter, trace settings
├── tsconfig.json              # strict TS + path aliases
├── TODO.md                    # checklist of open TODOs in the code
├── .env.example               # template for environment variables
└── package.json
```

### Path aliases

| Alias | Points to |
|---|---|
| `@pages/*` | `pages/*` |
| `@actions/*` | `actions/*` |
| `@fixtures/*` | `fixtures/*` |
| `@app-types` | `types/ui.types.ts` |

## 🗺️ Learning roadmap

- [x] Project scaffold with cross-browser config
- [x] First specs: page title + role-based navigation
- [ ] Page Object Model *(in progress: BasePage, HomePage, GeneralActions)*
- [x] Custom fixtures (`homePage`)
- [x] Data-driven tests (one test per home page link)
- [ ] API testing with `request` fixtures
- [ ] Auth state reuse (`storageState`)
- [ ] Visual comparisons (`toHaveScreenshot`)
- [ ] Mobile viewports (Pixel / iPhone)
- [ ] GitHub Actions CI pipeline

---

<p align="center">
  Made by <a href="https://github.com/maxlbborges">Max Leandro (Lê)</a> · QA Automation Engineer 🇧🇷
</p>
