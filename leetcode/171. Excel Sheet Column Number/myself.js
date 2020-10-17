/**
 * @param {string} s
 * @return {number}
 */
/**
 *  实现思路,  'ABC' = num['A'] * 26 ** 0 + num['A'] * 26 ** 1 + num['C'] ** 2
 *  创造一个索引数组, 然后从中取到值乘26的N次方, 把字符串变数组后逆序一下.
 */
var titleToNumber = function (s) {
  let aryLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let num = 0;
  let aryS = s.split("");
  let reverseAryS = aryS.reverse();
  for (let i = 0; i < reverseAryS.length; i++) {
    let index = aryLetter.findIndex((e) => e === reverseAryS[i]) + 1;
    num = num + index * 26 ** i;
  }

  return num;
};
