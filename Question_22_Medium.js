// https://leetcode.com/problems/generate-parentheses/
// 22. 括号生成

// Done

//Approach 1：backTrack
var generateParenthesis = function (n) {
  const ans = [];
  const backTrack = (max, string, left, right) => {
    if (string.length === max * 2) {
      ans.push(string);
      return;
    }
    if (left < max) {
      string += "(";
      backTrack(max, string, left + 1, right);
      string = string.substring(0, string.length - 1);
    }
    if (right < left) {
      string += ")";
      backTrack(max, string, left, right + 1);
      string = string.substring(0, string.length - 1);
    }
  };
  backTrack(n, "", 0, 0);
  return ans;
};

//Approach 2: Dp
var generateParenthesis = function (n) {
  const dp = [];

  const dpFunc = (number) => {
    if (number == 1) {
      dp[number] = ["()"];
      return;
    }
    dpFunc(number - 1);
    if (dp[number - 1]) {
      const curr = [];
      for (i = 0; i < dp[number - 1].length; i++) {
        curr.push("(" + dp[number - 1][i] + ")");
        curr.push("()" + dp[number - 1][i]);
        curr.push(dp[number - 1][i] + "()");
      }

      dp[number] = Array.from(new Set(curr));
    }
  };
  dpFunc(n);

  return dp[n];
};
