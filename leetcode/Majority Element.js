/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  let max = 0;
  let len = nums.length / 2;

  // 1. 建立字典,把数组里的数字作为键存放进去
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = 0;
  }

  // 2. 计算每个键的次数
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] += 1;
  }

  // 3. 遍历字典, 然后找到符合要求的键
  for (let key in obj) {
    if (obj[key] >= len) {
      max = key;
    }
  }

  return max;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
