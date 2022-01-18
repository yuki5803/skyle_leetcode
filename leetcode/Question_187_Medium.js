// https://leetcode-cn.com/problems/repeated-dna-sequences/
// 187. 重复的DNA序列

// Done

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let right = 10;
  let left = 0;
  let unique = new Map();
  let result = [];
  while (right <= s.length) {
    let newStr = s.slice(left, right);
    right++;
    let value = unique.get(newStr) ? unique.get(newStr) + 1 : 1;
    unique.set(newStr, value);

    while (right - left > 10) {
      left++;
    }

    if (unique.get(newStr) > 1 && unique.get(newStr) <= 2) {
      result.push(newStr);
    }
  }

  return result;
};
