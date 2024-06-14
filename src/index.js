/**
 * Adds all numbers in array together.
 * @param {number[]} values Numbers to sum.
 * @returns {number} Sum of all numbers.
 */
export function sum(values) {
  return values.reduce((acc, value) => acc + value, 0);
}

/**
 * Calculated mean average of all numbers in array.
 * @param {number[]} values Numbers to average.
 * @returns {number} Average of all numbers.
 */
export function average(values) {
  return sum(values) / values.length;
}
