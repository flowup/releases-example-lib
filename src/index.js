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
/**
 * Calculated median average of all numbers in array.
 * @param {number[]} values Numbers to average.
 * @returns {number} Median of all numbers.
 */
export function median(values) {
  const sorted = sort(values, 'asc');
  if (sorted.length % 2 === 0) {
    return average([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]]);
  }
  return sorted[Math.floor(sorted.length / 2)];
}

/**
 * Sort array by numeric values.
 * @param {number[]} values Numbers to sort.
 * @param {'asc' | 'desc'} order Ascending (default) or descending order.
 * @returns {number[]} Sorted array.
 */
export function sort(values, order = 'asc') {
  return [...values].sort((a, b) => (order === 'desc' ? b - a : a - b));
}
