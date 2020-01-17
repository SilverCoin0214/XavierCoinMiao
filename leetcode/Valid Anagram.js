/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let arrs = s.split("");
  let arrt = t.split("");

  // 在数组中找匹配, 找到就把两者给删除, 然后如果删光了, 就为真, 没有就为false
  while (true) {
    let index = arrt.indexOf(arrs[0]);
    if (index != -1) {
      arrt.splice(index, 1);
      arrs.splice(0, 1);
    }

    if (arrt.length == 0 && arrs.length == 0) {
      return true;
    }

    if (index == -1 || arrt.length != arrs.length) {
      return false;
    }
  }
};

console.log(isAnagram("", ""));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let arrs = s.split("");
  let arrt = t.split("");

  arrs.sort();
  arrt.sort();

  let strs = arrs.join("");
  let strt = arrt.join("");

  return strs == strt;
};

console.log(isAnagram("ba", "ab"));
