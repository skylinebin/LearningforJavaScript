/*
 * @Author: SkylineBin 
 * @Date: 2019-06-10 10:35:44 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-11 09:19:54
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

function unique2(array) {
  var res = [];
  var sortedArray = array.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
      // 如果是第一个元素或者相邻的元素不相同
      if (!i || seen !== sortedArray[i]) {
          res.push(sortedArray[i])
      }
      seen = sortedArray[i];
  }
  return res;
}


// 使用Object 去重的演化之路  

function uniqueObject1(array) {
  var obj = {};
  return array.filter(function(item, index, array){
      return obj.hasOwnProperty(item) ? false : (obj[item] = true)
  })
}

// 为了能区分 1 和 '1', 在存储时需要加上类型判断
function uniqueObject2(array) {
  var obj = {};
  return array.filter(function(item, index, array){
      return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}

// 为了能区分对象类型，再次加入JSON序列化  
function uniqueObject3(array) {
  var obj = {};
  return array.filter(function(item, index, array){
      console.log(typeof item + JSON.stringify(item))
      return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
  })
}

// 使用 Set 完成 数组去重,只能去除字符串和数字的重复，不能去除对象的重复  
function uniqueSet(array) {
  return Array.from(new Set(array));
}

function uniqueSet2(array) {
  return [...new Set(array)];
}

let uniqueSet3 = (a) => [...new Set(a)];


// 使用 Map 完成

function uniqueMap(array){
  const temp = new Map();
  return array.filter((a) => !temp.has(a) && temp.set(a, 1))
}



let array = [{value: 1}, {value: 1}, {value: 2}];
// let array = [1, 2, 1, 1, '1'];
console.log(uniqueMap(array));