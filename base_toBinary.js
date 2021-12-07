// 十进制转二进制函数


const toBinary = (number,count = '') => {
  if(number < 2){
    return number+count
  }
  count = number%2 + count
  number = Math.floor(number/2)
  return toBinary(number,count)
}

for(let i=0;i<10;i++){
  console.log('二进制：'+toBinary(i),'十进制：'+i)
}