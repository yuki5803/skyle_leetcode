// https://leetcode-cn.com/problems/word-search/
// 79. 单词搜索
// Done

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let result = false
  let visited = new Array(board.length).fill([]).map(item => Array(board[0].length))
  function backTrack(letter,index,x,y){
      if(letter !== word[index]){
          return 
      }else if(index === word.length-1){
          result = true
          return 
      }
      if(!result && x >=0 && y-1 >= 0 && !visited[y-1][x]){
          index++
          visited[y-1][x]=true
          backTrack(board[y-1][x],index,x,y-1)
          visited[y-1][x]=false
          index--
      }
      if(!result && x-1>=0 && y>=0 && !visited[y][x-1]){
          index++
          visited[y][x-1] = true
          backTrack(board[y][x-1],index,x-1,y)
          visited[y][x-1] = false
          index--
      }
      if(!result && x+1< board[0].length && y>=0 && !visited[y][x+1]){
          index++
          visited[y][x+1] = true
          backTrack(board[y][x+1],index,x+1,y)
          visited[y][x+1] = false
          index--
      }
      if(!result && x>=0 && y+1<board.length && !visited[y+1][x]){
          index++
          visited[y+1][x] = true
          backTrack(board[y+1][x],index,x,y+1)
          visited[y+1][x] = false
          index--
      }
  }

  for(let i=0;i<board.length;i++){
      for(let j=0;j<board[0].length;j++){
          visited[i][j] = true
          backTrack(board[i][j],0,j,i)
          visited[i][j] = false
          if(result){
              return result
          }
      }
  }
  return result 
};