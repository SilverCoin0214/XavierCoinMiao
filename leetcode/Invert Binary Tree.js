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
 * @return {TreeNode}
 */

// 把左子树给右子树, 把右子树给左子树, 对调就可以了
var invertTree = function (root) {
  if (root) {
    var left = root.left;
    var right = root.right;

    root.left = invertTree(right);
    root.right = invertTree(left);
  }

  return root;
};
