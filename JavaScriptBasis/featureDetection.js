/**
 * 
 * @function 浏览器环境下进行 能力检测
 * @author Peter Michaux
 * @website http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
 * 
 * 
 */

function isHostMethod(object, property) {
  var t = typeof object[property];
  return t == 'function' || (!!(t == 'object' && object[property])) || t == 'unknown';
}


// 检测浏览器是否具有 DOM1 级规定的能力
var hasDOM1 = !!(document.getElementById && document.createElement && document.getElementsByTagName);