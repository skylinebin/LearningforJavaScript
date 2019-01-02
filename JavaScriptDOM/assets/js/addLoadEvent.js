/****
 * 
 * @author SkylineBin
 * @function 实现 addLoadEvent 方法(兼容各大浏览器)
 * 
 */

addLoadEvent = (func) => {
    let oldLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}