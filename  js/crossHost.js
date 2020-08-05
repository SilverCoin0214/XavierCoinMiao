// 1.CORS
//    Cross  Origin  Resource  Sharing    跨域资源共享
//            专门为跨域设计的一组 http 头
//    预检请求  Preflight
//                    OPTIONS  /foo/bar.json  HTTP/1.1
//                    Referer:
//    请求头
//         Access-Control-Request-Headers     请求期望带上的额外的头
//         Access-Control-Request-Methods     请求期望使用的请求方法
//    响应头：
//        HTTP/1.1  200  OK
//        Access-Control-Allow-Origin: *
//                指明哪个域要访问，可简写为 *
//        Access-Control-Allow-Methods：
//                允许的请求方法
//        Access-Control-Allow-Headers：
//                允许的请求头
//        Access-Control-Allow-Credientials：
//                允许带上凭据（即 cookie 头）
//        Access-Control-Max-Age：多少秒
//                在多长时间内可以不用发预检请求

//-----------------------------------------------------------

//2.JSONP简单实现, 跨域获取数据使用

function jsonp(url, callback) {
  var functionName = "JSONP_CALLBACK_" + Math.random().toString(16).slice(2);

  url = url + "&callback=" + functionName;
  window[functionName] = callback;

  var script = document.createElement("script");
  script.src = url;
  script.onload = function () {
    document.body.removeChild(script);
    delete window[functionName];
  };

  document.body.appendChild(script);
}

jsonp(
  "http://wthrcdn.etouch.cn/weather_mini?city=%E5%8C%97%E4%BA%AC",
  function (info) {
    debugger;
    console.log(info);
  }
);

//--------------

// 3.window.name
//     通过跳转实现
//     a 页面里面 打开 a 页面，然后跳转到 b 页面，跳转的页面的 window.name 相同不变；
//     这样的方法 需要很多的代码实现，基本不会使用。

// 4.iframe

// 5. server  proxy  服务器代理
