/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth2 = function (root) {
  if (root) {
    if (root.children.length) {
      return 1 + Math.max(...root.children.map(maxDepth));
    } else {
      return 1;
    }
  }

  return 0;
};

// 如果子节点为空返回0, 否则进入子节点, 所以递归一开始会到叶子节点处返回0, 然后向上递归一层+1, 直到根节点
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let max = 0;

  for (let child of root.children) {
    max = Math.max(max, maxDepth(child));
  }

  return max + 1;
};
