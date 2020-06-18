/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  var result = [];
  var current = 0;
  var value = 0;

  for (let i = 0; i < nums.length; i++) {
    current = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (current > nums[j]) {
        value++;
      }
    }

    result.push(value);
    value = 0;
  }

  return result;
};

var nums = [7, 7, 7];
console.log(smallerNumbersThanCurrent(nums));
