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
var maxDepth = function (root) {
  if (root) {
    // 递归过程从会总最叶子节点开始往上回溯, 比较最大的者返回后继续判断比大小, 得出深度
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }

  return 0;
};
