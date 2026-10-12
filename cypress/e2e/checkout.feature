Feature: Cart and checkout
  As a logged-in shopper
  I want to review my cart and complete an order
  So that I can receive my products

  Background:
    Given I am logged in as the "standard" user

  @smoke
  Scenario: Complete an order end to end
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    And I open the cart
    Then the cart should contain 2 items
    When I proceed to checkout
    And I enter my details "Amro" "Tester" "11511"
    And I finish the order
    Then I should see the order confirmation

  Scenario Outline: Checkout form validation
    When I add "Sauce Labs Backpack" to the cart
    And I open the cart
    And I proceed to checkout
    And I enter my details "<first>" "<last>" "<zip>"
    Then I should see the checkout error "<message>"

    Examples:
      | first | last   | zip   | message                    |
      |       | Tester | 11511 | First Name is required     |
      | Amro  |        | 11511 | Last Name is required      |
      | Amro  | Tester |       | Postal Code is required    |
