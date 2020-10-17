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
var middleNode = function (head) {
  var p = head;
  var length = 0;
  var count = 0;

  // 循环一遍求长度
  while (p) {
    p = p.next;
    length++;
  }

  // 获取中间值
  var mid = Math.floor(length / 2);

  // 找到中间的位置然后返回
  while (count < mid) {
    head = head.next;
    count++;
  }

  return head;
};
