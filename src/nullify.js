/**
 * `nullify(value)`
 *
 * This function checks if the provided value is an empty string. If it is, it returns null; otherwise, it returns the original value.
 *
 * @param {string} value - The value to be checked.
 *
 * @returns {string|null} The original value if it's not an empty string, or null if it is.
 *
 * ### Example
 *
 * ```javascript
 * // returns null
 * nullify("");
 *
 * // returns "Hello, World!"
 * nullify("Hello, World!");
 * ```
 */

const nullify = (value) => (value === "" ? null : value);

export default nullify;
