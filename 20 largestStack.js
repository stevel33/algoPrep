function Stack() {
  // initialize an empty array
  this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {
  // if the stack is empty, return null
  if (!this.items.length) {
      return null;
  }
  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
      return null;
  }
  return this.items[this.items.length -1];
};

function MaxStack() {
  this.stack = new Stack();
  this.maxes = new Stack();
}

MaxStack.prototype.push = function(item) {
  this.stack.push(item);
  // if there is no last item or if the item is greater than or equal
  // to the last item, add the new item to the max stack
  if (!this.stack.peek() || item >= this.stack.peek()) {
    this.maxes.push(item);
  } 
}

MaxStack.prototype.pop = function(item) {
  const poppedItem = this.stack.pop();
  if (poppedItem === this.maxes.peek()) {
    this.maxes.pop();
  }
  return poppedItem;
}

MaxStack.prototype.getMax = function() {
  return this.maxes.peek();
}

const ziggy = new MaxStack();
ziggy.push(5);
ziggy.push(6);
ziggy.push(7);
ziggy.pop();
console.log(ziggy.getMax());
console.log(ziggy);

// Going through the entire stack to find the largest item is O(n).
// Instead, we can keep track of the largest items in another stack.
// Anytime there's a new largest item, add it to the end of the stack.
// If the item popped equals the same value as the last value in the stack,
// then pop it off the new stack as well. getMax will always return the last item