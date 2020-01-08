/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let strn = String(n);
  let happynum = 0;

  // 把n转化成string后直接拆分单个数字,然后进行二次方计算.
  // 过程中用来判断最后的加和是否能够等于1, 可以的话就输出true.
  // 而会产生不断重复的情况是当和加为4时, 就会发现无限循环, 所以需要在这时候退出
  while (happynum != 1) {
    happynum = 0;
    for (let i = 0; i < strn.length; i++) {
      happynum = happynum + Math.pow(strn[i], 2);
    }
    strn = String(happynum);

    if (happynum == 1) {
      return true;
    }

    if (happynum == 4) {
      return false;
    }
  }

  return true;
};
