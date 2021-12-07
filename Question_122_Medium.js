// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// 122. 买卖股票的最佳时机 II
// Done

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      profit = profit + prices[i + 1] - prices[i];
    }
  }
  return profit;
};
