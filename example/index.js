const isUndefined = require("../lib");

console.log(isUndefined(undefined));
// => true

console.log(isUndefined(false));
// => false

console.log(isUndefined(null));
// => false
