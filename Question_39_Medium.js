// https://leetcode-cn.com/problems/combination-sum/
// 39. 组合总和
// Done

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = []
  const backTrack = (arr,remain) => {
      if(remain < 0){
          return 
      }
      if(remain === 0){
          arr.sort()
          if(result.find(value => value.join() === arr.join())){
              return 
          }
          result.push(arr)
          return
      }
      for(let i=0;i<candidates.length;i++){
          arr.push(candidates[i])
          remain = remain-candidates[i]
          backTrack([...arr],remain)
          arr.pop()
          remain = remain+candidates[i]
      }
  }
  backTrack([],target)
  return result
};