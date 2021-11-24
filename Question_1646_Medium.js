// https://leetcode-cn.com/problems/get-maximum-in-generated-array/
// 1646. 获取生成数组中的最大值
// Done

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if(n===0){
      return 0
  }
  const nums = [0,1]
  let max = 1
  for(let i=2;i<n+1;i++){
      if(i%2===0){
          nums[i] = nums[i/2]
      }
      if(i%2===1){
          nums[i] = nums[(i-1)/2]+nums[(i-1)/2+1]
      }
      max = Math.max(max,nums[i])
  }
  return max
};