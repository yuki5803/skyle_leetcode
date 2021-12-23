// https://leetcode-cn.com/problems/fruit-into-baskets/
// 904. 水果成篮

// Done

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let right = 0;
  let left = 0;
  let basket = new Map();
  let maxTree = 0;

  while (right < fruits.length) {
    let newTree = fruits[right];
    right++;

    let value = basket.get(newTree) ? basket.get(newTree) + 1 : 1;
    basket.set(newTree, value);

    while (basket.size > 2) {
      let removeTree = fruits[left];
      left++;
      let removeFruits = basket.get(removeTree);
      if (removeFruits > 1) {
        basket.set(removeTree, removeFruits - 1);
      } else {
        basket.delete(removeTree);
      }
    }

    maxTree = Math.max(right - left, maxTree);
  }

  return maxTree;
};
