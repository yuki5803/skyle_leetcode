// https://leetcode-cn.com/problems/house-robber-ii/
// 213. 打家劫舍 II
// Done



/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length === 1){
      return nums[0]
  }
  const houseNums = nums.length
  function dpFunc(n,house,dpTable){
      if(n === 1){
          return house[0]
      }
      if(dpTable[n] !== undefined){
          return dpTable[n]
      }
      dpTable[n] = Math.max(dpFunc(n-1,house,dpTable),dpFunc(n-2,house,dpTable)+house[n-1])
      return dpTable[n] 
  }
  return Math.max(dpFunc(houseNums-1,nums.slice(0,houseNums-1),[0]),dpFunc(houseNums-1,nums.slice(1),[0]))
};