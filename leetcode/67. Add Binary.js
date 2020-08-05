/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 字符串先转数组
  let result = [];
  let aAry = a.split("");
  let bAry = b.split("");

  let alen = aAry.length;
  let blen = bAry.length;

  // 把不等长的两个数组变成等长数组
  if (alen > blen) {
    for (let i = 0; i < alen - blen; i++) {
      bAry.unshift(0);
    }
  } else if (alen < blen) {
    for (let i = 0; i < blen - alen; i++) {
      aAry.unshift(0);
    }
  }

  // 把a,b对应的值相加, 如果是00则为0, 01或者10为1, 11为2, 存到result里
  for (let i = aAry.length - 1; i >= 0; i--) {
    if (aAry[i] == 0 && bAry[i] == 0) {
      result.unshift(0);
    } else if (
      (aAry[i] == 0 && bAry[i] == 1) ||
      (aAry[i] == 1 && bAry[i] == 0)
    ) {
      result.unshift(1);
    } else if (aAry[i] == 1 && bAry[i] == 1) {
      result.unshift(2);
    }
  }

  // 在这一步里修成值, 把为2的值改为0并且进位+1, 值为3的改为1并且进位+1, 在头部遇到进位则再加1
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] == 2 && i != 0) {
      result[i - 1] += 1;
      result[i] = 0;
    } else if (i == 0 && result[i] == 2) {
      result[i] = 0;
      result.unshift(1);
    } else if (result[i] == 3 && i != 0) {
      result[i - 1] += 1;
      result[i] = 1;
    } else if (result[i] == 3 && i == 0) {
      result[i] = 1;
      result.unshift(1);
    }
  }

  return result.join("");
};

var addBinary2 = function (a, b) {
  var sum = [];
  var carry = 0;

  var reverseA = a.split("").reverse().join("");
  var reverseB = b.split("").reverse().join("");

  for (var i = 0; i < a.length || i < b.length || carry > 0; i++) {
    var currentA = Number(reverseA[i] || 0);
    var currentB = Number(reverseB[i] || 0);
    var currentSum = currentA + currentB + carry;
    var result = currentSum % 2;

    carry = currentSum > 1 ? 1 : 0;
    sum.push(result);
  }

  return sum.reverse().join("");
};
