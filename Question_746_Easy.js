// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
// 746. 使用最小花费爬楼梯
// Done

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = []
  let n = cost.length
  dp[0] = cost[0]
  dp[1] = cost[1]
  for(let i=2;i<n;i++){
      dp[i]=Math.min(dp[i-1],dp[i-2])+cost[i]
  }
  return Math.min(dp[n-1],dp[n-2])
};