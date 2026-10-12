Feature: Product catalogue
  As a logged-in shopper
  I want to browse, sort and add products
  So that I can pick what to buy

  Background:
    Given I am logged in as the "standard" user

  @smoke
  Scenario: Catalogue shows all products
    Then I should see 6 products

  Scenario: Sort products by price from low to high
    When I sort products by "Price (low to high)"
    Then the products should be sorted by price ascending

  @smoke
  Scenario: Adding a product updates the cart badge
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show 1

  Scenario: Removing a product clears the cart badge
    When I add "Sauce Labs Backpack" to the cart
    And I remove "Sauce Labs Backpack" from the cart
    Then the cart badge should not be shown
