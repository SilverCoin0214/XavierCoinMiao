/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // 1.取出前后多余的空格
  s = s.trim();

  if (s.length == 0) {
    return 0;
  }

  // 用split的分成数组, 取出最后一个求出长度
  let arr = s.split(" ");

  let len = arr.length - 1;

  return arr[len].length;
};

console.log(lengthOfLastWord("a  addf  "));
