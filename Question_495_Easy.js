// https://leetcode-cn.com/problems/teemo-attacking/
// 495. 提莫攻击
// Done

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let totalTime = 0
  for(let i=0;i<timeSeries.length;i++){
      if(timeSeries[i+1]){
          let interval = timeSeries[i+1] - timeSeries[i]
          totalTime += interval>duration?duration:interval
      }else{
          totalTime += duration
      }
  }
  return totalTime
};