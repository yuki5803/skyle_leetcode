// https://leetcode-cn.com/problems/combinations/
// 77. 组合
// Done

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = []
  let used = []

  const backTrack = (arr,start = 1) => {
      if(arr.length === k){
          result.push(arr)
      }
      for(let i=start;i<=n;i++){
          if(!used[i]){
              arr.push(i)
              used[i] = true
              backTrack([...arr],i+1)
              arr.pop()
              used[i] = false
          }
      }
  }
  backTrack([])
  return result
};