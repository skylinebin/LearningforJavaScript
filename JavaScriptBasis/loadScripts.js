/****
 * 
 * @function load script or style
 * @author Professional JavaScript for Web Developers
 * 
 */

function loadScript (url) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.body.appendChild(script);
}

function loadScriptString (code) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  try {
    script.appendChild(document.createTextNode(code));
  } catch (error) {
    script.text = code;
  }
  document.body.appendChild(script);
}

function loadStyleString(css) {
  var style = document.createElement("style");
  style.type = "text/css";
  try {
    style.appendChild(document.createTextNode(css));
  } catch (error) {
    style.styleSheet.cssText = css;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(style);
}