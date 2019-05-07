/*****
 * 
 * format(datetime, formatStr)
 * 格式化时间的函数
 * 
 */


/**
 * 
 * 
 * @param {*} datetime 
 * @param {*} formatStr 'YYYY-MM-DD HH:mm:ss'
 */
function format(datetime, formatStr) {
  let t = getDateObject(datetime);
  let hours, o, i = 0;
  formatStr = formatStr || 'YYYY-MM-DD HH:mm:ss';
  hours = t.getHours();
  o = [
    ['M+', t.getMonth() + 1],
    ['D+', t.getDate()],
    // H 24小时制
    ['H+', hours],
    // h 12小时制
    ['h+', hours > 12 ? hours - 12 : hours],
    ['m+', t.getMinutes()],
    ['s+', t.getSeconds()],
  ];
  // 替换 Y
  if (/(Y+)/.test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  // 替换 M, D, H, h, m, s
  for (; i < o.length; i++) {
    if (new RegExp('(' + o[i][0] + ')').test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length === 1 ? o[i][1] : ('00' + o[i][1]).substr(('' + o[i][1]).length));
    }
  }
  // 替换 a/A 为 am, pm
  return formatStr.replace(/a/ig, hours > 11 ? 'pm' : 'am');
}


function getDateObject(datetime) {
  let t = datetime instanceof Date ? datetime : new Date(datetime);
  if (!t.getDate()) {
    t = new Date();
  }
  return t;
}

let date = new Date();

console.log(format(date, 'YYYY-MM-DD HH:mm:ss'));

// from https: //github.com/csbun/silly-datetime/blob/master/src/index.js

// module.exports = format;