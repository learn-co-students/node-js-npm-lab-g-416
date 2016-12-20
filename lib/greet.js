/**
 * Import required libraries just below this comment block.
 * Make sure that they're assigned to the variables expected below!
 */

const npm = require('lodash');

function greet(greeting, greetee) {
  return `${greeting}, ${greetee}!`;
}

const curriedGreet = npm.curry(greet);

module.exports = curriedGreet;
