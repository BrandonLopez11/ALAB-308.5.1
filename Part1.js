// Take an array of numbers and return the sum.
function sumArray(arr) {
  var sum = 0; 
  for (var i = 0; i < arr.length; i++) { 
      sum += arr[i]; 
  }
  return sum; 
}

console.log(sumArray([1, 2, 3, 4])); 

//Take an array of numbers and return the average.
function averageArray(arr) {
  var sum = 0; 
  for (var i = 0; i < arr.length; i++) { 
      sum += arr[i]; 
  }
  return sum / arr.length; 
}

console.log(averageArray([1, 2, 3, 4])); 

//Take an array of strings and return the longest string.
function averageArray(arr) {
  var sum = 0; // Initialize sum to 0
  for (var i = 0; i < arr.length; i++) { 
      sum += arr[i]; 
  }
  return sum / arr.length; 
}

console.log(averageArray([1, 2, 3, 4])); // Output: 2.5

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arr, num) {
  var result = []; 
  for (var i = 0; i < arr.length; i++) { 
      if (arr[i].length > num) { 
          result.push(arr[i]); 
      }
  }
  return result;
}

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3)); 



// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNumbers(n) {
  if (n > 1) { 
      printNumbers(n - 1); 
  }
  console.log(n); 
}

printNumbers(5); 
