/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let dis = 0;
  for (let i = 0; i < nums.length; i++) {
    dis = target - nums[i];

    // 这里应该还有优化的方面, 可以更快的匹配,而不是一直向后循环寻找相同的数
    for (let j = i + 1; j < nums.length; j++) {
      if (dis == nums[j]) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([-1, -2, 3, -4, 8], 11));
