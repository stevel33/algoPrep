var arr = [1, 10, -5, 1, -100];
// keep track of highest number, and lowest number (in case there are negatives)
// also keep track of highest product of two
// at each iteration, multiply that number by highest product of two and check if it is greater than current highest product of 3
var highestProductOfThree = arr[0] * arr[1] * arr[2];
var highest = Math.max(arr[0], arr[1]);
var lowest = Math.min(arr[0], arr[1]);
var highestProductOfTwo = arr[0] * arr[1];
var lowestProductOfTwo = arr[0] * arr[1];

for (var i = 2; i < arr.length; i++) {
  var current = arr[i];
  highestProductOfThree = Math.max(highestProductOfThree, highestProductOfTwo * current, lowestProductOfTwo * current);
  
  highestProductOfTwo = Math.max(highestProductOfTwo, highest * current, lowest * current);
  
  lowestProductOfTwo = Math.min(highestProductOfTwo, highest * current, lowest * current);
  
  highest = Math.max(highest, current);
  
  lowest = Math .min(lowest, current);
}

highestProductOfThree;