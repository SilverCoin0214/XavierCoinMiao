/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let count = 0;
  while (Math.pow(3, count) <= n) {
    if (Math.pow(3, count) == n) {
      return true;
    }
    count += 1;
  }
  return false;
};
