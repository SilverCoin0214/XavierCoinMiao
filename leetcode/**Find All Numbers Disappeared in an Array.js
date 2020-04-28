/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(i + 1) == -1) {
      arr.push(i + 1);
    }
  }

  return arr;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

// 更好的解法
var findDisappearedNumbers = function(nums) {
  let index = 0;
  let tmp = null;
  while (index < nums.length) {
    let n1 = nums[index];
    if (index + 1 != n1) {
      let n2 = nums[n1 - 1];
      if (n1 != n2) {
        tmp = nums[index];
        nums[index] = nums[n1 - 1];
        nums[n1 - 1] = tmp;
      } else {
        index++;
      }
    } else {
      index++;
    }
  }
  console.log(nums);

  index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 != nums[i]) {
      nums[index++] = i + 1;
    }
  }

  nums.length = index;
  return nums;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
