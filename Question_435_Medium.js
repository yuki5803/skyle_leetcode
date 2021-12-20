// https://leetcode-cn.com/problems/non-overlapping-intervals/
// 435. 无重叠区间
// Done

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let end = -Infinity;
  let result = 0;
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
    } else {
      result++;
      end = Math.min(intervals[i][1], end);
    }
  }
  return result;
};
