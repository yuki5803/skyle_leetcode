// https://leetcode-cn.com/problems/longest-palindromic-substring/
// 5. 最长回文子串
// Done

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = ''
  for(let i=0;i<s.length;i++){
      let cursor = 0
      if(s[i]===s[i+1]){
          while(s[i-cursor]&& s[i-cursor] === s[i+cursor+1]){
              cursor++
          }
          cursor--
          let pali = s.slice(i-cursor,i+cursor+2)
          max = max.length > pali.length?max:pali
      }
      cursor = 0
      while(s[i-cursor]&&s[i-cursor] === s[i+cursor]){
          cursor++
      }
      cursor--
      let pali = s.slice(i-cursor,i+cursor+1)
      max = max.length > pali.length?max:pali
  }
  return max
};