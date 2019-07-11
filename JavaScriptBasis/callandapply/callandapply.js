/*
 * @Author: SkylineBin 
 * @Date: 2019-07-11 08:39:39 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-11 10:06:24
 */


// 模拟 call 方法
Function.prototype.defineCall = function(context){
  context = context || window;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  let result = context.fn(args.join(','));
  delete context.fn;
  return result;
}


let sayName = function(age){
  console.log('current name: '+ this.name,"current age: "+age);
}
let obj = {
  name:"obj's name"
}
sayName.defineCall(obj,22);

// 模拟 apply 方法
Function.prototype.defineApply = function(context,arr){
  context = context || window;
  context.fn = this;
  let result;
  if(!arr){
    result = context.fn();
  }else {
    let args = [];
    for (let i = 0; i < arr.length; i++) {
      args.push(arr[i]);  
    }
    result = context.fn(args.join(','));
  }
  delete context.fn;
  return result;
}

let obj2 = {
  name: ['Tom','Johy','Joe','David']
}
sayName.defineApply(obj2,[3,4,5,6,7]);