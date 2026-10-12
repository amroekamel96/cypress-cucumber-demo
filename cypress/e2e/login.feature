Feature: Login
  As a shopper
  I want to sign in to the store
  So that I can browse and buy products

  Background:
    Given I am on the login page

  @smoke
  Scenario: Successful login with valid credentials
    When I log in as the "standard" user
    Then I should see the products page

  Scenario: Locked out user cannot log in
    When I log in as the "locked" user
    Then I should see the login error "Sorry, this user has been locked out."

  Scenario: Invalid credentials are rejected
    When I log in as the "invalid" user
    Then I should see the login error "Username and password do not match any user in this service"

  Scenario Outline: Required fields are validated
    When I try to log in with username "<username>" and password "<password>"
    Then I should see the login error "<message>"

    Examples:
      | username      | password     | message               |
      |               | secret_sauce | Username is required  |
      | standard_user |              | Password is required  |
