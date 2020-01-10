/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // 1.取出末尾数计算+1
  let num = Number(digits.pop()) + 1;
  let count = 1;

  // 2.如果num为10,则再取出前一项判断是否为9,为9就再取前一项一直到不是9的地方
  if (num == 10) {
    let num2 = Number(digits.pop());
    while (num2 == 9) {
      num2 = Number(digits.pop());
      count = count + 1;
    }

    // 3.如果把数组都取空了, 则说明一定是999...方式的数字,再数组里加入1, 然后补0
    // 其他的只需要把首位加1就可以了. 除此之外如果num不是10,那么直接加入数组就可以
    if (isNaN(num2)) {
      digits.push(1);
    } else {
      digits.push(num2 + 1);
    }

    for (let i = 0; i < count; i++) {
      digits.push(0);
    }
  } else {
    digits.push(num);
  }

  return digits;
};

console.log(
  plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9])
);
// console.log(plusOne([9]));

// 解法2
var plusOne2 = function(digits) {
  digits = digits.reverse();
  digits[0] += 1;
  let i = 0;
  let carry = 0;

  while (i < digits.length) {
    let next_carry = Math.trunc((digits[i] + carry) / 10);
    digits[i] = (digits[i] + carry) % 10;
    i = i + 1;
    carry = next_carry;
  }

  if (carry > 0) {
    digits.push(carry);
  }

  return digits.reverse();
};

console.log(
  plusOne2([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9])
);
// console.log(plusOne2([5]));

// 解法3  超过20位不行
var plusOne3 = function(digits) {
  let newDigts = 0;
  for (let num of digits) {
    newDigts = newDigts * 10 + num;
  }

  newDigts += 1;

  digits = String(newDigts).split("");

  return digits.map(Number);
};

console.log(
  plusOne3([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9])
);
console.log(plusOne3([5]));
