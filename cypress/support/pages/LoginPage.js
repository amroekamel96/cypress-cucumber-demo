class LoginPage {
  elements = {
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    error: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit("/");
  }

  login(username, password) {
    this.elements.username().clear().type(username);
    this.elements.password().clear().type(password, { log: false });
    this.elements.loginButton().click();
  }

  shouldShowError(message) {
    this.elements.error().should("be.visible").and("contain.text", message);
  }
}

export default new LoginPage();
