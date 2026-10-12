// Reusable custom commands.

/**
 * Log in through the login page using a user from cypress/fixtures/users.json.
 *
 * Sauce Demo is a single-page app: pages like /inventory.html are not served
 * directly by the server (a direct cy.visit returns 404), so we always go
 * through the login form, exactly like a real user.
 *
 * @param {string} userKey - key in users.json, e.g. "standard"
 */
Cypress.Commands.add("loginAs", (userKey = "standard") => {
  cy.fixture("users").then((users) => {
    const { username, password } = users[userKey];
    cy.visit("/");
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password, { log: false });
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
  });
});