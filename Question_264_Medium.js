// https://leetcode-cn.com/problems/ugly-number-ii/
// 264. 丑数 II
// Done
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let t2 = 1
  let t3 = 1
  let t5 = 1
  const dpTable = [0,1]
  if(dpTable[n]){
      return dpTable[n]
  }
  for(let i=1;i<n;i++){
      while(dpTable[t2]*2<=dpTable[i]){
          t2++
      }
      while(dpTable[t3]*3<=dpTable[i]){
          t3++
      }
      while(dpTable[t5]*5<=dpTable[i]){
          t5++
      }
      dpTable[i+1] = Math.min(dpTable[t2]*2,Math.min(dpTable[t3]*3,dpTable[t5]*5))
  }
  return dpTable[n]
};