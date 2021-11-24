// 快速排序算法

// Done

const quickSort = (array, begin, end) => {
  let temp = array[begin]
  let i = begin
  let j = end
  // 区间内多于一个数时进行排序
  if (begin < end) {
    while (i < j) {
      while (i < j && array[j] >= temp) {
        j--
      }
      array[i] = array[j]
      while (i < j && array[i] < temp) {
        i++
      }
      array[j] = array[i]
    }
    if (i >= j) {
      array[i] = temp
      quickSort(array, begin, i - 1)
      quickSort(array, i + 1, end)
    }
  }
  return array
}

const array = [10, 97, 33, 27, 9, 3, 14, 3, 2]

console.log(quickSort(array, 0, array.length - 1))