/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    // 1. 判断左边后压入右边然后退出本次循环
    if (s[i] == "(") {
      arr.push(")");
      continue;
    }
    if (s[i] == "[") {
      arr.push("]");
      continue;
    }
    if (s[i] == "{") {
      arr.push("}");
      continue;
    }

    // 2. 判断右边是否跟数组里最后一个相同,不同就说明出错
    if (s[i] != arr.pop()) {
      return false;
    }
  }

  // 3. 如果长度为0,说明数组全部被弹出, 那么就是对的.
  return arr.length == 0;
};

console.log(isValid("{[]}"));
