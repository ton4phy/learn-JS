// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid,
// and false if it's invalid.
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. 
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
    // "(){}[]"   =>  True
    // "([{}])"   =>  True
    // "(}"       =>  False
    // "[(])"     =>  False
    // "[({})](]" =>  False


const validBraces = (str) => {
  if(str.length % 2 != 0) return false;
  if(str[0] == "}" || str[0] == ")" || str[0] == "]" ) return false;
  if(~str.indexOf("(]") ||
     ~str.indexOf("(}") ||
     ~str.indexOf("[)") ||
     ~str.indexOf("[}") ||
     ~str.indexOf("{]") ||
     ~str.indexOf("{)")){
       return false;
     };
  return true;
};

// OR

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
  };
