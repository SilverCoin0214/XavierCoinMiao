/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

//能拿到额外的糖果后变成数量最多的孩子返回true,否则返回false
var kidsWithCandies = function (candies, extraCandies) {
  var result = [];
  //Math.max()不能传数组, 要用...变成数组传参数
  var max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

var candies = [2, 3, 5, 1, 3];
console.log(kidsWithCandies(candies, 3));
