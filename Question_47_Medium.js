// https://leetcode-cn.com/problems/permutations-ii/
// 47. 全排列 II
// Done

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort()
  let result = []
  let used = []

  const backTrack = (arr) => {
      if(arr.length === nums.length){
          result.push(arr)
          return
      }
      for(let i=0;i<nums.length;i++){
          if(i>0 && nums[i] === nums[i-1] && !used[i-1]){
              continue 
          }
          if(!used[i]){
              arr.push(nums[i])
              used[i] = true
              backTrack([...arr])
              arr.pop()
              used[i] = false
          }
      }
  }
  backTrack([])
  return result
};