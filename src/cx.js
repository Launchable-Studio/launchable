/**
 * `cx(className, conditionals)`
 *
 * This function generates a string of class names based on the provided base class name and a set of conditional class names.
 *
 * @param {string} className - The base class name.
 * @param {Object} conditionals - An object where the keys are conditional class names and the values are booleans indicating whether the class should be included.
 *
 * @returns {string} A string of class names with each class separated by a space.
 *
 * ### Example
 *
 * ```javascript
 * // returns "base-class conditional-class-1 conditional-class-3"
 * cx("base-class", {
 *   "conditional-class-1": true,
 *   "conditional-class-2": false,
 *   "conditional-class-3": true
 * });
 * ```
 */
function cx(className, conditionals) {
  let classNames = className.split(" ");
  for (const [conditionalClass, conditional] of Object.entries(conditionals)) {
    if (conditional) {
      classNames.push(conditionalClass);
    }
  }
  return classNames.join(" ");
}

export default cx;
