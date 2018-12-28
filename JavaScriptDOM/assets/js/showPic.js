/*****
 * 
 * @author SkylineBin
 * @function 展示并切换图片
 * 
 */

showPic = (whichpic) => {
    let sourceDom = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", sourceDom);
    let text = whichpic.getAttribute("title");
    let description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

countBodyChildren = () => {
    let bodyElement = document.getElementsByTagName("body")[0];
    // alert(bodyElement.childNodes.length);
    alert(bodyElement.nodeType);
}

// window.onload = countBodyChildren;