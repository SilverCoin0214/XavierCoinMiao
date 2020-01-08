/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if ((num & (num - 1)) === 0) {
    while (num > 1) {
      num = num >> 2;
    }

    if (num == 1) {
      return true;
    }
  }

  return false;
};

console.log(isPowerOfFour(5));
console.log(isPowerOfFour(-4));
console.log(isPowerOfFour(8));
console.log(isPowerOfFour(256));
console.log(isPowerOfFour(32));
console.log(isPowerOfFour(64));
console.log(isPowerOfFour(22));
