// https://leetcode-cn.com/problems/unique-paths/
// 62. 不同路径
// Done


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let down = m-1
  let right = n-1
  let dpTable = new Array(m).fill([]).map(item => Array(n))

  const dpFunc = (down,right) => {
      if(down === 0 || right === 0){
          return 1
      }
      if(dpTable[down][right]){
          return dpTable[down][right]
      }
      if(dpTable[right]?.[down]){
          return dpTable[right][down]
      }
      dpTable[down][right] = dpFunc(down-1,right)+dpFunc(down,right-1)
      return dpTable[down][right]
  }
  return dpFunc(down,right)

};