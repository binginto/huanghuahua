
export function getUrlParam(paraName) {
  var url = document.location.toString();
  var arrObj = url.split("?");
  if (arrObj.length > 1) {
    var length = arrObj.length;
    var arrPara = arrObj[length - 1].split("&");
    var arr;
    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");
      if (arr != null && arr[0] == paraName) {
        return arr[1];
      }
    }
    return "";
  }
  else {
    return "";
  }
}

export function userAgent() {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  // 在部分安卓机型中会失效
  // const isWechat = window.__wxjs_environment === 'miniprogram'; //小程序
  // type == app, type == shareWeb
  const isShareWeb = getUrlParam('type') === 'shareWeb';
  const isWechat = window.__wxjs_environment === 'miniprogram';
  const result = { isAndroid: isAndroid, isIos: isIos, isWechat: isWechat, isShareWeb: isShareWeb }
  return result;
};