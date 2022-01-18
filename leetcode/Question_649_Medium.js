// https://leetcode-cn.com/problems/dota2-senate/
// 649. Dota2 参议院
// Done

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let RTime = 0;
  let DTime = 0;
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      if (RTime === 0) {
        DTime++;
      } else {
        RTime--;
        senate += "D";
      }
    }
    if (senate[i] === "D") {
      if (DTime === 0) {
        RTime++;
      } else {
        DTime--;
        senate += "R";
      }
    }
  }
  return DTime > RTime ? "Radiant" : "Dire";
};
