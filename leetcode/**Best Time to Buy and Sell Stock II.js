/**
 * @param {number[]} prices
 * @return {number}
 */

//  贪心算法, 只要相邻的两天股票的价格是上升的, 我们就进行一次交易, 获得一定利润.
// 2星, 别人的思路自己的写法.
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i <= prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
