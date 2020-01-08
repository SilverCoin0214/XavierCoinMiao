/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let remainder = 0;
  let num = x;
  let pa = 0;

  //   1. 回文数一定不会是负数, 因为有负号
  if (x < 0) {
    return false;
  }

  // 2. 0是特例要单独列出来
  if (x === 0) {
    return true;
  }

  // 3. 直接对数字进行求余然后组合成新的一个数字, 如果新数字跟所求数一样,那就是回文.
  // 但是因为组成数字的时候要乘以10,所以会发生判断时把10的倍数给计算成相等,要把10的倍数排除
  while (true) {
    remainder = num % 10;
    pa = remainder + pa * 10;
    num = (num - remainder) / 10;

    if (pa === x && pa % 10 != 0) {
      break;
    }

    if (pa > x) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(1));
