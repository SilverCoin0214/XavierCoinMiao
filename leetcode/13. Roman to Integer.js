/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var sum = 0;

  var obj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  for (let i = 0; i < s.length; i) {
    //把罗马数字和数值绑定为key,value, 罗马字母有两位和一位, 所以先切割成2位,判断是否存在,
    //不存在则走一位,存在则走两位, 知道字符串走完
    var char = s.slice(i, i + 2);
    if (obj[char]) {
      sum += obj[char];
      i = i + 2;
    } else {
      sum += obj[s[i]];
      i = i + 1;
    }
  }

  return sum;
};

var s = "LVIII";
console.log(romanToInt(s));
