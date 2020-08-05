/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

// 让一个数组ary线性增长,每次加1,如果ary符合target里的值, 就把target的给弹出,当target为0时,结束循环.
var buildArray = function (target, n) {
  var stack = [];
  var ary = [];
  var i = 1;
  while (i <= n) {
    ary.push(i);
    if (ary[i - 1] == target[0]) {
      stack.push("Push");
      target.shift();
    } else {
      stack.push("Push");
      stack.push("Pop");
    }

    if (target.length == 0) {
      break;
    }

    i = i + 1;
  }

  return stack;
};

var target = [1, 3];
var n = 3;

buildArray(target, n);
