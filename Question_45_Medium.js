// https://leetcode-cn.com/problems/jump-game-ii/
// 45. 跳跃游戏 II
// Done

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let step = 0
  let end = 0
  let fastest = 0
  let n = nums.length
  for(let i=0;i<n-1;i++){
      fastest = Math.max(nums[i]+i,fastest)
      if(i===end){
          step++
          end = fastest
      }
  }
  return step
};