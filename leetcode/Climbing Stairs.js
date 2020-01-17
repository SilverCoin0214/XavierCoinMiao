/**
 * @param {number} n
 * @return {number}
 */

//  就是fib斐波那契数列, 只不过不能用递归, 需要用循环
var climbStairs = function(n) {
  var a = 1;
  var b = 1;
  var arr = [1, 1];

  while (arr.length < n + 1) {
    [a, b] = [b, a + b];
    arr.push(b);
  }

  return arr[n];
};

console.log(climbStairs(79));
