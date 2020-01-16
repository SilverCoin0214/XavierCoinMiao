/**
 * @param {string} s
 * @return {number}
 */
// 同向双指针, i和j都在左边, j移动然后把字符放到数组里, 如果发现数组有重复,就清空数组, 然后i指针向前移动一格继续, 直到全部遍历完.
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) {
    return 0;
  }

  let arr = [];
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      if (arr.indexOf(s[j]) != -1) {
        arr = [];
        break;
      }

      arr.push(s[j]);

      if (arr.length > max) {
        max = arr.length;
      }
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("dvdf"));
