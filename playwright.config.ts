import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://localhost:8080/",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    testIdAttribute: "id",
  },
  reporter: [["html"], ["list"]],
  timeout: 30000,
});
