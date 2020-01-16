/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxSum = nums[0];
  var minSum = 0;
  var sum = 0;

  var i;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum - minSum > maxSum) {
      maxSum = sum - minSum;
    }

    if (sum < minSum) {
      minSum = sum;
    }
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
