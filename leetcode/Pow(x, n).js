/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 二分法计算, 还没完全理解
var myPow = function(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let ans = 1;
  let tmp = x;

  while (n != 0) {
    if (n % 2 == 1) {
      ans *= tmp;
    }
    tmp *= tmp;
    n = Math.trunc(n / 2);
  }

  return ans.toFixed(5);
};

console.log(myPow(2, 10));
console.log(myPow(-1.0, 2147483647));
