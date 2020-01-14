/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  let sum = 0;

  // 1. 先进行排序,
  nums.sort(function(a, b) {
    return a - b;
  });

  // 2. 查找到数组中的中位数, 然后所有其他的数减中位数的差的和就是步数
  let len = nums.length;
  let mid = nums[Math.trunc(len / 2)];

  for (let i = 0; i < nums.length; i++) {
    sum += Math.abs(nums[i] - mid);
  }

  return sum;
};

console.log(minMoves2([1, 2, 6]));
