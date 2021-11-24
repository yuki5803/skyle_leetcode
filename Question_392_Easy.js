// https://leetcode-cn.com/problems/is-subsequence/
// 392. 判断子序列
// Done

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if(s === ''){
      return true
  }
  for(let i=0;i<t.length;i++){
      if(s[0] === t[i]){
          s = s.slice(1)
          if(s === ''){
              return true
          }
      }
  }
  return false
};