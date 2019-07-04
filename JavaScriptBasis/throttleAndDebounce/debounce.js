/*
 * @Author: SkylineBin 
 * @Date: 2019-07-04 20:51:37 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-04 20:54:12
 */

// 函数去抖
function debounce(fn, delay){
  let timeout;
  return function(e){
    clearTimeout(timeout);
    let _content=this, args=arguments;
    timeout = setTimeout(function(){
      fn.apply(_content, args);
    },delay || 500)
  }
}