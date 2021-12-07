// https://leetcode-cn.com/problems/maximal-square/
// 221. 最大正方形
// Done

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let maxLine = 0

  matrix.unshift(new Array(matrix[0].length).fill('0'))
  matrix.map(i=>i.unshift('0'))
  for(let y=0;y<matrix.length;y++){
      for(let x=0;x<matrix[0].length;x++){
          if(matrix[y][x] === '0'){
              continue
          }
          matrix[y][x] = Math.min(matrix[y-1][x],matrix[y][x-1],matrix[y-1][x-1])+1
          maxLine = Math.max(matrix[y][x],maxLine)
      }
  }
  return maxLine*maxLine
};