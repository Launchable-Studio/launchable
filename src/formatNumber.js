/**
 * `formatNumber(number)`
 *
 * This function formats a number by inserting commas as thousand separators.
 *
 * @param {number} number - The number to be formatted.
 *
 * @returns {string} A string representation of the number with commas as thousand separators.
 *
 * ### Example
 *
 * ```javascript
 * const num = 1234567890;
 * const formattedNum = formatNumber(num);
 * console.log(formattedNum); // Outputs: "1,234,567,890"
 * ```
 */
const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatNumber;
