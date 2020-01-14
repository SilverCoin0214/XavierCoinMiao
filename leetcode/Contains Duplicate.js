/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var myset = new Set(nums);

  if (nums.length == myset.size) {
    return false;
  } else {
    return true;
  }
};

console.log(containsDuplicate([1, 2, 3, 1]));
