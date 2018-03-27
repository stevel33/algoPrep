// brute force
var arr = [1, 7, 3, 4, 0];
var results = [];
for (var i = 0; i < arr.length; i++) {
  var product = 1;
  for (var j = 0; j < arr.length; j++) {
    if (j !== i) {
      product *= arr[j];
    }
  }
  results.push(product);
}

results;

// greedy approach
var arr = [1, 7, 3, 4];
var products = [];
var productSoFar = 1;

// populate products array with products of all numbers before each idx
for (var i = 0; i < arr.length; i++) {
  products[i] = productSoFar;
  productSoFar *= arr[i];
}

// reset productSoFar to 1
productSoFar = 1;
// now find the product of all numbers AFTER idx, and multiply products
for (var i = arr.length - 1; i >= 0; i--) {
  products[i] *= productSoFar;
  productSoFar *= arr[i];
}

products;
