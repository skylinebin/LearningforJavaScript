/*****
 * 
 * @function 使用 DOM 更改页面的样式
 * 
 */

// 获取某个节点的下一个 **元素**节点
getNextElement = (node) => {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}

styleHeaderSiblings = () => {
  if (!document.getElementsByTagName) return false;
  let headers = document.getElementsByTagName("h1");
  let elem;
  for (let i = 0; i < headers.length; i++) {
    elem = getNextElement(headers[i].nextSibling);
    elem.style.fontWeight = "bold";
    elem.style.fontSize = "1.2em";
  }
}

// 使用 javascript 控制表格奇偶行样式变换
stripeTables = () => {
  if (!document.getElementsByTagName) return false;
  let tables = document.getElementsByTagName("table");
  let odd, rows;
  for (let i = 0; i < tables.length; i++) {
    odd = false;
    rows = tables[i].getElementsByTagName("tr");
    for (let j = 0; j < rows.length; j++) {
      if (odd == true) {
        rows[j].style.backgroundColor = "#ffc";
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}

// 鼠标悬停，该行文字加粗
highlightRows = () => {
  if (!document.getElementsByTagName) return false;
  let rows = document.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].onmouseover = () => {
      this.style.fontWeight = "bold";
    }
    rows[i].onmouseout = () => {
      this.style.fontWeight = "normal";
    }  
  }
}

addLoadEvent(highlightRows);

addLoadEvent(styleHeaderSiblings);
addLoadEvent(stripeTables);