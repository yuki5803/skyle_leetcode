// https://leetcode-cn.com/problems/add-binary/
// 67. 二进制求和

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  //  是否有进位
  let isOut = 0;
  let result = "";
  let maxLength = Math.max(a.length, b.length);
  // 以最长二进制长度进行循环的i
  let i = maxLength - 1;
  // 此while循环用0补全较短二进制数
  while (a.length - b.length !== 0) {
    if (a.length > b.length) {
      b = "0" + b;
    }
    if (b.length > a.length) {
      a = "0" + a;
    }
  }
  // 计算
  while (isOut !== 0 || i >= 0) {
    let aNum = a[i] ? Number(a[i]) : 0;
    let bNum = b[i] ? Number(b[i]) : 0;
    switch (aNum + bNum + isOut) {
      case 3: {
        isOut = 1;
        result = "1" + result;
        break;
      }
      case 2: {
        isOut = 1;
        result = "0" + result;
        break;
      }
      case 1: {
        isOut = 0;
        result = "1" + result;
        break;
      }
      case 0: {
        isOut = 0;
        result = "0" + result;
        break;
      }
    }
    i--;
  }

  return result;
};
