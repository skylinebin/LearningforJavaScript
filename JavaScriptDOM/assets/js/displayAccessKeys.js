/*****
 * 
 * @function 实现提取 <a></a> 标签里面的 accesskey 并以列表的形式打印出来
 * 
 */

displayAccesskeys = () => {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  // get all a elements
  let links = document.getElementsByTagName("a");
  if (links.length < 1) return false;
  let allkeys = new Array();
  // save all a elements into Array allkeys
  for (let i = 0; i < links.length; i++) {
    const currentLink = links[i];
    if (!currentLink.getAttribute("accesskey")) continue;
    let key = currentLink.getAttribute("accesskey");
    let currentText = currentLink.lastChild.nodeValue;
    allkeys[key] = currentText;
  }

  // create table ul
  let datalist = document.createElement("ul");
  // loop reading allkeys array
  for (key in allkeys) {
    let thisText = allkeys[key];
    // create table li item
    let tempStr = key + ":" + thisText;
    let item = document.createElement("li");
    let itemText = document.createTextNode(tempStr);
    item.appendChild(itemText);
    // add item into list
    datalist.appendChild(item);
  }

  if (datalist.childNodes.length < 1) return false;

  // create a h3 header
  let thisHeader = document.createElement("h2");
  let thisHeaderText = document.createTextNode("Accesskeys");
  thisHeader.appendChild(thisHeaderText);

  // add header and datalist into this document
  document.body.appendChild(thisHeader);
  document.body.appendChild(datalist);
}

addLoadEvent(displayAccesskeys);