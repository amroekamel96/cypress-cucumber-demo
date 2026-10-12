import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

When("I log in as the {string} user", (userKey) => {
  cy.fixture("users").then((users) => {
    const { username, password } = users[userKey];
    LoginPage.login(username, password);
  });
});

When(
  "I try to log in with username {string} and password {string}",
  (username, password) => {
    // Empty strings from the Examples table mean "leave the field blank".
    if (username) LoginPage.elements.username().type(username);
    if (password) LoginPage.elements.password().type(password, { log: false });
    LoginPage.elements.loginButton().click();
  }
);

Then("I should see the products page", () => {
  cy.url().should("include", "/inventory.html");
  InventoryPage.elements.title().should("have.text", "Products");
});

Then("I should see the login error {string}", (message) => {
  LoginPage.shouldShowError(message);
});
