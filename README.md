# npm-starter-test

A comprehensive utility library for common JavaScript operations.

## Installation

```bash
npm install npm-starter-test
```

## Features

### String Utilities

- `greet(name)`: Returns a greeting message
- `capitalize(str)`: Capitalizes the first letter
- `reverse(str)`: Reverses a string
- `countWords(str)`: Counts words in a string
- `truncate(str, length)`: Truncates string with ellipsis

### Math Utilities

- `add(a, b)`: Adds two numbers
- `subtract(a, b)`: Subtracts two numbers
- `multiply(a, b)`: Multiplies two numbers
- `divide(a, b)`: Divides two numbers
- `power(base, exponent)`: Calculates power

### Array Utilities

- `shuffle(arr)`: Randomly shuffles an array
- `unique(arr)`: Returns unique values
- `groupBy(arr, key)`: Groups array by object key
- `chunk(arr, size)`: Splits array into chunks

## Usage

```javascript
import {
  greet,
  capitalize,
  reverse,
  add,
  power,
  unique,
  chunk,
} from "npm-starter-test";

// String utilities
console.log(greet("World")); // Hello, World!
console.log(capitalize("hello")); // Hello
console.log(reverse("hello")); // olleh

// Math utilities
console.log(add(2, 3)); // 5
console.log(power(2, 3)); // 8

// Array utilities
console.log(unique([1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
```

## License

MIT
