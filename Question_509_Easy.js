// https://leetcode-cn.com/problems/fibonacci-number/
// 509. 斐波那契数
// Done

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const dpTable = []

  const getFib = (n) => {
      if(n === 1){
          return 1
      }
      if(n === 0){
          return 0
      }
      if(dpTable[n]){
          return dpTable[n]
      }
      dpTable[n] = getFib(n-1)+getFib(n-2)
      return dpTable[n]
  }
  return getFib(n)
};