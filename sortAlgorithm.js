/*
 * @Author: hf
 * @Date: 2019-05-30 09:58:22
 * @Last Modified by: hf
 * @Last Modified time: 2019-05-30 13:50:05
 */
//js 十大经典排序算法 ：https://www.cnblogs.com/beli/p/6297741.html
// 对于评述算法优劣术语的说明
//     稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；
//     不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；
//     内排序：所有排序操作都在内存中完成；
//     外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；
//     时间复杂度: 一个算法执行所耗费的时间。
//     空间复杂度: 运行完一个程序所需内存的大小。

// 1.冒泡排序:
// 解析：1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。
// 　　　2.第一轮的时候最后一个元素应该是最大的一个。
// 　　　3.按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。
{
  function sort(ele) {
    if (Array.isArray(ele)) {
      for (var i = 0; i < ele.length - 1; i++) {
        for (var j = 0; j < ele.length - i - 1; j++) {
          if (ele[j] > ele[j + 1]) {
            var swap = ele[j];
            ele[j] = ele[j + 1];
            ele[j + 1] = swap
          }
        }
      }
    }
  }

  let ele = [3, 5, 3, 4, 5, 2, 6, 5, 7, 3, 5, 6, 7, 6, 5]
  let eles = sort(ele)
  console.log('after:', eles)
}

// 2.快速排序:
// 解析：快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分，一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。
{
  function quickSort(ele) {
    if (ele.length <= 1) return ele;
    let pivotIndex = Math.floor(ele.length / 2);
    let pivot = ele.splice(pivotIndex, 1)[0];
    let left = []
    let right = []
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] < pivot) {
        left.push(ele[i])
      } else {
        right.push(ele[i])
      }
    }
    return quickSort(left).concat([pivot], quickSort(right));
  }
  let ele = [2, 3, 43, 42, 31, 5, 3, 53, 56, 3, 1, 4, 6, 67, 8, 9, 7, 80]
  let eles = quickSort(ele)
  console.log(eles)
}

// 3.插入排序:
// 解析：
//  （1） 从第一个元素开始，该元素可以认为已经被排序
//  （2） 取出下一个元素，在已经排序的元素序列中从后向前扫描
//  （3） 如果该元素（已排序）大于新元素，将该元素移到下一位置
//  （4） 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
//  （5） 将新元素插入到下一位置中
//  （6） 重复步骤2
{
  function insertSort(ele) {
    for (let i = 1; i < ele.length; i++) {
      //升序
      if (ele[i] < ele[i - 1]) {
        let guard = ele[i]
        let j = i - 1;
        ele[i] = ele[j]
        while (j >= 0 && guard < ele[j]) {
          ele[j + 1] = ele[j]
          j--
        }
        ele[j + 1] = guard;
      }
    }
    return ele
  }
  let ele = [3, 12, 321, 4, 2, 143, 4, 56, 2, 6, 789, 98, 9]
  let eles = insertSort(ele)
  console.log(eles)
}

// 4.选择排序:
// 　解析:首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 　　　　以此类推，直到所有元素均排序完毕。

// 5.希尔排序:
//   解析:先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序

// 6.归并排序:
//   解析:归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。

// 7.堆排序:
//   解析:堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是
//   　　小于（或者大于）它的父节点。
// 8.计数排序:
//   解析:计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。

// 9.桶排序:
//   解析:假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排

// 10.基数排序:
//   解析:基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优
//   　　先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。

// 二分查找
// 思路
// （1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。
// （2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。
// （3）如果某一步数组为空，则表示找不到目标元素。
// 非递归算法
function binary_search(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((high + low) / 2);
    console.log(key, mid, arr[mid])
    if (key === arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      return -1;
    }
  }
}
let num = binary_search([12, 31, 2, 3, 14, 1, 4, 35], 2)
console.log(num)