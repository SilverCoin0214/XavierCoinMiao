/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function (nums, n) {
  var result = [];
  var m = 0;
  for (let i = 0; i < nums.length; i++) {
    //奇数从0开始Push进数组
    if (i % 2 == 0) {
      result.push(nums[m]);
      m++;
      //偶数从n之后开始Push进数组
    } else {
      result.push(nums[n]);
      n++;
    }
  }

  return result;
};
