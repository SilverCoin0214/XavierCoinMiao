/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 知道先序可以把第一个根节点拿出来, 知道中序可以在根节点的左右判断左右子树, 所以从中序里取出左右子树的长度
// 又可以把先序里的左右子树可以区分出来, 然后进行递归.
var buildTree = function (preorder, inorder) {
  if (preorder.length == 0) {
    return null;
  }

  var rootval = preorder[0];
  var root = new TreeNode(rootval);
  var idx = inorder.findIndex((it) => it == rootval);
  var leftInorder = inorder.slice(0, idx);
  var rightInorder = inorder.slice(idx + 1);
  var leftPreorder = preorder.slice(1, leftInorder.length + 1);
  var rightPreorder = preorder.slice(leftInorder.length + 1);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
