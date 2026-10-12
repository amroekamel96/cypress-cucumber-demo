import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage";

Given("I am on the login page", () => {
  LoginPage.visit();
});

Given("I am logged in as the {string} user", (userKey) => {
  cy.loginAs(userKey);
});