// https://leetcode-cn.com/problems/subsets/
// 78. 子集
// Done


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []
  const backTrack = (arr,start=0) => {
      result.push(arr)
      if(arr.length === nums.length){
          return 
      }
      for(let i=start;i<nums.length;i++){
          arr.push(nums[i])
          backTrack([...arr],i+1)
          arr.pop()
      }
  }
  backTrack([])
  return result
};