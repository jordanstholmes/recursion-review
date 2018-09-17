// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*
BASE:
if it has no children
  return whether or not it has the class name
if it has children
  return whether it has the class AND recurse on its children        
*/
var getElementsByClassName = function(className) {
  
  let checkElementChildren = function(element) {
    if (element.nodeType === Node.TEXT_NODE) {
      return [];
    }
        
    let elemHasClass = element.classList.contains(className);
    let result = elemHasClass ? [element] : [];
    
    if (!element.hasChildNodes()) {
      return result;
    } else {
      return _.reduce(element.childNodes, function(acc, child) {
        return acc.concat(checkElementChildren(child));
      }, result);
    }
  };
  
  return checkElementChildren(document.body);  
};
