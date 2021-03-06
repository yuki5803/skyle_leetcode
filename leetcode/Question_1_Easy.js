// https://leetcode.com/problems/two-sum/
// 1. 两数之和

// Done

var twoSum = function (nums, target) {
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
