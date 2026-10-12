// Turns reports/cucumber-report.json into an HTML report in reports/html.
const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/html",
  pageTitle: "Cypress + Cucumber demo report",
  reportName: "Sauce Demo UI automation",
  displayDuration: true,
  metadata: {
    browser: { name: "electron", version: "bundled" },
    device: "CI / local machine",
    platform: { name: process.platform },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Application under test", value: "https://www.saucedemo.com" },
      { label: "Generated", value: new Date().toISOString() },
    ],
  },
});
