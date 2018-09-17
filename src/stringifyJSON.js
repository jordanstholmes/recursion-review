// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
-Boolean, Number, String: "true" "2" "My string"
-undefined or function: return undefined when by themselves
-OBJECT:
  * '{"x":5}'
  * undefined or function: key and value are ommited
-ARRAY:
  * '[null,null,null]'
  * undefined or function: key and value are ommited, censored to null;
-Infinity, NaN, null are all: null

BASE CASE: 
-if it's a string, return w/ escaped double quotes
-if it's a number, convert to string
-if it's a boolean, convert to string
-if it's 

RECURSIVE CASE:

*/

var stringifyJSON = function(obj) {
  let type = typeof obj;
  if (type === 'string') {
    return `"${obj}"`;
  } else if (type === 'number' || type === 'boolean') {
    return obj.toString();
  } else if (obj === null || obj === Infinity || obj === -Infinity || Number.isNaN(obj)) {
    return 'null';
  }
    
};
