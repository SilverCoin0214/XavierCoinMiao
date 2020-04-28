/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  // 先翻转数组
  for (let i = 0; i < A.length; i++) {
    A[i].reverse();
  }

  // 然后再把每个值都取反,
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] == 0) {
        A[i][j] = 1;
      } else if (A[i][j] == 1) {
        A[i][j] = 0;
      }
    }
  }

  return A;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
  ])
);

// 更好的解法
var flipAndInvertImage = function(A) {
  return A.map(a => {
    return a.reverse().map(b => b ^ 1);
  });
};
