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
-if it's an array:
  add brackets outside
  forEach value,
    if it's undefined or a function, add 'null'
    else recurse
  
-if it's an object:
  forEach key,
    if the key or value is undefined, skip it
    else, recurse

*/

var stringifyJSON = function(obj) {
  let type = typeof obj;
  
  if (type === 'function' || type === 'undefined') {
    return undefined;
  } else if (type === 'string') {
    return `"${obj}"`;
  } else if (obj === null || obj === Infinity || obj === -Infinity || Number.isNaN(obj)) {
    return 'null';
  } else if (type === 'number' || type === 'boolean') {
    return obj.toString();
  } else if (obj.constructor === Array) {
    let insides = obj.reduce(function(acc, elem, idx) {
      let separator = idx === 0 ? '' : ',';
      if (elem === undefined || typeof elem === 'function') {
        return acc + separator + 'null';
      } else {
        return acc + separator + stringifyJSON(elem);
      }      
    }, '');
    return `[${insides}]`;
  } else if (type === 'object') {
    let count = 0;
    let insides = _.reduce(obj, function(acc, value, key) {
      let separator = count === 0 ? '' : ',';
      count++;
      if (value === undefined || typeof value === 'function' || key === undefined) {
        return acc;
      } else {
        return acc + separator + stringifyJSON(key) + ':' + stringifyJSON(value);
      }
    }, '');
    return `{${insides}}`;
  } 
};













