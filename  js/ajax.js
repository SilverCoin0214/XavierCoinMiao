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
