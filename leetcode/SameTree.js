/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 判断两棵树是否一样, 只要考虑根节点是否一样, 然后在考虑左节点和有节点是否一样, 通过递归得出.
// 初始判断为如果p,q为空, 也相等. 或者有一方为空, 那另一方也需要为空才相等.
var isSameTree = function (p, q) {
  if (p == q) {
    return true;
  }

  if (p == null || q == null) {
    return !p && !q;
  }

  if (p.val !== q.val) {
    return false;
  }

  if (!isSameTree(p.left, q.left)) {
    return false;
  }

  if (!isSameTree(p.right, q.right)) {
    return false;
  }

  return true;
};
