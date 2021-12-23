// https://leetcode-cn.com/problems/longest-increasing-subsequence/
// 300. 最长递增子序列

// Done

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dpTable = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      let len = nums[j] < nums[i] ? dpTable[j] + 1 : dpTable[i];
      dpTable[i] = Math.max(dpTable[i], len);
    }
  }
  let max = dpTable[0];
  for (let i = 1; i < dpTable.length; i++) {
    max = Math.max(max, dpTable[i]);
  }
  return max;
};
