// https://leetcode-cn.com/problems/3sum-closest/
// 16. 最接近的三数之和

// Done

// 双指针(更优)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let count = nums[i] + nums[left] + nums[right];
      if (Math.abs(count - target) < Math.abs(result - target)) {
        result = count;
      }
      if (result === target) {
        return result;
      }
      if (count > target) {
        right--;
      }
      if (count < target) {
        left++;
      }
    }
  }
  return result;
};

// 回溯算法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result;
  let used = [];
  const backTrack = (count, time, start) => {
    if (result === target) {
      return;
    }
    if (time === 3) {
      if (result === undefined) {
        result = count;
        return;
      }
      let preGap = Math.abs(result - target);
      let currGap = Math.abs(count - target);
      result = preGap >= currGap ? count : result;
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      count += nums[i];
      backTrack(count, time + 1, i);
      count -= nums[i];
      used[i] = false;
    }
  };

  backTrack(0, 0, 0);
  return result;
};
