// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
// 116. 填充每个节点的下一个右侧节点指针
// Done

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root){
      return root
  }
  let arr = []
  arr.push(root)
  while(arr.length !== 0){
      let size = arr.length
      for(let i=0;i<size;i++){
          let node = arr.shift()
          if(i===size-1){
              node.next = null
          }else{
              node.next = arr[0]
          }
          if(node.left && node.right){
              arr.push(node.left)
              arr.push(node.right)
          }
      }
  }
  return root
};