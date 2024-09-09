// randomUtils.js

/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer between min and max.
 */
function getRandomInt(min, max) {
    if (min > max) {
      throw new Error('Min should not be greater than Max');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * Generates a random floating-point number between min (inclusive) and max (exclusive).
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} - A random floating-point number between min and max.
   */
  function getRandomFloat(min, max) {
    if (min > max) {
      throw new Error('Min should not be greater than Max');
    }
    return Math.random() * (max - min) + min;
  }
  
  /**
   * Generates a random string of a specified length.
   * @param {number} length - The length of the random string.
   * @returns {string} - A random string of the specified length.
   */
  function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  /**
   * Generates a random date within a specified range.
   * @param {Date} startDate - The start date of the range.
   * @param {Date} endDate - The end date of the range.
   * @returns {Date} - A random date between startDate and endDate.
   */
  function getRandomDate(startDate, endDate) {
    if (startDate > endDate) {
      throw new Error('Start date should not be greater than end date');
    }
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();
    const randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) + startTimestamp;
    return new Date(randomTimestamp);
  }
  
  // Export functions
  module.exports = {
    getRandomInt,
    getRandomFloat,
    getRandomString,
    getRandomDate
  };
  