/****
 * 
 * @author SkylineBin
 * @function 实现 加载Content的方法(兼容各大浏览器)
 * 
 */

getNewContent = () => {
    let request = getHTTPObject();
    if (request) {
        request.open("GET", "https://sdns.skylinebin.com/text/example.txt", true);
        request.onreadystatechange = () => {
            if (request.readyState == 4) {
                alert("Response Received");
                let para = document.createElement("p");
                let text = document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById("new").appendChild(para);
            };
        }
        request.send(null);
    } else {
        alert("sorry, your browser doesn't support XMLHttpRequest");
    }
    alert("Function Done");
}

addLoadEvent(getNewContent);