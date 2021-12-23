// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// 209. 长度最小的子数组

// Done

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let count = 0;
  let minLen = Infinity;

  while (right < nums.length) {
    let newNum = nums[right];
    right++;
    count += newNum;

    while (count >= target) {
      minLen = Math.min(right - left, minLen);
      let reduceNum = nums[left];
      left++;
      count -= reduceNum;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
