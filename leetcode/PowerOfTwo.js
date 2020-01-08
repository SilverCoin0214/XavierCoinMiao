/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }

  // 按位运算求出2的次方
  return (n & (n - 1)) == 0;
};

console.log(isPowerOfTwo(5));
