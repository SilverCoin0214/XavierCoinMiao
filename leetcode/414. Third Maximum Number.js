/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 先把数组去重然后在转为数组
  var numsSet = new Set(nums);
  var Setnum = Array.from(numsSet);

  // 之后进行排序, 排完如果个数小于3就返回最大, 剩下返回第三大
  var nn = Setnum.sort((a, b) => a - b);
  if (Setnum.length < 3) {
    return nn[nn.length - 1];
  }

  return nn[nn.length - 3];
};

var nums = [2, 2, 3, 1];
console.log(thirdMax(nums));
