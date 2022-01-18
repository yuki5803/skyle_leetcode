// https://leetcode-cn.com/problems/subsets-ii/
// 90. 子集 II
// Done

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort()
  const result = []
  const used = []
  function backTrack(arr,start){
      result.push([...arr])
      for(let i=start;i<nums.length;i++){
          if(i>0&&nums[i] === nums[i-1]&&used[i-1]===false){
              continue
          }
          arr.push(nums[i])
          used[i] = true
          backTrack([...arr],i+1)
          used[i] = false
          arr.pop()
      }
  }

  backTrack([],0)
  return result
};