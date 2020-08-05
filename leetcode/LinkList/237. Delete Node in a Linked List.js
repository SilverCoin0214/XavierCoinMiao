/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 把后面一直值移到前一个来
  var p = node;
  while (p.next) {
    p.val = p.next.val;
    p = p.next;
  }

  // 找到倒二节点, 然后把倒二节点的Next置为null
  while (node.next.next) {
    node = node.next;
  }

  node.next = null;
};
