/**
 * @param {number} n - a positive integer
 * @return {number}
 */

//  需要禁用八进制, 否则答案不对,  直接循环与1做并集, 然后计数, n再右移一位
var hammingWeight = function(n) {
  let count = 0;

  for (let i = 0; i < 32; i++) {
    if ((n & 1) == 1) {
      count++;
    }

    n = n >> 1;
  }

  return count;
};

console.log(hammingWeight(11111111111111111111111111111101));
