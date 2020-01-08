/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  let remainder;
  let str = [];
  let divisor;
  let symbol = 0;

  // 1. 0是特例不用转换直接输出0
  if (num === 0) {
    return "0";
  }

  // 2. 如果是负数,要给符号一个标记,在转换后加上符号
  if (num < 0) {
    symbol = 1;
    num = -num;
  }

  // 3. 进行进制转换,余数存在数组里,并用unshift从头存入
  while (num != 0) {
    divisor = Math.trunc(num / 7);
    remainder = num % 7;
    str.unshift(remainder);
    num = divisor;
  }

  // 4. 标记修改了就给前面加上负号再输出
  if (symbol == 1) {
    str.unshift("-");
  }
  return str.join("");
};

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
console.log(convertToBase7(0));
console.log(convertToBase7(1));
console.log(convertToBase7(7));
console.log(convertToBase7(-1231));
