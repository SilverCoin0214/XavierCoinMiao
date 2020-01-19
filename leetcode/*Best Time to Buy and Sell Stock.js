/**
 * @param {number[]} prices
 * @return {number}
 */

//  建立一个买入数组和卖出数组, 设定每天买入和之后卖出所得的利润, 找出最大的.
var maxProfit = function(prices) {
  let buy = prices;
  let profit = 0;
  let maxProfit = 0;
  for (let i = 0; i < buy.length; i++) {
    for (let j = i; j < prices.length; j++) {
      profit = prices[j] - buy[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));

//   别人更优的解法
var maxProfit = function(prices) {
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
