// https://leetcode-cn.com/problems/beautiful-arrangement/
// 526. 优美的排列
// Done

/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
  let result = 0
  const used = []
  function backTrack(arr){
      if(arr.length === n){
          result++
          return
      }
      for(let i=1;i<=n;i++){
          if(i && i%(arr.length+1) !== 0 && (arr.length+1)%i !== 0){
              continue
          }
          if(!used[i]){
              used[i] = true
              arr.push(i)
              backTrack([...arr])
              arr.pop()
              used[i] = false
          }
      }
  }
  backTrack([])
  return result
};