/****
 * 
 * @function use a object to handle add event and remove event
 * @author @author Professional JavaScript for Web Developers
 * 
 */

var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      // DOM2 level function 
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      // IE function
      element.attachEvent("on" + type, handler);
    } else {
      // DOM0 level function
      element["on"+ type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on"+ type, handler);
    } else {
      element["on"+ type] = null;
    }
  }
};

var btn = document.getElementById("myBtn");
var handler = function () {
  console.log("Clicked");
}

// add event
EventUtil.addHandler(btn, "click", handler);

// ...

// remove event
EventUtil.removeHandler(btn, "click", handler);