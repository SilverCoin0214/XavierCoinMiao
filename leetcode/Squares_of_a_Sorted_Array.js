/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  // 1.把数组的平方数求出来,
  let B = A.map(function(x) {
    return x * x;
  });

  // 2. 然后再比较大小
  A = B.sort(function(a, b) {
    return a - b;
  });

  return A;
};

console.log(sortedSquares([-7, -3, 2, 3, 11, 10000]));
