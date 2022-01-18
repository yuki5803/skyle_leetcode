// https://leetcode-cn.com/problems/gray-code/
// 89. 格雷编码

// Done

// 格雷编码:
// n=1:[00,01]
// n=2:[00,01,**11**,**10**]
// 每次n增长时相当于在原来的二进制编码列表倒序增加1

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let codeList = [0, 1];
  const growingCode = (time = 1) => {
    if (time === n) {
      return codeList;
    }
    for (let i = codeList.length - 1; i >= 0; i--) {
      codeList.push(codeList[i] + Math.pow(2, time));
    }
    growingCode(time + 1);
  };
  growingCode();

  return codeList;
};
