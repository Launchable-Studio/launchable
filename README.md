# launchable

## `cx(className, conditionals)`

This function generates a string of class names based on the provided base class name and a set of conditional class names.

@param {string} className - The base class name.
@param {Object} conditionals - An object where the keys are conditional class names and the values are booleans indicating whether the class should be included.

@returns {string} A string of class names with each class separated by a space.

### Example

```javascript
// returns "base-class conditional-class-1 conditional-class-3"
cx("base-class", {
  "conditional-class-1": true,
  "conditional-class-2": false,
  "conditional-class-3": true,
});
```

## `dateFromNow(date)`

This function calculates the distance between the current date and the provided date.

@param {string} date - The date to compare with the current date. Should be in a format recognized by the JavaScript Date object.

@returns {string} A string representing the distance of the provided date from the current date.

### Example

```javascript
// returns "5 days ago"
dateFromNow("2022-03-01");
```

```javascript
// returns "2 months ago"
dateFromNow("2022-01-06");
```

## `formatNumber(number)`

This function formats a number by inserting commas as thousand separators.

@param {number} number - The number to be formatted.

@returns {string} A string representation of the number with commas as thousand separators.

### Example

```javascript
const num = 1234567890;
const formattedNum = formatNumber(num);
console.log(formattedNum); // Outputs: "1,234,567,890"
```

## `nullify(value)`

This function checks if the provided value is an empty string. If it is, it returns null; otherwise, it returns the original value.

@param {string} value - The value to be checked.

@returns {string|null} The original value if it's not an empty string, or null if it is.

### Example

```javascript
// returns null
nullify("");

// returns "Hello, World!"
nullify("Hello, World!");
```

## Creating docs:

1. Open this repository in Cursor.
2. Type ⌘K and paste "Create a brief documentation for docs of how to use this function with examples".
3. Paste the output here.
