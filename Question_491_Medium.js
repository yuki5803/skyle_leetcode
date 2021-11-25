// https://leetcode-cn.com/problems/increasing-subsequences/
// 491. 递增子序列
// Done

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const result = []
  function backTrack(arr,start){
      let last = new Set()
      if(arr.length >=2){
          result.push(arr)
      }
      for(let i=start;i<nums.length;i++){
          if(last.has(nums[i])){
              continue
          }
          if(arr.length !== 0 && nums[i]<arr[arr.length-1]){
              continue
          }
          last.add(nums[i])
          arr.push(nums[i])
          backTrack([...arr],i+1)
          arr.pop()
      }
  }
  backTrack([],0)
  return result
};