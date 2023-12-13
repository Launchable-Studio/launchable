/**
 * `defined(value)`
 *
 * This function checks if a value is defined and not null.
 *
 * @param {any} value - The value to check.
 *
 * @returns {boolean} Returns true if the value is not undefined and not null, otherwise false.
 *
 * ### Example
 *
 * ```javascript
 * // returns true
 * defined(0);
 *
 * // returns true
 * defined("");
 *
 * // returns false
 * defined(undefined);
```
 */

const defined = (value) => value !== undefined && value !== null;

export default defined;
