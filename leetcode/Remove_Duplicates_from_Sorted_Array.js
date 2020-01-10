/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // 因为已经排序, 所以每到不重复的位置就说明可以加1来计算个数, 然后修改前几个的值
    if (nums[i] != nums[i + 1]) {
      j++;
      nums[j] = nums[i + 1];
    }
  }

  // 少算了第一个, 所以需要加1. J本质上是数之间的间隙
  return j + 1;
};

console.log(removeDuplicates([1, 1, 2]));
