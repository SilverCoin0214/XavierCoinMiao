/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// count用来判断是否有下一个更大的值, 如果有+1, 没有就置为0, 不用返回-1
// 否则循环里会出现已经添加了最大值, 又把-1增加进去的情况.
// 主要思路就是 在Nums1中按顺序遍历, 取到值后去nums2找值的位置, 然后在位置开始循环找最大值,找到就加入result里
var nextGreaterElement = function (nums1, nums2) {
  var result = [];
  var count = 0;
  for (let i = 0; i < nums1.length; i++) {
    var idx = nums2.indexOf(nums1[i]);
    count = 0;
    for (let j = idx + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        count++;
        break;
      }
    }
    if (count === 0) {
      result.push(-1);
    }
  }

  return result;
};
