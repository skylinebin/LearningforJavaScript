/****
 * 
 * @function use a object to handle add event and remove event
 * @author @author Professional JavaScript for Web Developers
 * 
 */

import client from './userAgentDetection.js'


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
  },

  // add get related target
  getRelatedTarget: function (event) {
    if (event.relatedTarget) {
      return event.relatedTarget;
    } else if (event.toElement) {
      return event.toElement;
    } else if (event.fromElement) {
      return event.fromElement;
    } else {
      return null;
    }
  },

  // add get button event
  getButton: function (event) {
    if (document.implementation.hasFeature("MouseEvents", "2.0")) {
      return event.button;
    } else {
      switch (event.button) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
          return 0;
        case 2:
        case 6:
          return 2;
        case 4:
          return 1;
      }
    }
  },

  // add wheel Delta
  getWheelDelta: function (event) {
    if (event.wheelDelta) {
      return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
    } else {
      return -event.detail * 40;
    }
  },

  // add keyCode event
  getCharCode: function (event) {
    if (typeof event.charCode == "number") {
      return event.charCode;
    } else {
      return event.keyCode;
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
  console.log(target);
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

// get target and related target
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "mouseout", function(event){
  event = EventUtil.getEvent(event);
  var target = EventUtil.getTarget(event);
  var relatedTarget = EventUtil.getRelatedTarget(event);
  console.log("Moused out of " + target.tagName + " to " + relatedTarget.tagName);
})

// test MouseEvents
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "mousedown", function(event){
  event = EventUtil.getEvent(event);
  console.log(EventUtil.getButton(event));
})

// test key event
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "kwypress", function(event){
  event = EventUtil.getEvent(event);
  console.log(EventUtil.getCharCode(event));
})
// String.fromCharCode() change Code to string

// Check ability of this browser
// document.implementation.hasFeature("CompositionEvent","3.0");