function ajax(method, url, data, Success) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.addEventListener("load", (e) => {
    Success(JSON.parse(xhr.responseText));
  });

  xhr.send(data);
}

ajax("get", "http://xxx.com/", null, function (data) {});

function get(url, Success) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", (e) => {
    if (xhr.status < 400) {
      Success(JSON.parse(xhr.responseText));
    } else {
      throw new Error();
    }

    xhr.addEventListener("error", (e) => {
      throw new Error("Network break");
    });
  });

  xhr.send();
}

get("http://xxx.com", function (data) {});

function post(url, data, Success) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.addEventListener("load", (e) => {
    Success(JSON.parse(xhr.responseText));
  });

  xhr.send(data);
}

post("/", "name=lili&content=123", function (data) {});

//-----------------------------------------------------------

//JSONP简单实现, 跨域获取数据使用

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
