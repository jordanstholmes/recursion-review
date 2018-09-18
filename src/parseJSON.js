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



var parseJSON = function(json) {
  var currentIdx = 0;
  var firstChar = json[0];
  
  var nextChar = function() {
    currentIdx++;
    return json[currentIdx];  
  };
  
  var currentChar = function() {
    return json[currentIdx];
  };
    
  var parseString = function() {
    var result = '';
    for (let char = nextChar(); char !== undefined && char !== '"'; char = nextChar()) {
      result += char;
    }
    return result;
  };
  
  var parseNumber = function() {
    var result = '';
    for (let digit = currentChar(); Number(digit) === Number(digit); digit = nextChar()) {
      result += digit;
    }
    return Number(result);
  };
  
  var parseNull = function() {
    currentIdx += 4;
    return null; 
  };
  
  var parseBoolean = function() {
    if (currentChar() === 'f') {
      currentIdx += 5;
      return false;
    } else {
      currentIdx += 4;
      return true;
    }
  };
  
  var parsePair = function(obj) {
    var key = parseString();
    nextChar(); // skip the semicolon
    var val = parseJSON(json.slice(currentIdx));
    obj[key] = val;
    return obj; 
  };
  
  // var parseObject = function(jstring) {
  //   var result = '';
    
  //   if ()
  // };
  
  // if (json.includes(':')) {
  //   return parsePair({});
  // }
  
  if (firstChar === '"') {
    return parseString();
  } else if (Number(firstChar) === Number(firstChar)) {
    return parseNumber();
  } else if (firstChar === 'f' || firstChar === 't') {
    return parseBoolean();
  } else if (firstChar === 'n') {
    return parseNull();
  }
  
  
  
  
  // your code goes here
};





