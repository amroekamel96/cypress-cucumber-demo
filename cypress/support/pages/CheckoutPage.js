class CheckoutPage {
  elements = {
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    error: () => cy.get('[data-test="error"]'),
    completeHeader: () => cy.get('[data-test="complete-header"]'),
  };

  fillInformation({ firstName, lastName, postalCode }) {
    if (firstName) this.elements.firstName().type(firstName);
    if (lastName) this.elements.lastName().type(lastName);
    if (postalCode) this.elements.postalCode().type(postalCode);
    this.elements.continueButton().click();
  }

  finish() {
    this.elements.finishButton().click();
  }

  shouldShowError(message) {
    this.elements.error().should("be.visible").and("contain.text", message);
  }

  shouldShowOrderConfirmation() {
    this.elements
      .completeHeader()
      .should("have.text", "Thank you for your order!");
  }
}

export default new CheckoutPage();
