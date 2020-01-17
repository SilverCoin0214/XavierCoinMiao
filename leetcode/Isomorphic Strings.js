/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let obj = {};
  let obj2 = {};
  let str = "";

  // 1. 建立s到t的映射,
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = t[i];
  }

  // 2. 建立t到s的映射
  for (let i = 0; i < s.length; i++) {
    obj2[t[i]] = s[i];
  }

  // 3. 把s到t里的映射的值组成一个字符串
  for (let i = 0; i < t.length; i++) {
    str += obj[s[i]];
  }

  // 4. 判断两个映射长度是否一致,如果不一致, 说明有重叠映射, 两个字符指向了另一个数组里的同一个字符
  if (Object.keys(obj).length != Object.keys(obj2).length) {
    return false;
  }

  // 5. 如果新组的字符串等于t,那说明二者映射相同.
  if (str == t) {
    return true;
  } else {
    return false;
  }
};

console.log(isIsomorphic("ab", "aa"));
