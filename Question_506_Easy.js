// https://leetcode-cn.com/problems/relative-ranks/
// 506. 相对名次
// Done

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const rank = [...score].sort((a, b) => b - a);
  const map = new Map();

  for (let i = 0; i < rank.length; i++) {
    switch (i) {
      case 0:
        map.set(rank[i], "Gold Medal");
        break;
      case 1:
        map.set(rank[i], "Silver Medal");
        break;
      case 2:
        map.set(rank[i], "Bronze Medal");
        break;
      default:
        map.set(rank[i], (i + 1).toString());
    }
  }
  for (let i = 0; i < score.length; i++) {
    score[i] = map.get(score[i]);
  }
  return score;
};
