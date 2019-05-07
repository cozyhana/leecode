/*
 * @Author: hf 
 * @Date: 2019-05-07 14:32:44 
 * @Last Modified by: hf
 * @Last Modified time: 2019-05-07 15:31:11
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
  console.log(1)
  let num = 0
  for (var i = 0; i < arr.length - 1; i++) {
    let num1 = romanArr[arr[i] + arr[i + 1]]
    let num2 = romanArr[arr[i]]
    if (typeof num1 != undefined) {
      num += num1
      i++
    } else {
      num += num2
    }
  }
  return num
};

var num = romanToInt('III')
console.log(num)