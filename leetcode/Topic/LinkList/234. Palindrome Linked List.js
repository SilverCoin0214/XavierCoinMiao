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
// 思路就是把回文从中间截断, ,然后把前半部分的翻转, 和后半部分的做比较, 如何全等, 就为true,否则false
var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return true;
  }

  let mid = head;
  let pre = null;
  let reversed = null;
  while (head != null && head.next !== null) {
    pre = mid;

    // mid走一格, head走两格, 所以当head遍历完时, mid刚好走到中间.
    mid = mid.next;
    head = head.next.next;

    pre.next = reversed;
    reversed = pre;
  }

  if (head) {
    mid = mid.next;
  }

  while (mid) {
    if (reversed.val !== mid.val) {
      return false;
    }
    reversed = reversed.next;
    mid = mid.next;
  }

  return true;
};
