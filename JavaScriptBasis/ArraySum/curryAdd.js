/*
 * @Author: SkylineBin 
 * @Date: 2019-07-05 09:39:16 
 * @Last Modified by:   SkylineBin 
 * @Last Modified time: 2019-07-05 09:39:16 
 */

var currying = function (fn) {
  let args = [];
  return function() {
      [].push.apply(args, arguments);
      return fn.apply(null, args);
  }
}
var add = currying(function() {
  let num = Array.from(arguments)
  return num.reduce((x, y) => {
      console.log('add', num)
      return x + y
  })
})
var ride = currying(function() {
  let num = Array.from(arguments)
  return num.reduce((x, y) => {
      console.log('ride', num)
      return x * y
  })
})
console.log(add(1))
console.log(add(1, 2))
console.log(ride(1, 2, 5))
console.log(ride(10))