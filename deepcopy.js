// 深拷贝方法
// 1.JSON.stringfy()和JSON.parse()。
// 但是这种方法有局限性，当值为undefined、function、symbol会在转换过程中被忽略
// 所以，对象值有这三种的话，用这种办法会导致属性丢失
// 2.递归函数

function deepCopy(obj) {
  var result = Array.isArray(obj) ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key]); //递归复制
      } else {
        result[key] = obj[key]
      }
    }
  }
  console.log(result === obj)
  return result;
}

let obj = {
  a: 'a',
  b: {
    c: 'c',
    d: {
      e: 'e',
      f: 'f'
    }
  }
}

let a = deepCopy(obj)
console.log(a)