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
var sumOfLeftLeaves = function (root, isLeft = false) {
  if (root) {
    // 第一层判断是否是叶子节点
    if (!root.left && !root.right) {
      // 第二层判断是否值左叶子节点, 是就范围值, 不是就返回0
      if (isLeft) {
        return root.val;
      }
    } else {
      // 从左子树进入+从右子树进入
      return (
        sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
      );
    }
  }
  return 0;
};
