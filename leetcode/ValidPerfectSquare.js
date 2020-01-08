/**
 * @param {number} num
 * @return {boolean}
 */

//  思路还是二分法先求值, 然后把Mid不是整数的给排除
var isPerfectSquare = function(num) {
  let low = 0;
  let high = num;

  //  1. 1是例外, 没法差距只到1之间, 所以先排除
  if (num == 1) {
    return true;
  }

  // 2. 循环里二分的时候取整, 这样只要不是平方数, 永远不可能Mid相等,而是会一直差1
  while (high - low > 1) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid > num) {
      high = mid;
    }
    if (mid * mid < num) {
      low = mid;
    }

    if (mid * mid == num) {
      return true;
    }
  }

  return false;
};

console.log(isPerfectSquare(2));
