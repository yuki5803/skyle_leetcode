// https://leetcode-cn.com/problems/pascals-triangle/
// 118. 杨辉三角
// Done

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = []
  const dp = []
  const gene = (n) => {
      if(n === 1){
          return [1]
      }
      if(n === 2){
          return [1,1]
      }
      if(dp[n]){
          return dp[n]
      }
      let line = []
      let pre =  gene(n-1)
      for(let i=1;i<n-1;i++){
          line.push(pre[i-1]+pre[i])
      }
      line.unshift(1)
      line.push(1)
      return line
       
  }
  for(let i=1;i<=numRows;i++){
      result.push(gene(i)) 
  }
  return result
};