// https://leetcode-cn.com/problems/3sum/
// 15. 三数之和

// Done

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let count = nums[i] + nums[left] + nums[right];
      if (count === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (right > left && nums[right] == nums[right - 1]) right--;
        while (right > left && nums[left] == nums[left + 1]) left++;
        left++;
        right--;
        continue;
      }

      if (count > 0) {
        right--;
      }
      if (count < 0) {
        left++;
      }
    }
  }

  return result;
};
