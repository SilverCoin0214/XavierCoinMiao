function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 知道后序可以把根节点从最后拿出来, 知道中序可以在根节点的左右判断左右子树, 所以从中序里取出左右子树的长度
// 又可以把后序里的左右子树可以区分出来, 然后进行递归.
var buildTree = function (inorder, postorder) {
  if (postorder.length == 0) {
    return null;
  }

  var rootval = postorder[postorder.length - 1];
  var root = new TreeNode(rootval);
  var idx = inorder.findIndex((it) => it == rootval);
  var leftInorder = inorder.slice(0, idx);
  var rightInorder = inorder.slice(idx + 1);
  var leftPostorder = postorder.slice(0, leftInorder.length);
  var rightPostorder = postorder.slice(leftInorder.length, -1);

  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);

  return root;
};

var preorder = [9, 15, 7, 20, 3];
var inorder = [9, 3, 15, 20, 7];

buildTree(inorder, preorder);
