/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fastP = head;
  let slowP = head;
  while (fastP) {
    // 如果快指针为null了, 说明就没有环
    if (fastP.next == null) {
      return false;
    }

    // 慢指针走一步, 快指针走两步, 如果它们有相遇, 所以存在环
    slowP = slowP.next;
    fastP = fastP.next.next;
    if (slowP == fastP) {
      return true;
    }
  }

  return false;
};
