const pkg = require("./index.js");

// String tests
console.log("Testing string functions:");
console.assert(pkg.greet("World") === "Hello, World!", "Greet test failed");
console.assert(pkg.capitalize("hello") === "Hello", "Capitalize test failed");
console.assert(pkg.reverse("hello") === "olleh", "Reverse test failed");
console.assert(pkg.countWords("hello world") === 2, "Count words test failed");
console.assert(
  pkg.truncate("hello world", 5) === "hello...",
  "Truncate test failed"
);

// Math tests
console.log("Testing math functions:");
console.assert(pkg.add(2, 3) === 5, "Add test failed");
console.assert(pkg.subtract(5, 3) === 2, "Subtract test failed");
console.assert(pkg.multiply(2, 3) === 6, "Multiply test failed");
console.assert(pkg.divide(6, 2) === 3, "Divide test failed");
console.assert(pkg.power(2, 3) === 8, "Power test failed");

// Array tests
console.log("Testing array functions:");
console.assert(pkg.unique([1, 1, 2, 2, 3]).length === 3, "Unique test failed");
console.assert(pkg.chunk([1, 2, 3, 4], 2).length === 2, "Chunk test failed");

const testArr = [1, 2, 3];
const shuffled = pkg.shuffle(testArr);
console.assert(shuffled.length === testArr.length, "Shuffle test failed");

const objects = [{ type: "a" }, { type: "b" }, { type: "a" }];
const grouped = pkg.groupBy(objects, "type");
console.assert(Object.keys(grouped).length === 2, "GroupBy test failed");

console.log("All tests passed!");
