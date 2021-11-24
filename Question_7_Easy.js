// https://leetcode-cn.com/problems/reverse-integer/
// 7. 整数反转
// Done
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(xw) {
  let plus = true
  if(x>0){
      plus = true
  }
  if(x<0){
      plus = false
  }
  x = Math.abs(x).toString().split('')
  const max = Math.pow(2,31)-1
  const min = -Math.pow(2,31)
  let key = 0
  while(x.length-1-key > key){
      let temp = x[key]
      x[key] = x[x.length-1-key]
      x[x.length-1-key] = temp
      key++
  }
  x = x.join('')
  x = plus?Number(x):-Number(x)
  if(x > max || x < min){
      return 0
  }
  return x
};