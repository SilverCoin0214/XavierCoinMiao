/**
 * @param {string[]} words
 * @return {string[]}
 */

// 不懂跟hash表有什么关系. 想法思路是把键盘上的三行都设为字符串. 然后在每个元素的每个字符判断是否在行内,用count来做计算值, 如果count为0,
// 说明元素里的所有字母都在一行上, 可以把它添加到结果数组里, ,否则就不添加
var findWords = function (words) {
  var result = [];
  var keyboard1 = "qwertyuiop";
  let keyboard2 = "asdfghjkl";
  let keyboard3 = "zxcvbnm";

  for (let i = 0; i < words.length; i++) {
    var count1 = words[i].length;
    var count2 = words[i].length;
    var count3 = words[i].length;
    for (let j = 0; j < words[i].length; j++) {
      let word = words[i][j].toLocaleLowerCase();

      if (keyboard1.includes(word)) {
        count1--;
      }
      if (keyboard2.includes(word)) {
        count2--;
      }
      if (keyboard3.includes(word)) {
        count3--;
      }
    }

    if (count1 === 0 || count2 === 0 || count3 === 0) {
      result.push(words[i]);
    }
  }

  return result;
};
