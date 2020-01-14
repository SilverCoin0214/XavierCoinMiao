/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let res = "";
  let len1 = num1.length;
  let len2 = num2.length;
  let i = len1 - 1;
  let j = len2 - 1;
  let flag = 0;

  // 1. 每一次取出字符串最后一位, 然后让两者相加, 保存到res里, 有进位就把进位保存到Flag里
  while (i >= 0 || j >= 0) {
    let a;
    let b;
    if (i >= 0) {
      a = num1.charAt(i--) - "0";
    } else {
      a = 0;
    }
    if (j >= 0) {
      b = num2.charAt(j--) - "0";
    } else {
      b = 0;
    }

    let s = a + b + flag;
    res = String(s % 10) + res;
    flag = Math.trunc(s / 10);
  }

  // 最后一次如果Flag有进位, 需要res加上1在返回,否则返回res
  return flag == 1 ? "1" + res : res;
};

console.log(addStrings("1111323", "321"));
