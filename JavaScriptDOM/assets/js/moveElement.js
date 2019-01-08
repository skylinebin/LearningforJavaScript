/******
 * 
 * @function 使用 JavaScript 实现动画效果
 * 
 */

moveElement = (elementId, final_x, final_y, interval) => {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementId)) return false;
  let elem = document.getElementById(elementId);
  if (elem.movement) {
    clearTimeout(elem.movement)
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  let xpos = parseInt(elem.style.left);
  let ypos = parseInt(elem.style.top);
  let dist = 0;
  if (xpos == final_x &&　ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    dist = Math.ceil((final_x - xpos) / 10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    dist = Math.ceil((xpos - final_x) / 10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    dist = Math.ceil((final_y - ypos) / 10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    dist = Math.ceil((ypos - final_y) / 10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  let repat = "moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repat, interval);
}

// 定义初始位置以及移动参数
positionMessage = () => {
  if (!document.getElementById) return false;
  if (!document.getElementById("message")) return false;
  let elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  moveElement("message", 125, 25, 20);
}

insertAfter = (newElement, targetElement) => {
  let parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}



prepareSlideshow = () => {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("linklist")) return false;
  let slideshow = document.createElement("div");
  slideshow.setAttribute("id", "slideshow");
  let preview = document.createElement("img");
  preview.setAttribute("src", "./assets/images/placeholder.png");
  preview.setAttribute("alt", "building blocks of web design");
  preview.setAttribute("id", "preview");
  slideshow.appendChild(preview);

  let list = document.getElementById("linklist");
  insertAfter(slideshow, list);
  let links = document.getElementsByTagName("a");

  links[0].onmouseover = function () {
    moveElement("preview", -100, 0, 10);
  }
  links[1].onmouseover = function () {
    moveElement("preview", -200, 0, 10);
  }
  links[2].onmouseover = function () {
    moveElement("preview", -300, 0, 10);
  }

}

addLoadEvent(positionMessage);
addLoadEvent(prepareSlideshow);