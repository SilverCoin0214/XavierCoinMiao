/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  // 1. 将数组变成字符串后通过0截取成数组,
  let str = nums.join("");
  let arr = str.split(0);

  // 2. 寻找其中Length最大值,然后返回
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
