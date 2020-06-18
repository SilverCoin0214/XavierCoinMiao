// 创建值为val的树节点
function createTreeNode(val) {
  return {
    val: val,
    left: null,
    right: null,
  };
}

// 用数组表示的二叉树转换为链式表达的二叉树
function ary2tree(ary, i = 0) {
  if (ary[i] == null) {
    return null;
  }

  var root = createTreeNode(ary[i]);

  // 递归过程是先从一个节点的左节点一直遍历到没有左节点后,
  // 进入最后一个节点的右节点然后反弹会上一个节点再进入右节点再返回, 直到全部数组遍历完成
  root.left = ary2tree(ary, 2 * i + 1);
  root.right = ary2tree(ary, 2 * i + 2);

  return root;
}

// 将二叉树转换为数组
function tree2ary(root, ary = [], idx = 0) {
  if (root == null) {
    return;
  }

  ary[idx] = root.val;
  // 递归过程跟上面数组转树的过程一样, 也是先一直往左走到底,然后进入右节点依次向上反弹
  tree2ary(root.left, ary, idx * 2 + 1);
  tree2ary(root.right, ary, idx * 2 + 2);

  return ary;
}

// 将二叉树转成紧凑型数组
function treeToAry(root) {
  if (!root) {
    return [];
  }

  var result = [];
  // nodes数组是动态增长的,里面存放这每个节点, 从根节点到它的子节点, 在子节点的子节点.
  var nodes = [root];
  var i = 0;

  while (i < nodes.length) {
    var node = nodes[i++];
    if (node == null) {
      result.push(null);
    } else {
      result.push(node.val);
      nodes.push(node.left);
      nodes.push(node.right);
    }
  }

  return result;
}

// 转成紧凑数组的修改版
function treeToAry2(root) {
  if (!root) {
    return [];
  }

  var result = [];
  var nodes = [root];

  while (nodes.length) {
    /// nodes数组是动态增长的, 但是在这里每次都弹出第一个节点, 所以数组增加后减少, 直到为0
    var node = nodes.shift();
    if (node == null) {
      result.push(null);
    } else {
      result.push(node.val);
      nodes.push(node.left);
      nodes.push(node.right);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

// 转成紧凑数组的不同版
function treeToAry3(root) {
  if (!root) {
    return [];
  }

  var result = [root.val];
  // 这里的Nodes数组只存有意义的节点, 多余的null节点不进行存储
  var nodes = [root];

  while (nodes.length) {
    var node = nodes.shift();

    if (node.left) {
      nodes.push(node.left);
      result.push(node.left.val);
    } else {
      result.push(null);
    }

    if (node.right) {
      nodes.push(node.right);
      result.push(node.right.val);
    } else {
      result.push(null);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
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

// 先序遍历
function preOrderTraverse(root, action) {
  if (root) {
    console.log(root.val);
    preOrderTraverse(root.left, action);
    preOrderTraverse(root.right, action);
  }
}

//中序遍历
function inOrderTraverse(root) {
  if (root) {
    inOrderTraverse(root.left);
    console.log(root.val);
    inOrderTraverse(root.right);
  }
}

//后序遍历
function postOrderTraverse(root) {
  if (root) {
    postOrderTraverse(root.left);
    postOrderTraverse(root.right);
    console.log(root.val);
  }
}

console.log(preOrderTraverse(ary2tree([2, 3, null, 5, 6, 7, 8, 4])));
