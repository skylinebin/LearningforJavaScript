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
    if (!document.getElementById("placeholder")) return false;
    let sourceDom = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", sourceDom);
    // placeholder.src = sourceDom; // 换成 HTML-DOM 的写法
    if (document.getElementById("description")) {
        let text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        let description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
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
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
        
    }
}

// window.onload = prepareLinks;

// 处理链接图片的事件监听
prepareGallery = () => {
    if (!document.getElementsByClassName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imageGallery")) return false;
    let gallery = document.getElementById("imageGallery");
    let imageLinks = gallery.getElementsByTagName("a");
    for (let i = 0; i < imageLinks.length; i++) {
        imageLinks[i].onclick = function () {
            return showPic(this) ? false : true;
        }
        // imageLinks[i].onkeypress = imageLinks[i].onclick;
    }
}


// 创建在 DOM 后插入的方法
insertAfter = (newElement, targetElement) => {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}


// 添加显示图片和 placeholder 的DOM
preparePlaceholder = () => {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imageGallery")) return false;
    let placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src", "assets/images/placeholder.png");
    placeholder.setAttribute("alt", "this image gallery");
    let description = document.createElement("p");
    description.setAttribute("id", "description");
    let desctext = document.createTextNode("Choose an image.");
    description.appendChild(desctext);

    let gallery = document.getElementById("imageGallery");
    // gallery.parentNode.insertBefore(placeholder, gallery);
    // gallery.parentNode.insertBefore(description, gallery);
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);


}





addLoadEvent = (func) => {
    let oldLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
addLoadEvent(prepareLinks);

