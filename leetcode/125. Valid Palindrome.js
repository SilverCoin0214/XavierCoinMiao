/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  var str = "";

  // 去除标点符号和空格, 只保留字母和数字组成的新字符串
  for (let i = 0; i < s.length; i++) {
    if (
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
      (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
    ) {
      str += s[i];
    }
  }

  // 回文只需要翻转字符串,如果相等就是真, 不等就是假
  var reverseStr = str.split("").reverse().join("");

  if (reverseStr == str) {
    return true;
  } else {
    return false;
  }
};
