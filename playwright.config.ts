import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "test",
  reporter: "html",
  use: {
    headless: false,
    trace: "on-first-retry",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
