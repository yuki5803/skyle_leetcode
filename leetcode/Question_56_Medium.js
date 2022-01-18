// https://leetcode-cn.com/problems/merge-intervals/
// 56. 合并区间

// Done

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  if (intervals.length === 1) {
    return intervals;
  }
  let result = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      result.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
      continue;
    }
    if (intervals[i][0] <= end && intervals[i][1] >= end) {
      end = intervals[i][1];
    }
  }
  result.push([start, end]);

  return result;
};
