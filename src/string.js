/**
 * String utility functions
 */

export function greet(name) {
  return `Hello, ${name}!`;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str) {
  return str.split("").reverse().join("");
}

export function countWords(str) {
  return str.trim().split(/\s+/).length;
}

export function truncate(str, length) {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}
