/**
 * String utility functions
 */

function greet(name) {
    return `Hello, ${name}!`;
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function reverse(str) {
    return str.split('').reverse().join('');
  }
  
  function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  
  function truncate(str, length) {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
  }
  
  module.exports = {
    greet,
    capitalize,
    reverse,
    countWords,
    truncate
  };