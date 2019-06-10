/*
 * @Author: SkylineBin 
 * @Date: 2019-06-10 10:35:44 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-10 16:32:40
 */


function arrayUnique(arr){
  let res = [];
  for(let i=0,len=arr.length;i< len;i++){
      let item = arr[i];
      (res.indexOf(item) === -1) && res.push(item);
  }
  return res;
}


function arrayUnique2(arr) {
  let res = [];
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let key = typeof(item) + item;
    if (hash[key] !== 1) {
      res.push(item);
      hash[key] = 1;
    }
  }
  return res;
}


function unique(a) {
  let res = [];
  for (let i = 0, len = a.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // 如果发现相同元素 则 i 自增进入下一个循环比较
      if (a[i] === a[j])
        j = ++i;
    }
    res.push(a[i]);
  }
  return res;
}