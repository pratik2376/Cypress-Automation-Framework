Feature: Users API
  As an API consumer
  I want to manage user resources
  So that I can perform CRUD operations on users

  Background:
    Given the API base URL is configured

  Scenario: Get all users
    When I send a GET request to "/users" endpoint
    Then I should receive a 200 status code
    And the response should be an array
    And the response should contain at least 1 user

  Scenario: Get a single user by ID
    When I send a GET request to "/users/1" endpoint
    Then I should receive a 200 status code
    And the response should contain user details
      | id | name | email |

  Scenario: Create a new user
    Given I have a new user payload
      | name     | email              | username |
      | John Doe | john.doe@test.com  | johndoe  |
    When I send a POST request to "/users" endpoint
    Then I should receive a 201 status code
    And the response should contain the created user data

  Scenario: Update an existing user
    Given I have an update user payload for user ID 1
      | name        | email                |
      | Jane Doe    | jane.doe@test.com    |
    When I send a PUT request to "/users/1" endpoint
    Then I should receive a 200 status code
    And the response should contain updated user data

  Scenario: Delete a user
    When I send a DELETE request to "/users/1" endpoint
    Then I should receive a 200 status code

  Scenario: Get user that does not exist
    When I send a GET request to "/users/99999" endpoint
    Then I should receive a 404 status code