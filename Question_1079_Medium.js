// https://leetcode-cn.com/problems/letter-tile-possibilities/
// 1079. 活字印刷
// Done


/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  tiles = tiles.split('').sort()
  let result = 0
  let used = []
  let temp = []
  function backTrack(arr){
      result++
      temp.push(arr)
      for(let i=0;i<tiles.length;i++){
          if(i>0&&tiles[i-1]===tiles[i]&&!used[i-1]){
              continue
          }
          if(!used[i]){
              used[i] = true
              arr.push(tiles[i])
              backTrack([...arr])
              used[i] = false
              arr.pop()
          }
      }
  }
  backTrack([])
  return result-1
};