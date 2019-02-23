/******
 * 
 * @function check if one node contains another node
 * @author Professional JavaScript for Web Developers
 * 
 * 
*/

function contains (refNode, otherNode) {
  if (typeof refNode.contains == 'function' && (!client.engine,webkit || client.engine.webkit >= 522)) {
    return refNode.contains(otherNode);
  } else if (typeof refNode.compareDocumentPosition == 'function') {
    return !!(refNode.compareDocumentPosition(otherNode) & 16);
  } else {
    var node = otherNode.parentNode;
    do {
      if (node == refNode) {
        return true;
      } else {
        node = node.parentNode;
      }
    } while (node != null);
    return false;
  }
}

// get inner texts
function getInnerText(element) {
  return (typeof element.textContent == "string") ? element.textContent : element.innerText;
}

// set inner texts
function setInnerText(element, text) {
  if (typeof element.textContent == "string") {
    element.textContent = text;
  } else {
    element.innerText = text;
  }
}