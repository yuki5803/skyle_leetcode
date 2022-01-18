// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 17. 电话号码的字母组合
// Done

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits){
      return []
  }
  let map = new Map([
      ['2',['a','b','c']],
      ['3',['d','e','f']],
      ['4',['g','h','i']],
      ['5',['j','k','l']],
      ['6',['m','n','o']],
      ['7',['p','q','r','s']],
      ['8',['t','u','v']],
      ['9',['w','x','y','z']]
      ])
  let result = []
  let nums = []
  for(let j=0;j<digits.length;j++){
      nums.push(map.get(digits[j]))
  }
  const backTrack = (str,deep) => {
      if(result.indexOf(str) !== -1){
          return 
      }
      if(deep === nums.length){
          result.push(str)
          return 
      }
      for(let i=0;i<nums[deep].length;i++){
          str = str+nums[deep][i]
          backTrack(str,deep+1)
          str = str.slice(0,str.length-1)
      }
  }
  backTrack('',0)
  return result
};