/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 2) {
    return 2;
  }

  if (n == 3) {
    return 3;
  }

  if (n > 3) {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};

console.log(climbStairs(10));
