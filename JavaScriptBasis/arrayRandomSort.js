/*
 * @Author: SkylineBin 
 * @Date: 2019-06-10 20:11:10 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-10 20:21:31
 */


// JavaScript 实现数组乱序

// 时间复杂度 O(n^2)
function randomSortArray (arr){
  let backArr = [];
  while(arr.length){
    let index = parseInt(Math.random()*(arr.length - 1));
    backArr.push(arr[index]);
    arr.splice(index, 1);
  }
  return backArr;
}


// 时间复杂度 O(n)
function randomSortArray2(arr){
  let lenNum = arr.length - 1;
  let tempData;
  for (let i = 0; i < lenNum; i++) {
    let index = parseInt(Math.random() * (lenNum + 1 - i));
    tempData = a[index];
    a[index] = a[lenNum - i]
    a[lenNum - i] = tempData;
  }
  return arr;
}
