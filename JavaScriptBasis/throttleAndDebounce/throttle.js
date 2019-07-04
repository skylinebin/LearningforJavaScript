/*
 * @Author: SkylineBin 
 * @Date: 2019-07-04 19:53:19 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-04 20:51:26
 */


let throttle = function(fn, interval){
  let _self = fn,
    timer,
    firstTime = true;
  
  return function(){
    let args = arguments,
      _me = this;
    if(firstTime){
      _self.apply(_me, args);
      return firstTime = false;
    }
    if(timer){
      return false;
    }
    timer = setTimeout(function(){
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    },interval || 500);
  };
}

window.onresize = throttle(function(){
  console.log(1);
},500)





// 高级程序设计中的函数节流
function throttle2(method,context){
  clearTimeout(method.tId);
  method.tId=setTimeout(function(){
      method.call(context);
  },500);
}


// 另一种写法

function throttle3(fn, times){
  let state = true;
  return function(){
    if(!state){
      return false;
    }
    state = false;
    let _that = this, args = arguments;
    setTimeout(function(){
      fn.apply(_that, args);
      state = true;
    },times || 500)
  }
}