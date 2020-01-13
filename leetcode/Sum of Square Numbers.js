/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  // 1. 对c开根号, 然后向下取整
  let a = Math.floor(Math.sqrt(c));

  for (a; a >= 0; a--) {
    // 2. 如果c本身就是一个开平方后为整数的值那就直接返回
    if (a * a == c) {
      return true;
    }
    // 3. 不是的话就找b的值,找到b的平方与b2相等的值
    let b2 = c - a * a;
    let b = Math.trunc(Math.sqrt(b2));
    if (b * b == b2) {
      return true;
    }
  }

  return false;
};
