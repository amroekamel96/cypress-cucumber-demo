class CartPage {
  elements = {
    items: () => cy.get('[data-test="inventory-item"]'),
    itemNames: () => cy.get('[data-test="inventory-item-name"]'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
  };

  shouldContainProduct(productName) {
    this.elements.itemNames().should("contain.text", productName);
  }

  shouldHaveItemCount(count) {
    this.elements.items().should("have.length", count);
  }

  checkout() {
    this.elements.checkoutButton().click();
  }
}

export default new CartPage();
