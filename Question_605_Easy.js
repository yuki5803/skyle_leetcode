// https://leetcode-cn.com/problems/can-place-flowers/

// 605. 种花问题
// Done

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1 && n === 1) {
    return flowerbed[0] === 0 ? true : false;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (n === 0) {
      return true;
    }
    if (flowerbed[i] === 0) {
      if (
        (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) ||
        (i === 0 && flowerbed[i + 1] === 0) ||
        (i === flowerbed.length - 1 && flowerbed[i - 1] === 0)
      ) {
        n--;
        flowerbed[i] = 1;
      }
    }
  }

  return n === 0 ? true : false;
};
