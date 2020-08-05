/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 先给链A打上标记, 随便增加一个属性, 因为后面有共同的节点, 所以链B在碰到节点上有额外属性的,就说明碰上了共同链条部分.
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    headA.sep = 1;
    headA = headA.next;
  }

  while (headB) {
    if (headB.sep) {
      return headB;
    }
    headB = headB.next;
  }
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 双指针, 让一个指针在链A上, 一个指针在链B上, 然后一直向前移动,当走到终点就接到另一条链上,
// 直到出现重合的位置, 就是共同的链节点开始的地方.
// 或者可以理解为, 把两条链表合并成一条链表, 最终在最后的一部分位置上就是重合链.
var getIntersectionNode2 = function (headA, headB) {
  var pA = headA;
  var pB = headB;
  while (pA != pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA;
};
