/*
 * @Author: SkylineBin 
 * @Date: 2019-07-05 09:47:08 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-05 09:53:52
 */


// 通用函数科里化实例
let currying = function(fn){
  let args = [];
  return function(){
    if(arguments.length === 0){
      return fn.apply(this, args);
    }else{
      [].push.apply(args, arguments);
      return arguments.callee;
    }
  }
}

// 定义相加的函数
let cost = (function(){
  let money = 0;
  return function(){
    for (let i = 0,l=arguments.length; i < l; i++) {
      money += arguments[i];
    }
    return money;
  }
})();

let sum = currying(cost);

cost(1,3);
cost(5)(6);
console.log(cost());
