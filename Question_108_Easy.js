// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
// 108. 将有序数组转换为二叉搜索树

// Done

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Approach: 分治
var sortedArrayToBST = function (nums) {
  const buildNodeFromArr = (arr, root = new TreeNode()) => {
    let middle = 0;
    let isOdd = arr.length % 2;
    if (isOdd) {
      middle = (arr.length - 1) / 2;
    } else {
      middle = arr.length / 2 - 1;
    }
    root = new TreeNode(arr[middle]);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle + 1);
    if (leftArr.length !== 0) {
      root.left = buildNodeFromArr(leftArr);
    }
    if (rightArr.length !== 0) {
      root.right = buildNodeFromArr(rightArr);
    }
    return root;
  };
  return buildNodeFromArr(nums);
};
