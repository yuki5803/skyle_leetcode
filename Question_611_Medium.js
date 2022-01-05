// https://leetcode-cn.com/problems/valid-triangle-number/
// 611. 有效三角形的个数

// Done

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = nums.length - 1; i > 1; i--) {
    let longestSize = nums[i];
    for (let j = i - 1; j > 0; j--) {
      for (let n = j - 1; n >= 0; n--) {
        if (nums[n] + nums[j] > longestSize) {
          result++;
        } else {
          break;
        }
      }
    }
  }
  return result;
};
