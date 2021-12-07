// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Done

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let myMap = new Map()
  let maxLength = 0
  let time = 1
  let i = 0
  while (s[time - 1] && s[i]) {
    if (myMap.has(s[i])) {
      let newLength = time - 1
      maxLength = newLength > maxLength ? newLength : maxLength
      i = myMap.get(s[i])
      time = 0
      myMap = new Map()
    } else {
      myMap.set(s[i], i)
    }
    time++
    i++
  }
  if (!myMap.isEmpty) {
    maxLength = time - 1 > maxLength ? time - 1 : maxLength
  }
  return maxLength
}

console.log(lengthOfLongestSubstring('abcabcidabe'))
