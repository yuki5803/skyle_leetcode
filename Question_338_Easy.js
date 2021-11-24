// https://leetcode-cn.com/problems/counting-bits/
// 338. 比特位计数
// Done

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  if(n === 0){
      return [0]
  }
  if(n === 1){
      return [0,1]
  }
  let result = [0,1]
  for(let i=2;i<n+1;i++){
      if(i%2){
          result[i] = result[(i-1)/2]+1
      }else{
          result[i] = result[i/2]
      }
  }
  return result
};