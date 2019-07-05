/*
 * @Author: SkylineBin 
 * @Date: 2019-07-04 22:14:17 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-05 10:34:50
 */


function sum(num){
  let sumNum = 0;
  let args = [].slice.call(arguments);
  sumNum += args.reduce(function(a,b){
    return a+b;
  })
  let curryFun = function(numB){
    let argsF = [].slice.call(arguments);
    if(arguments.length === 0){
      return sumNum;
    }else {
      sumNum += argsF.reduce(function(a,b){
        return a+b;
      })
      return curryFun;
    }
  };

  curryFun.valueOf = function(){
    return sumNum;
  }
  curryFun.toString = function(){
    return sumNum;
  }
  return curryFun;
}

let x = 2;
let y = 5;
console.log(sum(x,y));
console.log(sum(x)(y));


function curry(fn) {
  var slice = [].slice;
  var len = fn.length;

  return function curried() {
      var args = slice.call(arguments);
      if (args.length >= len) {
          return fn.apply(null, args);
      }

      return function () {
          return curried.apply(null, args.concat(slice.call(arguments)));
      };
  };
}

var add = curry(function (a, b) {
  return a + b;
});

// console.log(add(1,2)); // 10
console.log(add(1,2,3,4)); // 10


