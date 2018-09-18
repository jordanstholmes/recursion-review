// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:


/*
/////////////////// PRIMATIVES ////////////////
"I'm a string" - string
4 - number
true - boolean
null - null


INPUT: a string
OUTPUT: (effects) constructs the JavaScript value or object described by the string
RESTRICTIONS: use recursion
EDGE CASES: nested arrays and objects

BASE CASES: 
'json' represents a value that is a primitive type
  * string
  * number
  * boolean
  * null
  
RECURSIVE CASE:
you hit an array or an object
or a key value pair that contains an array or an object as the value

PSEUDO CODE:
-String
  * if we hit a ", we want to grab the slice from that to the next "
    * we then need to increment the currentChar (somehow)  



*/

var parseString = function(str) {
  var result = '';
  for (let char = nextChar(); char !== undefined && char !== '"'; char = nextChar()) {
    result += char;
  }
  return result;
};

var parseObject = function(obj) {
  
};


var parseJSON = function(json) {
  var currentIdx = 0;
  var firstChar = json[0];
  
  var nextChar = function() {
    let next = json[currentIdx];
    currentIdx++;
    return next;  
  };
  
  if (firstChar === '"') {
    return  parseString(json);
  }
  
  // your code goes here
};





