/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let re;

  // 判断x的正负然后进行翻转, 为负数加上减号. 先转字符串翻转在变数字
  if (x < 0) {
    re = String(Math.abs(x))
      .split("")
      .reverse();
    re.unshift("-");
  } else {
    re = String(x)
      .split("")
      .reverse();
  }

  // 去除翻转后头部的0
  for (let i = 0; i < re.length; i++) {
    if (re[0] == 0) {
      delete re[i];
    }
    if (re[i + 1] != 0) {
      break;
    }
  }

  // 因为有范围限制, 溢出要返回0, 所以再做一个额外的判断
  x = Number(re.join(""));

  if ((x > 0 && x > Math.pow(2, 31)) || (x < 0 && x < Math.pow(-2, 31))) {
    return 0;
  }

  return x;
};

console.log(reverseNumber(-1534236469));
