/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = head;
  let reversed = null;

  while (node) {
    let temp = node;
    // node持续向后走
    node = node.next;
    // 这一步里把指向反转了, 从1->2变成了2->1
    temp.next = reversed;
    reversed = temp;
  }

  return reversed;
};
