// https://leetcode-cn.com/problems/unique-binary-search-trees/
// 96. 不同的二叉搜索树

// Done

// Approach 1 DP
// tips(数学归纳法): 不关注如何排列BST,只关注节点数为n的BST有多少种。递增根节点的值,区分其BST的左树右树节点数量。
// 例如当n = 3,根节点的值为1时，左数无节点，右数2节点。由DP表得知右数2节点形成的BST有两种。所以根节点1的BST有2种。
// 而当根节点为2时,左树1节点,右树1节点,则根节点为2的BST有一种。最后遍历完每个根节点值情况后统计,则得出总共有5种。

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = [null, 1];
  const dpFunc = (num) => {
    for (let i = 2; i < num + 1; i++) {
      getCount(i);
    }
  };

  const getCount = (n) => {
    let totalCount = 0;
    for (let i = 1; i < n + 1; i++) {
      // 右树节点数
      let leftCount = i - 1;
      // 左树节点数
      let rightCount = n - i;
      if (leftCount === 0) {
        totalCount = dp[rightCount] + totalCount;
      } else if (rightCount === 0) {
        totalCount = dp[leftCount] + totalCount;
      } else {
        totalCount = dp[leftCount] * dp[rightCount] + totalCount;
      }
    }
    dp[n] = totalCount;
  };

  dpFunc(n);
  return dp[n];
};
