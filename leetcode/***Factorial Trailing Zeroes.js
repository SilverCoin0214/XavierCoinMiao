/**
 * @param {number} n
 * @return {number}
 */
//   3星表示不是自己做出来的, 是参考了答案
//  最终尾随零的数量之和质因子中2和5的数量有关，很容易想到质因子5的数量一定会比2少，所以只需要算出n!的质因子5的数量即可
// 所以我们考虑1~n！之间5的倍数，25的倍数，125的倍数，625的倍数......的数量，即可算出答案
var trailingZeroes = function(n) {
  if (n >= 5) {
    return Math.trunc(n / 5) + trailingZeroes(n / 5);
  } else {
    return 0;
  }
};

console.log(trailingZeroes(30));

var trailingZeroes2 = function(n) {
  let po = 1;
  let zero = 0;
  while (Math.trunc(n / Math.pow(5, po)) > 0) {
    zero = zero + Math.trunc(n / Math.pow(5, po));
    po = po + 1;
  }
  return zero;
};

console.log(trailingZeroes2(30));
