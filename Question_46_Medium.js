// https://leetcode-cn.com/problems/permutations/
// 46. 全排列
// Done

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  const backTrack = (arr) => {
      if(arr.length === nums.length){
          result.push(arr)
      }
      for(let i=0;i<nums.length;i++){
          if(arr.find(item => item===nums[i]) != undefined){
              continue 
          }
          arr.push(nums[i])
          backTrack([...arr])
          arr.pop()
      }
  }
  backTrack([])
  return result
};