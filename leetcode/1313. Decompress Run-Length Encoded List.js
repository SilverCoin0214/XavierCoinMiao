/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 给一个数组, 每两个为一对, 第一个为数量,第二个为值, 例如[3,4]表示有3个数值为4的数组[4,4,4]
var decompressRLElist = function (nums) {
  var result = [];
  var lis = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    for (let j = 0; j < nums[i]; j++) {
      lis.push(nums[i + 1]);
    }

    result.concat(lis);
  }

  return result;
};

var nums = [1, 2, 3, 4];
console.log(decompressRLElist(nums));
