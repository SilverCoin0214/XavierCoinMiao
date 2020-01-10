/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N == 0) {
    return 0;
  }

  if (N == 1 || N == 2) {
    return 1;
  }

  if (N > 2) {
    return fib(N - 2) + fib(N - 1);
  }
};

console.log(fib(5));

function fib2(max) {
  var a = 0;
  var b = 1;
  var arr = [0, 1];

  while (arr.length < max) {
    [a, b] = [b, a + b];
    arr.push(b);
  }

  return arr;
}

console.log(fib2(5));
