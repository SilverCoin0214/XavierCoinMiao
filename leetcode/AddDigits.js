/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let remainder;
  let divisor;
  let s = 0;

  // 1. 10以下不用判断直接输出
  if (num < 10) {
    return num;
  }

  // 2. 求出除数和余数然后把余数给加起来,当除数也小于10时,把除数也加到sum里, 得出所有相加的和
  // 3. 对相加的和做判断是否还是大于等于10,如果是那就继续这个循环,知道它小于10, 最后输出
  while (num >= 10) {
    remainder = num % 10;
    divisor = (num - remainder) / 10;
    num = divisor;

    s = remainder + s;

    if (num < 10) {
      s = s + num;
      num = s;
      s = 0;
    }
  }

  return num;
};

console.log(addDigits(40));
console.log(addDigits(8));
console.log(addDigits(0));
console.log(addDigits(10));
console.log(addDigits(1234));
console.log(addDigits(32));
