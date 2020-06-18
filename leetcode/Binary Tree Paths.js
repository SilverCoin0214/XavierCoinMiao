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
 * @return {string[]}
 */
var binaryTreePaths = function (root, previousPath = "", result = []) {
  if (!root) {
    return [];
  }

  // 如果节点存在, 且是叶子节点, 把值连接的字符串中
  if (root && !root.left && !root.right) {
    result.push(previousPath + "->" + root.val);
  } else {
    binaryTreePaths(root.left, previousPath + "->" + root.val, result);
    binaryTreePaths(root.right, previousPath + "->" + root.val, result);
  }

  // 因为上面的第一个箭头会多一个, 所以需要修改下字符串
  var result2 = [];
  for (let i = 0; i < result.length; i++) {
    result2.push(result[i].slice(2));
  }

  return result2;
};
