/*****
 * 
 * @function 实现提取 <attr></attr> 标签里面的 title 并以列表的形式打印出来
 * 
 */

displayAbbreviations = () => {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  // get all abbr elements
  let abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  let defs = new Array();
  // save all attr elements into Array defs
  for (let i = 0; i < abbreviations.length; i++) {
    const currentAbbr = abbreviations[i];
    if (currentAbbr.childNodes.length < 1) continue;
    let definition = currentAbbr.getAttribute("title");
    let key = currentAbbr.lastChild.nodeValue;
    defs[key] = definition;
  }

  // create table
  let datalist = document.createElement("dl");
  // loop reading defs array
  for (key in defs) {
    let thisDefinition = defs[key];
    // create title dt
    let datatitle = document.createElement("dt");
    let datatitleText = document.createTextNode(key);
    // write key into title
    datatitle.appendChild(datatitleText);
    // create definition
    let datadesc = document.createElement("dd");
    let datadescText = document.createTextNode(thisDefinition);
    // write definition into description
    datadesc.appendChild(datadescText);
    // add title and description into table
    datalist.appendChild(datatitle);
    datalist.appendChild(datadesc);
  }

  if (datalist.childNodes.length < 1) return false;

  // create a h2 header
  let thisHeader = document.createElement("h2");
  let thisHeaderText = document.createTextNode("Abbreviations");
  thisHeader.appendChild(thisHeaderText);

  // add header and datalist into this document
  document.body.appendChild(thisHeader);
  document.body.appendChild(datalist);
}

addLoadEvent(displayAbbreviations);