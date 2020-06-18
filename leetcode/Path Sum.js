/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum, isRoot = true, parentIsLeaf = false) {
  if (root === null) {
    // 如果传进来是个空树, 那就返回false
    if (isRoot) {
      return false;
    } else {
      // 是叶子节点并且sum为0, 则返回true
      return sum == 0 && parentIsLeaf == true;
    }
  } else {
    // 一开始都是先进到这里递归, 增加一个判断自身是否是叶子节点的判断, 然后进入递归, sum - val 得值.
    var amiLeaf = !root.left && !root.right;
    return (
      hasPathSum(root.left, sum - root.val, false, amiLeaf) ||
      hasPathSum(root.right, sum - root.val, false, amiLeaf)
    );
  }
};
