// https://leetcode-cn.com/problems/climbing-stairs/
// 70. 爬楼梯
// Done

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dpTable = []
  const dp = (n) => {
      if(n === 1){
          return 1
      }
      if(n === 2){
          return 2
      }
      if(dpTable[n]){
          return dpTable[n]
      }
      dpTable[n] = dp(n-1)+dp(n-2)
      return dpTable[n]
  }
  return dp(n)
};