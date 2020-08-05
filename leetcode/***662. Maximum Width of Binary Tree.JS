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
var widthOfBinaryTree = function (root) {
  const queue = [{ node: root, pos: 0 }];
  let maxWidth = 0;

  while (queue.length) {
    const levelLength = queue.length;

    let min = Number.MAX_VALUE;
    let max = 0;

    for (let i = 0; i < levelLength; i++) {
      const curr = queue.pop();
      min = Math.min(min, curr.pos);
      max = Math.max(max, curr.pos);

      if (curr.node.left) {
        queue.unshift({ node: curr.node.left, pos: curr.pos * 2 + 1 });
      }
      if (curr.node.right) {
        queue.unshift({ node: curr.node.right, pos: curr.pos * 2 + 2 });
      }
    }

    const levelWidth = levelLength === 1 ? 1 : max - min + 1;
    maxWidth = Math.max(maxWidth, levelWidth);
  }

  return maxWidth;
};

// 创建值为val的树节点
function createTreeNode(val) {
  return {
    val: val,
    left: null,
    right: null,
  };
}

// 紧凑数组转为二叉树
function aryToTree(ary) {
  if (ary.length == 0) {
    return null;
  }

  var root = createTreeNode(ary[0]);
  var queue = [root];

  for (var i = 1; i < ary.length; i++) {
    var node = queue.shift();
    if (ary[i] !== null) {
      node.left = createTreeNode(ary[i]);
      queue.push(node.left);
    }

    i++;
    if (i >= ary.length) {
      break;
    }

    if (ary[i] !== null) {
      node.right = createTreeNode(ary[i]);
      queue.push(node.right);
    }
  }

  return root;
}

var ary = [1, 3, 2, 5, 3, null, 9];
var root = aryToTree(ary);

widthOfBinaryTree(root);
