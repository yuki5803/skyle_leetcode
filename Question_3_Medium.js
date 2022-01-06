// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. 无重复字符的最长子串

// Done

// 滑动窗口解法

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let right = 0;
  let left = 0;
  let maxLength = 0;
  let unique = new Map();
  while (right < s.length) {
    let newStr = s[right];
    right++;
    let value = unique.get(newStr) ? unique.get(newStr) + 1 : 1;
    unique.set(newStr, value);

    while (unique.get(newStr) > 1) {
      let reduce = s[left];
      left++;
      unique.set(reduce, unique.get(reduce) - 1);
    }
    maxLength = Math.max(maxLength, right - left);
  }

  return maxLength;
};

// 第一次解题做法

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 记录遍历过的各个不重复元素的位置
  let myMap = new Map();
  let maxLength = 0;
  // 起始位置
  let start = 0;
  while (s[start]) {
    // 遇到重复的元素
    if (myMap.has(s[start])) {
      let newLength = myMap.size;
      maxLength = Math.max(maxLength, newLength);
      // 取出重复的元素对应的位置
      start = myMap.get(s[start]);
      // 清空map
      myMap = new Map();
    } else {
      myMap.set(s[start], start);
    }
    start++;
  }
  if (!myMap.isEmpty) {
    maxLength = Math.max(myMap.size, maxLength);
  }
  return maxLength;
};
