/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  // 1. 向前搜索和向后搜索,如果两个值相等, 所以没有重复项
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("loveleetcode"));
