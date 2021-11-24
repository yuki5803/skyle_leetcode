// https://leetcode-cn.com/problems/minimum-path-sum/
// 64. 最小路径和
// Done

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let y = grid.length-1
  let x = grid[0].length-1
  let dpTable = new Array(y+1).fill([]).map(item => Array(x+1))
  const getMinPath = (x,y) => {
      if(x===0&&y===0){
          return grid[x][y]
      }
      if(x===0){
          return getMinPath(x,y-1)+grid[y][x]
      }
      if(y===0){
          return getMinPath(x-1,y)+grid[y][x]
      }
      if(dpTable[y][x]){
          return dpTable[y][x]
      }
      dpTable[y][x] = Math.min(getMinPath(x-1,y),getMinPath(x,y-1))+grid[y][x]
      return dpTable[y][x]
  }
  return getMinPath(x,y)
};