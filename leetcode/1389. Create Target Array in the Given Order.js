/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

// 第一个数组为值, 第二个数组为索引, 通过索引把值插入到新的数组里
var createTargetArray = function (nums, index) {
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    result.splice(index[i], 0, nums[i]);
  }

  return result;
};

var nums = [0, 1, 2, 3, 4];
var index = [0, 1, 2, 2, 1];

console.log(createTargetArray(nums, index));
