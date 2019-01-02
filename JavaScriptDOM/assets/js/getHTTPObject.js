/****
 * 
 * @author SkylineBin
 * @function 实现 XMLHTTPRequest 方法(兼容各大浏览器)
 * 
 */

getHTTPObject = () => {
    if (typeof XMLHttpRequest == "undefined") {
        XMLHttpRequest = () => {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {
                
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {
                
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                
            }
        }
    }
    return new XMLHttpRequest();
}