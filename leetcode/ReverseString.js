/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let j = s.length - 1;

  // 翻转就是对调, 想法是把第一位和最后一位对调,第二位和倒二对调
  for (let i = 0; i < s.length / 2; i++) {
    // 取出倒数的第N值, 存入M中, i为0时取倒1, 为1时取倒2
    let m = s.splice(s.length - 1 - i, 1, "placeholder");
    // 把前第n位赋值到倒n位, j是逆序的,从最后一位开始, 所以赋值完,j要减一
    s[j--] = s[i];
    // 然后把第n位置上的值用倒n的值替代
    s.splice(i, 1, m[0]);
  }

  return s;
};

console.log(reverseString(["a", "b", "c", "d"]));
