// https://leetcode-cn.com/problems/pascals-triangle-ii/
// 119. 杨辉三角 II

// Done

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const dp = [[1]];
  const dpFunc = (deep) => {
    if (dp[deep]) {
      return dp[deep];
    }
    return (dp[deep] = new Array(deep + 1).fill(null).map((item, index) => {
      if (index === 0 || index === deep) {
        return 1;
      }
      const preLayout = dpFunc(deep - 1);
      return preLayout[index] + preLayout[index - 1];
    }));
  };

  return dpFunc(rowIndex);
};
