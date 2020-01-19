/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 一颗星表示效率低, 具有改良的地方.
var containsNearbyDuplicate = function(nums, k) {
  // 1. 遍历里找是否有除自己之外重复的值, 有的话判断间距是否在K以内, 是就返回true.
  for (let i = 0; i < nums.length; i++) {
    let next = nums.indexOf(nums[i], i + 1);
    if (next != -1 && next - i <= k) {
      return true;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 1));
