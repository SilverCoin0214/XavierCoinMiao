/**
 * @param {number} x
 * @return {number}
 */

//  使用二分法来接近答案
var mySqrt = function(x) {
  let high = x;
  let low = 1;
  let middle;

  // 排除0和1的干扰
  if (x == 0 || x == 1) {
    return x;
  }

  while (high - low > 0.00000001) {
    middle = (high + low) / 2;
    if (middle * middle < x) {
      low = middle;
    } else if (middle * middle > x) {
      high = middle;
    } else {
      break;
    }
  }

  // 问题需要取整,并且是向下, 但是因为浮点数会有影响,例如1024无法取得32,而是31.99999所以需要修改
  if ((middle % 1) - 0.99999 > 0.0000001) {
    return Math.round(middle);
  } else {
    return parseInt(middle);
  }
};

console.log(mySqrt(1024));
