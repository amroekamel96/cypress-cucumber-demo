class InventoryPage {
  elements = {
    title: () => cy.get('[data-test="title"]'),
    items: () => cy.get('[data-test="inventory-item"]'),
    itemNames: () => cy.get('[data-test="inventory-item-name"]'),
    itemPrices: () => cy.get('[data-test="inventory-item-price"]'),
    sortDropdown: () => cy.get('[data-test="product-sort-container"]'),
    cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
    cartLink: () => cy.get('[data-test="shopping-cart-link"]'),
  };

  // "Sauce Labs Backpack" -> sauce-labs-backpack
  slug(productName) {
    return productName.toLowerCase().replace(/\s+/g, "-");
  }

  addToCart(productName) {
    cy.get(`[data-test="add-to-cart-${this.slug(productName)}"]`).click();
  }

  removeFromCart(productName) {
    cy.get(`[data-test="remove-${this.slug(productName)}"]`).click();
  }

  sortBy(optionValue) {
    this.elements.sortDropdown().select(optionValue);
  }

  openCart() {
    this.elements.cartLink().click();
  }

  shouldShowProductCount(count) {
    this.elements.items().should("have.length", count);
  }

  shouldBeSortedByPriceAscending() {
    this.elements.itemPrices().then(($prices) => {
      const prices = [...$prices].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  }
}

export default new InventoryPage();
