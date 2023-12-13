# Launchable

[![NPM](https://flat.badgen.net/npm/v/launchable)](https://www.npmjs.com/package/launchable) [![Bundle](https://flat.badgen.net/bundlephobia/minzip/launchable)](https://bundlephobia.com/result?p=launchable@latest)

All the Javascript shared logic and helpers used by [Launchable Studio](https://launchable.studio).

## Installation

```bash
npm install launchable

yarn add launchable
```

## Usage

### `cx(className, conditionals)`

Generates a string of class names based on the provided base class name and a set of conditional class names.

We use it to conditionally style elements.

```javascript
// returns "base-class conditional-class-1 conditional-class-3"
cx("base-class", {
  "conditional-class-1": true,
  "conditional-class-2": false,
  "conditional-class-3": true,
});
```

### `dateFromNow(date)`

Calculates the distance between the current date and the provided date.

```javascript
// returns "5 days ago"
dateFromNow("2022-03-01");
```

```javascript
// returns "2 months ago"
dateFromNow("2022-01-06");
```

### `defined(value)`

Checks if a value is defined and not null.

We use it to conditionally render elements even when the value is an empty string or 0.

```javascript
// returns true
defined(0);

// returns true
defined("");

// returns false
defined(undefined);
```

### `formatNumber(number)`

Formats a number by inserting commas as thousand separators.

We use it to format large numbers in analytics stats, etc.

```javascript
const num = 1234567890;
const formattedNum = formatNumber(num);
console.log(formattedNum); // Outputs: "1,234,567,890"
```

### `nullify(value)`

Checks if the provided value is an empty string. If it is, it returns null; otherwise, it returns the original value.

We use it to prevent empty values in a nullable database column.

```javascript
// returns null
nullify("");

// returns "Hello, World!"
nullify("Hello, World!");
```

## Creating docs:

1. Open this repository in Cursor.
2. Type ⌘K and paste "Create a brief documentation for docs of how to use with examples".
3. Paste the output here.
