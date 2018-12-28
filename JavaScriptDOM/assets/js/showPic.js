/*****
 * 
 * @author SkylineBin
 * @function 展示并切换图片
 * 
 */

/****
 * 
 * showPic.min.js 是使用 Google Closure Compiler 压缩后的版本
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

popUp = (winURL) => {
    window.open(winURL, "popup", "width=320,height=480");
}

prepareLinks = () => {
    if (!document.getElementsByTagName) return false;
    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "pop-input") {
            links[i].onclick = () => {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
        
    }
}

window.onload = prepareLinks;
