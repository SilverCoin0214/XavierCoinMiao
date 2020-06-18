/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 先把字符串都备份成数组, 通过数组来操作
  var copyRansomNode = ransomNote.split("");
  var copyMagazine = magazine.split("");

  // 如果杂志中存在绑架信里的字母,就把杂志的那个字母给去掉, 绑架信的字母也去掉
  for (let i = 0; i < ransomNote.length; i++) {
    if (copyMagazine.includes(ransomNote[i])) {
      copyMagazine.splice(copyMagazine.indexOf(ransomNote[i]), 1);
      copyRansomNode.splice(copyRansomNode[i], 1);
    }
  }

  // 当绑架信里的字母都清空,说明全都可以从杂志得到, 返回true
  if (copyRansomNode.length === 0) {
    return true;
  } else {
    return false;
  }
};
