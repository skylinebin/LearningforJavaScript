/*****
 * 
 * @function 提取文中的 blockquote 的 cite 属性并显示在文中
 * 
 */

displayCitations = () => {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  // get all quotes
  let quotes = document.getElementsByTagName("blockquote");
  // loop those quotes
  for (let i = 0; i < quotes.length; i++) {
    // check if cite in this quote
    if (!quotes[i].getAttribute("cite")) continue;
    let thisUrl = quotes[i].getAttribute("cite");
    // get all elements
    let thisquoteChildren = quotes[i].getElementsByTagName("*");
    if (thisquoteChildren.length < 1) continue;
    let lastElem = thisquoteChildren[thisquoteChildren.length - 1];

    // create label
    let thisLink = document.createElement("a");
    let thisLinkText = document.createTextNode("source");
    thisLink.appendChild(thisLinkText);
    thisLink.setAttribute("href", thisUrl);
    let superScript = document.createElement("sup");
    superScript.appendChild(thisLink);
    lastElem.appendChild(superScript);    
  }
}

addLoadEvent(displayCitations);