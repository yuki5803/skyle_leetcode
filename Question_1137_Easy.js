// https://leetcode-cn.com/problems/n-th-tribonacci-number/
// 1137. 第 N 个泰波那契数
// Done


/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const dpTable = []
  const getTribonacci = (n) => {
      if(n === 0)return 0
      if(n === 1)return 1
      if(n === 2)return 1
      if(dpTable[n]){
          return dpTable[n]
      }
      dpTable[n] = getTribonacci(n-1)+getTribonacci(n-2)+getTribonacci(n-3)
      return dpTable[n]
  }
  return getTribonacci(n)
};