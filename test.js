/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = 0;
  let len = nums.length;

  // 1. 先把数组求和
  for (let i of nums) {
    sum += i;
  }

  // 2. 通过 (n * (n + 1) / 2) 数列求和公式得出总个数应该是多少, 然后减去sum. 得出缺失的数
  return (len * (len + 1)) / 2 - sum;
};

console.log(missingNumber([0]));
