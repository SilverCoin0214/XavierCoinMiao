/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 通过目标数减其中一个值求得另一个值, 在去寻找匹配项
  for (let i = 0; i < numbers.length; i++) {
    let cut = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (cut == numbers[j]) {
        return [i + 1, j + 1];
      }
    }
  }

  // 由于存在两个数都是负数的情况, 所以会发生目标数小于值的情况, 需要单独列出来,
  if (numbers[i] >= target && numbers[i] < 0) {
    let cut = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (cut == numbers[j]) {
        return [i + 1, j + 1];
      }
    }
  }
};

console.log(twoSum([0, 3, 3, 4], 6));

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  if (numbers == null || numbers.length < 2) {
    return numbers[0];
  }

  // 双指针模式, 一个从左边往右边走, 一个从右边往左边走, 当发生两者相加大于目标值时跳出循环,右边继续向左移动
  var left = 0;
  var right = numbers.length - 1;
  for (right; right > left; right--) {
    while (left < right && numbers[left] + numbers[right] < target) {
      left++;
    }

    if (left != right && numbers[left] + numbers[right] == target) {
      return [left + 1, right + 1];
    }
  }
};

console.log(twoSum([0, 3, 3, 4], 6));
