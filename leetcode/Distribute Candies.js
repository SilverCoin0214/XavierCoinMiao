/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  // 1. 直接把candies放入集合中, 排除重复的种类, 因为要一分为2, 所以如果种类大于数量的一半,那就返回半数,如果小于那就返回种类的数量
  var s = new Set(candies);
  let half = candies.length / 2;

  if (s.size < half) {
    return s.size;
  } else {
    return half;
  }
};

console.log(distributeCandies([1, 2, 3, 4, 5, 6]));
