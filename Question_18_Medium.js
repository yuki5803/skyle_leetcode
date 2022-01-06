// https://leetcode-cn.com/problems/4sum/
// 18. 四数之和

// Done

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    let start1 = nums[i];
    if (i > 0 && start1 === nums[i - 1]) {
      continue;
    }
    for (let n = i + 1; n < nums.length - 2; n++) {
      let start2 = nums[n];
      if (n > 0 && start2 === nums[n - 1]) {
        continue;
      }
      let right = nums.length - 1;
      let left = n + 1;
      while (left < right) {
        let count = start1 + start2 + nums[right] + nums[left];
        if (count === target) {
          result.push([start1, start2, nums[left], nums[right]]);
          while (right > left && nums[right] === nums[right - 1]) right--;
          while (right > left && nums[left] === nums[left + 1]) left++;
          left++;
          right--;
        }
        if (count > target) {
          right--;
        }
        if (count < target) {
          left++;
        }
      }
    }
  }

  return result;
};
