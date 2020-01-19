/**
 * @param {number} n
 * @return {string}
 */
// 3星,别人的思路,别人的解法, 自己能理解, 但是没到能够完全掌握,需要重新再重复的题目
var convertToTitle = function(n) {
  if (n < 27) {
    return String.fromCharCode(n + 64);
  }

  let s = "";
  while (n > 0) {
    // temp就是余数, 如果N是26的倍数, 所以每一位都是从后面先开始计算得出字母, 然后减去余数得到前面一位
    let temp = n % 26;
    temp = temp == 0 ? 26 : temp;
    s = String.fromCharCode(temp + 64) + s;
    n = n - temp;
    n = n / 26;
  }

  return s;
};

console.log(convertToTitle(28));
