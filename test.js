import {
  greet,
  capitalize,
  reverse,
  countWords,
  truncate,
  add,
  subtract,
  multiply,
  divide,
  power,
  unique,
  chunk,
  shuffle,
  groupBy,
} from "./index.js";

// String tests
console.log("Testing string functions:");
console.assert(greet("World") === "Hello, World!", "Greet test failed");
console.assert(capitalize("hello") === "Hello", "Capitalize test failed");
console.assert(reverse("hello") === "olleh", "Reverse test failed");
console.assert(countWords("hello world") === 2, "Count words test failed");
console.assert(
  truncate("hello world", 5) === "hello...",
  "Truncate test failed"
);

// Math tests
console.log("Testing math functions:");
console.assert(add(2, 3) === 5, "Add test failed");
console.assert(subtract(5, 3) === 2, "Subtract test failed");
console.assert(multiply(2, 3) === 6, "Multiply test failed");
console.assert(divide(6, 2) === 3, "Divide test failed");
console.assert(power(2, 3) === 8, "Power test failed");

// Array tests
console.log("Testing array functions:");
console.assert(unique([1, 1, 2, 2, 3]).length === 3, "Unique test failed");
console.assert(chunk([1, 2, 3, 4], 2).length === 2, "Chunk test failed");

const testArr = [1, 2, 3];
const shuffled = shuffle(testArr);
console.assert(shuffled.length === testArr.length, "Shuffle test failed");

const objects = [{ type: "a" }, { type: "b" }, { type: "a" }];
const grouped = groupBy(objects, "type");
console.assert(Object.keys(grouped).length === 2, "GroupBy test failed");

console.log("All tests passed!");
