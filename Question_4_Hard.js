// https://leetcode.com/problems/median-of-two-sorted-arrays/

// Done

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  // 合并数组
  const totalArr = [...nums1, ...nums2]

  const quickSort = (array,begin,end) => {
    let i = begin
    let j = end
    let temp = array[i]
    if(begin < end){
      while(i < j){
        while(i < j  && array[j] >= temp){
          j--
        }
        array[i] = array[j]
        while(i < j && array[i] < temp){
          i++
        }
        array[j] = array[i]
      }
      array[i] = temp
      quickSort(array,begin,i - 1)
      quickSort(array,i + 1,end)
    }
    return array
  }

  // 排序
  quickSort(totalArr,0,totalArr.length - 1)
  if (totalArr.length % 2) {
    return  totalArr[(totalArr.length - 1) / 2]
  }else{
    return (totalArr[totalArr.length / 2] + totalArr[totalArr.length / 2 - 1]) / 2
  }
}

console.log(findMedianSortedArrays([1, 2, 5, 8], [1, 3, 4]))
