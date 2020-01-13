/**
 * @param {number[]} A
 * @return {number[]}
 */

// 把A拆分成计数和偶数两个数组, 然后合并
var sortArrayByParity = function(A) {
  let even = [];
  let odd = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      even.push(A[i]);
    } else {
      odd.push(A[i]);
    }
  }

  let B = even.concat(odd);
  return B;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
