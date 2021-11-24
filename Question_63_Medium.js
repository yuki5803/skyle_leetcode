// https://leetcode-cn.com/problems/unique-paths-ii/
// 63. 不同路径 II
// Done

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let x = obstacleGrid[0].length-1
  let y = obstacleGrid.length-1
  let dpTable = new Array(y+1).fill([]).map(item => Array(x+1))
  dpTable[0][0] = obstacleGrid[0][0]===1?0:1

  const dpFunc = (x,y) => {
      if(obstacleGrid[y][x] === 1){
          return 0
      }
      if(x===0 && y===0){
          return dpTable[0][0]
      }
      if(y===0) {
          return dpFunc(x-1,y)
      }
      if(x===0){
          return dpFunc(x,y-1)
      }
      if(dpTable[y][x]){
          return dpTable[y][x]
      }
      dpTable[y][x] = dpFunc(x-1,y) + dpFunc(x,y-1)
      return dpTable[y][x]
  }
  return dpFunc(x,y)
};