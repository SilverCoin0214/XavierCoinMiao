function now() {
  return 21;
}

function later() {
  answer = answer * 2;
  console.log("meaning of life:", answer);
}

var answer = now();
setTimeout(later, 1000);

//--------

var a = {
  index: 1,
};

console.log(a);

a.index++;

/// ------- 分段执行, 可以保证进程运行时间短, 让其他进程有机会运行.
var res = [];

function response(data) {
  var chunk = data.splice(0, 1000);

  res = res.concat(
    chunk.map(function (val) {
      return val * 2;
    })
  );

  if (data.length > 0) {
    setTimeout(function () {
      response(data);
    }, 0);
  }
}

ajax("http://some.url.1", response);
ajax("http://some.url.2", response);

/// 事件循环队列
//
