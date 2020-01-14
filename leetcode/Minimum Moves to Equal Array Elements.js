/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // 这题的思路是所有数组里的值减去最小值的和就是最小步数.
  // 1.先找到最小值
  let min = Math.min.apply(Math, nums);
  let s = 0;

  // 2. 依次拿数组里的所有数减去最小值,就是步数的和.
  for (let i = 0; i < nums.length; i++) {
    s = nums[i] - min + s;
  }

  return s;
};

console.log(minMoves([1, 2, 3, 4]));
