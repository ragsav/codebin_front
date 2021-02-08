/* eslint-disable no-underscore-dangle, no-param-reassign */
export default class PrimeStore {
  constructor() {
    this._calculatedNumbers = {};
  }

  isPrime(int) {
    // Return existing calculated value if it exists
    if (this._inCalculatedNumbers(int)) {
      return this._getValueFromCalculatedNumbers(int);
    }
    // Perform new prime calculation
    if (this._calculateIfPrime(int)) {
      // Add new prime to calculatedNumbers
      this._addToCalculatedNumbers(int, true);
      return true;
    }
    // Add new non-prime to calculatedNumbers
    this._addToCalculatedNumbers(int, false);
    return false;
  }

  _addToCalculatedNumbers(int, bool) {
    this._calculatedNumbers[int] = bool;
  }

  _calculateIfPrime(int) {
    for (let i = 2; i <= parseInt(Math.sqrt(int), 10); i++) {
      if (int % i === 0) {
        return false;
      }
    }
    return int > 1;
  }

  _inCalculatedNumbers(int) {
    return this._calculatedNumbers.hasOwnProperty(int);
  }

  _getValueFromCalculatedNumbers(key) {
    return this._calculatedNumbers[key];
  }
}
