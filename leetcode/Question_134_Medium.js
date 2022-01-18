// https://leetcode-cn.com/problems/gas-station/
// 134. 加油站
// Done

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let myGas = 0;
  let start = 0;
  // total记录加油站总油量是否大于走完全程消耗,大于则一定可以走完,反之则一定走不完
  let total = 0;

  for (let i = start; i < gas.length; i++) {
    myGas = myGas + gas[i] - cost[i];
    total += gas[i] - cost[i];
    if (myGas < 0) {
      // 如果走不动了说明之前的路是可以走完的,则跳过这个点再开始走。
      start = i + 1;
      myGas = 0;
    }
  }
  return total >= 0 ? start : -1;
};
