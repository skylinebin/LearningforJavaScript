/*****
 * 
 * @function get nodes from DOM
 * @author Professional JavaScript for Web Developers
 * @function convert nodelist to Array
 * 
 * 
 */

function convertToArray (nodes) {
  var array = null;
  try {
    array = Array.prototype.slice.call(nodes, 0); // for those browsers which is not IE
  } catch (ex) {
    array = new Array();
    for (var i = 0, len=nodes.length; i < len; i++) {
      array.push(nodes[i]);      
    }
  }
  return array;
}

function checkSameParentNode(someNode) {
  if (someNode.nextSibling === null) {
    // someNode.childNodes[someNode.childNodes.length - 1] = someNode.lastNode
    console.log("Last node in the parent's childNodes list.");
  } else if (someNode.previousSibling === null) {
    // someNode.childNodes[0] = someNode.firstChild
    console.log("First node in the parent's childnodes list.");
  }
}

// check Function & DOM of this Document
var hasXmlDom = document.implementation.hasFeature("XML", "1.0");
