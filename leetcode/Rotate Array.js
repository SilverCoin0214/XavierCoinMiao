/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 迭代把后面的Pop出来添加到前面去
  for (let i = 0; i < k; i++) {
    let x = nums.pop();
    nums.unshift(x);
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// 解法2肯定更优
var rotate = function(nums, k) {
  // 1. 如果K移动的步数大于数组长度,则只要求余数就可以了
  if (k > nums.length) {
    k = k % nums.length;
  }

  // 2. splice删了后面的位置, 然后移到前面去
  let x = nums.splice(-k, k);
  nums.splice(0, 0, ...x);

  return nums;
};

console.log(rotate([1, 2], 3));
