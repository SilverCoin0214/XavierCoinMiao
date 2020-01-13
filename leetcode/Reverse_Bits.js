/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) | (n & 1);
    n = n >> 1;
  }

  return res;
};

console.log(reverseBits(0b00000010100101000001111010011100));

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var sum = 0;
  for (let i = 0; i < 32; i++) {
    // d就是二进制的位数,从最后一位开始往前
    var d = n % 2;

    // 这一步是左移, *2就是左移
    sum = sum * 2 + d;

    // 这一步就是右移,把右边最后一位给去掉.
    n = (n - d) / 2;
  }

  return sum;
};

console.log(reverseBits(0b00000010100101000001111010011100));
