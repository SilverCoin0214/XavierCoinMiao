/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 1) {
    return 0;
  }

  // 1. 构建一个拥有n个false的数组
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(false);
  }

  let count = 0;

  // 2. 从计数2开始, 如果i == false, 则i一定为质数, 并且把i的所有倍数全部改为true
  for (let i = 2; i < n; i++) {
    if (arr[i] == false) {
      count++;
      for (let j = 2; j < n; j++) {
        if (j * i >= n) {
          break;
        }
        arr[i * j] = true;
      }
    }
  }

  return count;
};

console.log(countPrimes(3));
