/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 1. 先判断是否在数组里, 在就直接返回位置
  if (nums.indexOf(target) != -1) {
    return nums.indexOf(target);
  } else {
    // 2. 不在的话就把值放到数组里,然后进行一个排序,再返回位置
    nums.push(target);
    nums.sort(function(a, b) {
      return a - b;
    });

    return nums.indexOf(target);
  }
};

console.log(searchInsert([1, 3, 5, 6], 0));
