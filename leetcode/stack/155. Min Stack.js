/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.items = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.items.push(x);
  return this;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i] !== null) {
      return this.items.pop();
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i] !== null) {
      return this.items[this.items.length - 1];
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = Infinity;
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i] !== null) {
      if (this.items[i] < min) {
        min = this.items[i];
      }
    }
  }

  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
