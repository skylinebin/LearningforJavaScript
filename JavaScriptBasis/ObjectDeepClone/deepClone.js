/*
 * @Author: SkylineBin 
 * @Date: 2019-07-10 14:48:58 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-10 14:52:57
 */

/****
 * 
 * 数组对象的递归深拷贝
 * 
 * 
 */

function deepClone(obj){
  let clonedObj = obj.constructor === Array ? []:{};
  for (let key in obj) {
    if(obj.hasOwnProperty(key)){
      if(obj[key] && typeof obj[key] === 'object'){
        clonedObj[key] = obj[key].constructor === Array ? []:{};
        clonedObj[key] = deepClone(obj[key]);
      }else {
        clonedObj[key] = obj[key];
      }
    }
  }
  return clonedObj;
}

