/****
 * 
 * @function use a object to handle add event and remove event
 * @author @author Professional JavaScript for Web Developers
 * 
 */

var EventUtil = {
  // add Event Handler
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
  // add get event function
  getEvent: function (event) {
    return event ? event : window.event;
  },
  // add get target of this event
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  // add cancle default action of this event
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // add remove event handler
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on"+ type, handler);
    } else {
      element["on"+ type] = null;
    }
  },
  // add stop bubble event flow
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancleBubble = true;
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

// get event & target
btn.onclick = function (event) {
  event = EventUtil.getEvent(event);
  var target = EventUtil.getTarget(event);
}

// cancle default action
var link = document.getElementById("myLink");
link.onclick = function (event) {
  event = EventUtil.getEvent(event);
  EventUtil.preventDefault(event);
}

// stop propagation
btn.onclick = function (event) {
  event = EventUtil.getEvent(event);
  EventUtil.stopPropagation(event);
}