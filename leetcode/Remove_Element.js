/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 索引找到需要删除的值,用splice删除掉, 然后返回长度
  while (nums.indexOf(val) != -1) {
    var s = nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 2));

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var i = 0;

  // 类似双指针, j是逐个前进,碰到不是查找的值就把值赋给i位置处,然后i前进一步.
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i++] = nums[j];
    }
  }

  return i;
};

console.log(removeElement([3, 2, 2, 3], 2));
