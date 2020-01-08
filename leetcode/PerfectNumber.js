/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  let arr = [];
  let sum = 0;

  // 1. 先把能够被num整除的数给找出来,用数组储存
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }

  // 2. 计算数组里的总和
  for (var x of arr) {
    sum += x;
  }

  // 3. 判断总和和num是否相等, 相等就是完美数.
  if (sum === num && sum != 0) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPerfectNumber(0));
