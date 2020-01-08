/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let count = 0;

  while (true) {
    // 判断里面是否有0, 没有就跳出循环
    if (nums.indexOf(0) === -1) {
      break;
    }

    // 删除其中的0, 并且计数
    nums.splice(nums.indexOf(0), 1);
    count++;
  }

  //在尾部补充0
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }

  return nums;
};

console.log(moveZeroes([1]));
