/**
 * @param {string} S
 * @return {string}
 */

// 把字符丢如栈中,如果跟栈里top的元素相等,就把栈里的top给pop掉,只在栈里保留不相等的元素
var removeDuplicates = function (S) {
  var ary = S.split("");

  var stack = [];

  for (let i = 0; i < ary.length; i++) {
    if (ary[i] !== stack[stack.length - 1]) {
      stack.push(ary[i]);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
};
