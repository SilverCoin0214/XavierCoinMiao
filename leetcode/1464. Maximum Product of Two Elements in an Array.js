/**
 * @param {number[]} nums
 * @return {number}
 */

// 找数组中两个最大值, 所以直接排序之后取出末尾最后两项减一后现相乘就可以了
var maxProduct = function (nums) {
  var sortNums = nums.sort((a, b) => a - b);
  var len = sortNums.length;
  return (sortNums[len - 1] - 1) * (sortNums[len - 2] - 1);
};
