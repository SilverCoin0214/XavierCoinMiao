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
 * @return {number}
 */
var minDepth = function (root) {
  if (root) {
    // 如果左子树为空, 要返回右子树的最小深度, 反之也一样. 但两边都不为空时比较更小的
    if (root.left === null) {
      return minDepth(root.right) + 1;
    }
    if (root.right === null) {
      return minDepth(root.left) + 1;
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }

  return 0;
};
