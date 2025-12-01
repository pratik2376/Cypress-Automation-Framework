Feature: Login API
  As a user
  I want to login to the application
  So that I can access protected resources

  Background:
    Given the API base URL is configured

  Scenario: Successful login with valid credentials
    Given I have valid login credentials
      | email            | password      |
      | testing5752@gmail.com | abc@123 |
    When I send a POST request to "/users/login" endpoint
    Then I should receive a 200 status code
    And the response should contain an auth token
    And the response time should be less than 2000 ms

  # Scenario: Failed login with invalid credentials
  #   Given I have invalid login credentials
  #     | email            | password   |
  #     | test@example.com | WrongPass  |
  #   When I send a POST request to "/api/login" endpoint
  #   Then I should receive a 401 status code
  #   And the response should contain error message "Invalid credentials"

  # Scenario: Failed login with missing email
  #   Given I have login payload with missing email
  #     | password      |
  #     | SuperSecret123 |
  #   When I send a POST request to "/api/login" endpoint
  #   Then I should receive a 400 status code
  #   And the response should contain error message "Email is required"

  # Scenario Outline: Login with different user roles
  #   Given I have login credentials for "<role>" user
  #   When I send a POST request to "/api/login" endpoint
  #   Then I should receive a 200 status code
  #   And the response should contain role "<role>"

  #   Examples:
  #     | role  |
  #     | admin |
  #     | user  |
  #     | guest |