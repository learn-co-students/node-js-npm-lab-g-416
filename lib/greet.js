const _ = require('lodash');

function greet(greeting, greetee) {
  return `${greeting}, ${greetee}!`;
}

const curriedGreet = _.curry(greet);

module.exports = curriedGreet;