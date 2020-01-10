/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let newstr = "";

  // 1. 先拆分string变成数组
  let arr = str.split("");

  // 2.在数组里单个计算ascii的值,然后判断是不是在大写区间,是就改成小写,其他不变, 组成新的字符串
  for (let i of arr) {
    let word = i.charCodeAt(0);

    if (word >= 65 && word <= 90) {
      i = String.fromCharCode(word + 32);
    }
    newstr += i;
  }

  return newstr;
};

console.log(toLowerCase("heererEWRJLWERJ1234"));
