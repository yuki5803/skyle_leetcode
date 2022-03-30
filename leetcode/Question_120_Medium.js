// https://leetcode-cn.com/problems/triangle/submissions/
// 120. 三角形最小路径和

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let minPath = Infinity;
  let dp = new Array(triangle.length)
    .fill([])
    .map(() => Array(triangle.length));
  function dpFunc(deep, width) {
    if (deep === 0) {
      return triangle[0][0];
    }
    if (triangle[deep][width] === undefined) {
      return Infinity;
    }
    if (dp[deep][width] !== undefined) {
      return dp[deep][width];
    }
    if (width < 1) {
      dp[deep][width] = dpFunc(deep - 1, width) + triangle[deep][width];
    } else {
      dp[deep][width] =
        Math.min(dpFunc(deep - 1, width - 1), dpFunc(deep - 1, width)) +
        triangle[deep][width];
    }
    return dp[deep][width];
  }
  for (let i = 0; i < triangle.length; i++) {
    minPath = Math.min(dpFunc(triangle.length - 1, i), minPath);
  }
  return minPath;
};
