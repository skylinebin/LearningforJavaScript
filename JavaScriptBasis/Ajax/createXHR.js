/*
 * @Author: SkylineBin 
 * @Date: 2019-07-08 19:51:12 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-08 20:43:25
 */


function createXHR(){
  if(typeof XMLHttpRequest != 'undefined'){
    return new XMLHttpRequest();
  }else if(typeof ActiveXObject != 'undefined'){
    if(typeof arguments.callee.activeXString != 'string'){
      var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],i,len;
      for (i = 0,len=versions.length; i < len; i++) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (ex){
          console.log(ex.message);
        }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);
  } else {
    throw new Error("NO XHR object available.")
  }
}