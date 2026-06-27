import { defineConfig, devices } from '@playwright/test';

// Target the local build by default (the code about to ship). Override with
// PORTFOLIO_URL to test the deployed site after a redeploy.
const PORTFOLIO_URL = process.env.PORTFOLIO_URL;
const LOCAL = 'http://127.0.0.1:8799';

export default defineConfig({
  testDir: 'tests',
  timeout: 90_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    baseURL: PORTFOLIO_URL || LOCAL,
    channel: 'msedge',            // use installed Edge — no Chromium download needed
    ignoreHTTPSErrors: true,
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },
  projects: [
    { name: 'edge', use: { ...devices['Desktop Edge'], channel: 'msedge' } },
  ],
  // Only spin up a local static server when no external URL is provided.
  ...(PORTFOLIO_URL
    ? {}
    : {
        webServer: {
          command: 'python -m http.server 8799',
          url: LOCAL,
          reuseExistingServer: true,
          timeout: 30_000,
        },
      }),
});
