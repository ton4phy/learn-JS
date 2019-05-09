// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
//   //  a = "xyaabbbccccdefww"
     //  b = "xxxxyyyyabklmopq"
     // longest(a, b) -> "abcdefklmopqwxy"

      // a = "abcdefghijklmnopqrstuvwxyz"
      // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
      
      
function longest(s1, s2) {
  let newStr = s1 + s2;
  let arr = newStr.split("");
  
  const sor = (a, b) => {
    if(a > b) {
      return 1;
    }else if (a < b) 
      return -1;
    }else {
      return 0;
    }
  }
  
  let newArr = arr.sort(sor);
  
  function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true;
  }

  return Object.keys(obj); 
  }

  let result = unique(newArr);
  
  return result.join("");
}      
