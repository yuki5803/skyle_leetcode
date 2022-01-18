// https://leetcode-cn.com/problems/jump-game/
// 55. 跳跃游戏
// Done

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let fastest = 0
  for(let i=0;i<nums.length-1;i++){
      fastest = Math.max(fastest,i+nums[i])
      if(fastest <= i){
          return false
      }
  }
  return fastest >= nums.length-1
};