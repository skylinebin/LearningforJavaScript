/*****
 * 
 * @function 将图片转换成灰度图片
 * 
 * 
 */

createGSCanvas = (img) => {
  let canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  let imgdata = ctx.getImageData(0, 0, img.width, img.height);
  for (let i = 0; i < imgdata.height; i++) {
    for (let j = 0; j < imgdata.width; j++) {
      let data_x = (i * 4) * imgdata.height + (j * 4);
      let data_r = imgdata.data[data_x];
      let data_g = imgdata.data[data_x+1];
      let data_b = imgdata.data[data_x+2];
      imgdata.data[data_x] = imgdata.data[data_x + 1] = imgdata.data[data_x + 2] = (data_r + data_g + data_b)/3;      
    }    
  }

  ctx.putImageData(imgdata, 0, 0, 0, 0, imgdata.width, imgdata.height);
  return canvas.toDataURL();
}


convertToGS = (img) => {
  // if (!Modernizr.canvas) return;
  img.color = img.src;
  img.graysale = createGSCanvas(img);

  img.onmouseover = () => {
    this.src = this.color;
  }

  img.onmouseout = () => {
    this.src = this.graysale;
  }
  img.onmouseout();
}

let myavar = document.getElementById("avatar");
myavar.setAttribute('crossOrigin', '');

window.onload = function () {
  convertToGS(myavar);
}