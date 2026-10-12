import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../pages/InventoryPage";

// Dropdown labels in the feature file -> option values used by the site.
const SORT_OPTIONS = {
  "Name (A to Z)": "az",
  "Name (Z to A)": "za",
  "Price (low to high)": "lohi",
  "Price (high to low)": "hilo",
};

When("I sort products by {string}", (label) => {
  InventoryPage.sortBy(SORT_OPTIONS[label]);
});

When("I add {string} to the cart", (productName) => {
  InventoryPage.addToCart(productName);
});

When("I remove {string} from the cart", (productName) => {
  InventoryPage.removeFromCart(productName);
});

Then("I should see {int} products", (count) => {
  InventoryPage.shouldShowProductCount(count);
});

Then("the products should be sorted by price ascending", () => {
  InventoryPage.shouldBeSortedByPriceAscending();
});

Then("the cart badge should show {int}", (count) => {
  InventoryPage.elements.cartBadge().should("have.text", String(count));
});

Then("the cart badge should not be shown", () => {
  InventoryPage.elements.cartBadge().should("not.exist");
});
