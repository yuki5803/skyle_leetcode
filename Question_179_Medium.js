// https://leetcode-cn.com/problems/largest-number/
// 179. 最大数
// Done

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let curr = a.toString();
    let next = b.toString();
    return curr + next > next + curr ? -1 : 1;
  });
  let result = nums.join("");
  let i = 0;
  while (result[i] === "0" && i < nums.length - 1) {
    i++;
  }
  result = result.slice(i);
  return result;
};
