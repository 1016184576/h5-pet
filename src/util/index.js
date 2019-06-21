export const format = function(datea,format) {
  var date = {
      "M+": datea.getMonth() + 1,
      "d+": datea.getDate(),
      "h+": datea.getHours(),
      "m+": datea.getMinutes(),
      "s+": datea.getSeconds(),
      "q+": Math.floor((datea.getMonth() + 3) / 3),
      "S+": datea.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (datea.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
      if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1
              ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
      }
  }
  return format;
};