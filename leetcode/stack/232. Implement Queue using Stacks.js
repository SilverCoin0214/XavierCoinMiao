/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.queue = [];
  this.tmp = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  var size = this.queue.length;
  for (let i = 0; i < size - 1; i++) {
    this.tmp.push(this.queue.pop());
  }
  var p = this.queue.pop();
  for (let i = this.tmp.length - 1; i >= 0; i--) {
    this.queue.push(this.tmp[i]);
  }
  this.tmp = [];
  return p;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  var size = this.queue.length;
  for (let i = 0; i < size - 1; i++) {
    this.tmp.push(this.queue.pop());
  }
  var p = this.queue.pop();
  this.tmp.push(p);
  for (let i = this.tmp.length - 1; i >= 0; i--) {
    this.queue.push(this.tmp[i]);
  }
  this.tmp = [];
  return p;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
