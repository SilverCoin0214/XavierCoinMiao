/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  this._pushStack(root);
};

// 把树节点进入栈中, 而且是一直是塞入左节点, 因为需要的是中序遍历, 所以是左中右
BSTIterator.prototype._pushStack = function (root) {
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  //弹出时先弹左节点, 然后把节点指向右节点, 如果存在, 依旧是一直塞入左节点,
  var node = this.stack.pop();
  var val = node.val;
  var node = node.right;

  this._pushStack(node);

  return val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
