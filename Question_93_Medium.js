// https://leetcode-cn.com/problems/restore-ip-addresses/
// 93. 复原 IP 地址
// Done

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = []

  function isValid(str){
      if(str.length > 3){
          return false
      }
      if(Number(str) > 255){
          return false
      }
      if(str.length > 1 && str[0] === '0'){
          return false
      }
      return true

  }
  function backTrack(ip,start,pos){
      if(pos === 4){
          let ipAddr = ip.slice(1)
          if(ipAddr.length-3 === s.length){
              result.push(ipAddr)
          }
          return
      }
      for(let i=start+1;i<=start+3;i++){
          if(!s[i-1]){
              break
          }
          let next = s.slice(start,i)
          if(isValid(next)){
              pos++
              backTrack(ip+'.'+next,i,pos)
              pos--
          }
      }
  }
  backTrack('',0,0)
  return result
};