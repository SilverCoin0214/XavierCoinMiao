/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//  这题解法不好, 时间需求太高. 需要学习其他的解法.
var strStr = function(haystack, needle) {
  if (needle.length == 0 || haystack == needle) {
    return 0;
  }

  if (needle.length > haystack.length || needle.length == 0) {
    return -1;
  }

  // 1. 把字符保存在数组里, 如果第一个字母相等, 就继续判断下一个, 如果中断了那说明不等, 跳出并清空数组, 然后继续循环
  let arr = [];
  for (let i = 0; i < haystack.length; i++) {
    let k = i;
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] === haystack[k]) {
        arr.push(k);
        k++;

        if (arr.length == needle.length) {
          return arr[0];
        }
      } else {
        arr = [];
        break;
      }
    }
  }

  return -1;
};

console.log(strStr("mississippi", "pi"));
