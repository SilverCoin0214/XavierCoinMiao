/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = String(i);

    if (i % 3 == 0) {
      arr[i - 1] = "Fizz";
    }
    if (i % 5 == 0) {
      arr[i - 1] = "Buzz";
    }
    if (i % 3 == 0 && i % 5 == 0) {
      arr[i - 1] = "FizzBuzz";
    }

    console.log(arr[i - 1]);
  }

  return arr;
};

console.log(fizzBuzz(100));
