/**
 * API Helper Functions
 * Utility functions for API testing
 */

class ApiHelper {
  /**
   * Make a GET request
   * @param {string} endpoint - API endpoint
   * @param {object} options - Request options
   */
  static get(endpoint, options = {}) {
    return cy.request({
      method: 'GET',
      url: endpoint,
      failOnStatusCode: false,
      ...options
    });
  }

  /**
   * Make a POST request
   * @param {string} endpoint - API endpoint
   * @param {object} body - Request body
   * @param {object} options - Request options
   */
  static post(endpoint, body = {}, options = {}) {
    return cy.request({
      method: 'POST',
      url: endpoint,
      body: body,
      failOnStatusCode: false,
      ...options
    });
  }

  /**
   * Make a PUT request
   * @param {string} endpoint - API endpoint
   * @param {object} body - Request body
   * @param {object} options - Request options
   */
  static put(endpoint, body = {}, options = {}) {
    return cy.request({
      method: 'PUT',
      url: endpoint,
      body: body,
      failOnStatusCode: false,
      ...options
    });
  }

  /**
   * Make a PATCH request
   * @param {string} endpoint - API endpoint
   * @param {object} body - Request body
   * @param {object} options - Request options
   */
  static patch(endpoint, body = {}, options = {}) {
    return cy.request({
      method: 'PATCH',
      url: endpoint,
      body: body,
      failOnStatusCode: false,
      ...options
    });
  }

  /**
   * Make a DELETE request
   * @param {string} endpoint - API endpoint
   * @param {object} options - Request options
   */
  static delete(endpoint, options = {}) {
    return cy.request({
      method: 'DELETE',
      url: endpoint,
      failOnStatusCode: false,
      ...options
    });
  }

  /**
   * Validate response status code
   * @param {object} response - API response
   * @param {number} expectedStatus - Expected status code
   */
  static validateStatus(response, expectedStatus) {
    expect(response.status).to.eq(expectedStatus);
  }

  /**
   * Validate response contains specific field
   * @param {object} response - API response
   * @param {string} field - Field name
   */
  static validateFieldExists(response, field) {
    expect(response.body).to.have.property(field);
  }

  /**
   * Validate response field value
   * @param {object} response - API response
   * @param {string} field - Field name
   * @param {any} expectedValue - Expected value
   */
  static validateFieldValue(response, field, expectedValue) {
    expect(response.body[field]).to.eq(expectedValue);
  }

  /**
   * Validate response schema
   * @param {object} response - API response
   * @param {object} schema - Expected schema
   */
  static validateSchema(response, schema) {
    Object.keys(schema).forEach(key => {
      expect(response.body).to.have.property(key);
      expect(typeof response.body[key]).to.eq(schema[key]);
    });
  }

  /**
   * Get authorization header
   * @param {string} token - Auth token
   */
  static getAuthHeader(token) {
    return {
      Authorization: `Bearer ${token}`
    };
  }

  /**
   * Set common headers
   * @param {object} customHeaders - Custom headers
   */
  static getHeaders(customHeaders = {}) {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...customHeaders
    };
  }
}

module.exports = ApiHelper;