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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var result = [];
  traverse(
    root,
    (val, level) => {
      if (level in result) {
        result[level].push(val);
      } else {
        result[level] = [val];
      }
    },
    0
  );

  return result;
};

// 先序遍历树, 按层序把值放到result数组里的二维数组里.
function traverse(root, action, level = 0) {
  if (root) {
    action(root.val, level);
    traverse(root.left, action, level + 1);
    traverse(root.right, action, level + 1);
  }
}
