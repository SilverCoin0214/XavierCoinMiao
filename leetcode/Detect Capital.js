/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // 1. 先判断首字母是否是大写.
  let first = word[0].charCodeAt();

  //   2. 如果是大写, 则把后面的部分切片出来判断是否是全大写或全小写, 是就返回true,否则就是false
  if (first >= 65 && first <= 91) {
    let sp = word.slice(1);
    if (sp == word.slice(1).toLowerCase()) {
      return true;
    }

    if (sp == word.slice(1).toUpperCase()) {
      return true;
    }

    return false;
  }

  //   3. 首字母不是大写, 那么久一定是小写, 所以只要判断是否是全小写就可以了
  let low = word;
  if (low == word.toLowerCase()) {
    return true;
  }

  return false;
};
