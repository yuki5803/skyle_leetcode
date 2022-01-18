// https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/
// 452. 用最少数量的箭引爆气球
// Done

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let result = 1;
  let end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      result++;
      end = points[i][1];
    } else if (points[i][1] < end) {
      end = points[i][1];
    }
  }
  return result;
};
