/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  let max = [];
  let len = nums.length / 3;

  // 1. 建立一个字典存放数组里的字母, 然后先给值都赋0
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = 0;
  }

  // 2. 循环一次把所有键的值都计算出来
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] += 1;
  }

  // 3. 遍历字典然后找到大于1/3的数然后返回
  for (let key in obj) {
    if (obj[key] > len) {
      max.push(Number(key));
    }
  }

  return max;
};

console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
