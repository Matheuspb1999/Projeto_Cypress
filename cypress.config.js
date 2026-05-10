const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://scholar.google.com.br",
    setupNodeEvents(on, config) {
    },
  },
});