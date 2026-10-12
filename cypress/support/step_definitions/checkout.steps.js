import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

When("I open the cart", () => {
  InventoryPage.openCart();
});

When("I proceed to checkout", () => {
  CartPage.checkout();
});

When(
  "I enter my details {string} {string} {string}",
  (firstName, lastName, postalCode) => {
    CheckoutPage.fillInformation({ firstName, lastName, postalCode });
  }
);

When("I finish the order", () => {
  CheckoutPage.finish();
});

Then("the cart should contain {int} items", (count) => {
  CartPage.shouldHaveItemCount(count);
});

Then("I should see the order confirmation", () => {
  CheckoutPage.shouldShowOrderConfirmation();
});

Then("I should see the checkout error {string}", (message) => {
  CheckoutPage.shouldShowError(message);
});
