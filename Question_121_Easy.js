// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// 121. 买卖股票的最佳时机
// Done

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length === 1){
      return 0
  }
  let max = 0
  let min = prices[0]
  for(let i=1;i<prices.length;i++){
      max = Math.max(prices[i]-min,max)
      min = Math.min(prices[i],min) 
  }
  return max
};