/*
 * @Author: hf 
 * @Date: 2019-05-07 19:22:22 
 * @Last Modified by: hf
 * @Last Modified time: 2019-05-07 20:16:11
 */
//罗马数字转整数 https://leetcode-cn.com/problems/roman-to-integer/
var romanToInt = function (s) {
  var romanArr = {
    I: 1,
    IV: 4,
    IX: 9,
    V: 5,
    X: 10,
    XL: 40,
    XC: 90,
    L: 50,
    C: 100,
    CD: 400,
    CM: 900,
    D: 500,
    M: 1000
  }
  var arr = s.split('')
  console.log(arr)
  let num = 0

  for (var i = 0; i < arr.length - 1; i++) {

    for (var j = 1; j < arr.length; j++) {
      if (arr[i] === 'I' && arr[j] !== [I]) {
        //I排在的最前，且比他大的数排在了后面
        //I只能在V,X前
        if (arr[j] === 'V') {

        } else if (arr[j] === 'X') {

        } else {
          return 'wrong Roman Number'
        }
      }
    }

  }
  return num
};

var num = romanToInt('III')
console.log(num)