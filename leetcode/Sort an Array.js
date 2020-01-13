/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });

  return nums;
};

console.log(sortArray([5, 1, 1, 2, 0, 0]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  冒泡排序, 外面的i是循环次数, 里面的j是依次比大小, 然后交换顺序
var sortArray = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let t = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = t;
      }
    }
  }

  return nums;
};

console.log(sortArray([5, 1, 1, 2, 0, 0]));
