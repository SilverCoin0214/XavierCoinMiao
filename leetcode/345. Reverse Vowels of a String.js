/**
 * @param {string} s
 * @return {string}
 */

// 方法不够好, 速度太慢
var reverseVowels = function (s) {
  s = s.split("");
  var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var vowelInS = [];

  // 找到字符中的元音
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      vowelInS.push(s[i]);
    }
  }
  // 把元音翻转
  var reverseVowelInS = vowelInS.reverse();

  // 从在在找到的元音位置上把翻转的元音一一添加进去
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      s.splice(i, 1, reverseVowelInS.shift());
    }
  }

  return s.join("");
};

var s = "aA";
console.log(reverseVowels(s));
