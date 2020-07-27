// 使用ajax修改留言板

// 1.创建HTTP连接
var net = require("net");
var server = net.createServer();
var port = 80;

// 数据库内容
var msgs = [];

// 2.开始连接
server.on("connection", (conn) => {
  //服务器获取到浏览器发送的请求数据
  conn.on("data", (data) => {
    // 2.1处理数据
    var d = data.toString();
    console.log(d);

    // HTTP请求的解析
    var [headers, body] = d.split("\r\n\r\n");
    var [firstLine, ...lines] = headers.split("\r\n");
    var [method, path] = firstLine.split(" ");

    if (method == "POST") {
      var msg = parseQueryString(body);
      msg.timestamp = Date.now();
      msgs.push(msg);

      // 用get请求跳回首页, 为了防止刷新时弹窗,因为POST请求会弹窗, GET不会
      conn.write("HTTP/1.1 200 OK\r\n");
      conn.write("\r\n");
      conn.end(JSON.stringify(msgs));
      return;
    }

    // 2.2下面是返回数据的内容
    conn.write("HTTP/1.1 200 OK\r\n");
    conn.write("Content-Type: text/html; charset=UTF-8\r\n");
    conn.write("\r\n");

    conn.write(`

        <form method="POST" action="">
            Name: <input type="text" name="name">
            Message: <textarea name="content"></textarea>
            <button>yes</button>
        </form>

        <script>
          var btn = document.querySelector('button')
          var nameInput = document.querySelector('[name="name"]')
          var contentInput = document.querySelector('[name="content"]')
          btn.addEventListener('click', e => {
              e.preventDefault()
              var xhr = new XMLHttpRequest()
              xhr.open('POST', '/')
              xhr.send('name=' + nameInput.value + '&content' + contentInput.value)

              xhr.onload = function(e) {
                if(xhr.status = 200) {
                  var div = document.createElement('div')
                  div.innerHTML = '<h3>' + nameInput.value + '<small>' + new Date() + '</small></h3><p>' + contentInput.value + '</p>'
                  document.body.insertBefore(div, document.querySelector('hr').nextSibling)
                  nameInput.value = ''
                  contentInput.value = ''
                }

              }
          })

        </script>

        <hr>
    ${Array.from(msgs)
      .reverse()
      .map(
        (msg) => `
                <div>
                <h3>${msg.name} <small>${new Date(
          msg.timestamp
        ).toString()}</small> </h3>
                <p>${msg.content}</p>
                </div>
            `
      )
      .join("")}

    `);

    conn.end();
  });

  conn.on("error", () => {});
});

// 3.服务器监听, 绑定端口
server.listen(port, () => {
  console.log("listening on port", port);
});

// 相关的处理函数,
function parseQueryString(str) {
  return str.split("&").reduce((result, pair) => {
    var [key, val] = pair.split("=");
    result[key] = decodeURIComponent(val);
    return result;
  }, {});
}

//
//
//
//
// 一些问题.
// 乱码问题一定是编码问题. 只要把所有都设置成UTF-8就可以了
// 空格在decodeURIcomponent里是%20,但是浏览器里有些是+,有些是%20, 所以解析的时候就会出错, 需要自己修改回来
// +号的编码是%2B
//
//
//
//
