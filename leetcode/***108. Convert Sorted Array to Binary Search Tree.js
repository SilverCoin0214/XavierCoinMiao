/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 因为数组已经排序, 所以从中间分割数组最容易获得平衡树, 把中间值作为根节点, 然后同样的方式递归
var sortedArrayToBST = function (nums) {
  if (nums.length) {
    var midIdx = Math.floor(nums.length / 2);
    var root = new TreeNode(nums[midIdx]);
    root.left = sortedArrayToBST(nums.slice(0, midIdx));
    root.right = sortedArrayToBST(nums.slice(1 + midIdx));

    return root;
  }

  return null;
};
