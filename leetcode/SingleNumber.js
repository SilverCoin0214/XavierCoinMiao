/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 在数组里先找到一个数字的下标,如果找不到第二个下标,则返回这个数
  for (let num of nums) {
    let first = nums.indexOf(num);
    if (nums.indexOf(num, first + 1) == -1) {
      return num;
    }
  }

  // 直接用filter选出非重复的数
  // var r = nums.filter(function(x) {
  //   return nums.indexOf(x, nums.indexOf(x) + 1) == -1;
  // });

  // return r
};

console.log(singleNumber([5, 3, 3]));

// 解法2 异或运算
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  // 用异或来判断, 相同的数异或后会变为0,
  var rst = 0;
  for (let i = 0; i < nums.length; i++) {
    rst ^= nums[i];
  }

  return rst;
};

console.log(singleNumber([5, 3, 3]));
