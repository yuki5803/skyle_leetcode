// https://leetcode-cn.com/problems/house-robber/
// 198. 打家劫舍
// Done

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const dpTable = [0]
  function dpFunc(n){
      if(nums[n-1] === 0){
          return dpFunc(n-1)
      }
      if(n === 1){
          return nums[n-1]
      }
      if(n === 0){
          return dpTable[0]
      }
      if(dpTable[n]){
          return dpTable[n]
      }
      dpTable[n] = Math.max(dpFunc(n-1),dpFunc(n-2)+nums[n-1])
      return dpTable[n]
  }
  return dpFunc(nums.length)
};