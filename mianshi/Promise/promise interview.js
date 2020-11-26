/***
 * 1. 使用Promise实现每隔1秒输出1,2,3
 */

// 自写:   这个实现了功能, 但不属于promise实现其实, 因为只是包裹了一层promise
function timer(delay) {
  const arr = [3, 2, 1];
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const last = arr.pop();
      console.log(last);
      arr.unshift(last);
      resolve();
    }, delay);
  });
}

timer(1000);

// 参考答案:

const arr = [1, 2, 3];
arr.reduce((p, x) => {
  return p.then(() => {
    return new Promise((res) => {
      setTimeout(() => {
        res(console.log(x));
      }, 1000);
    });
  });
}, Promise.resolve());

// -------------------------------------------------------

/***
 *
 * 2. 使用Promise实现红绿灯交替重复亮
 */

function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

// 自己实现:
function light() {
  const setup = function () {
    Promise.resolve()
      .then((res) => {
        setTimeout(() => {
          red();
        }, 3000);
      })
      .then((res) => {
        setTimeout(() => {
          yellow();
        }, 2000);
      })
      .then((res) => {
        setTimeout(() => {
          green();
        }, 1000);
      })
      .finally(() => {
        setTimeout(() => {
          setup();
        }, 3000);
      });
  };

  setup();
}

// 参考答案:

const light = function (timer, cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  });
};

const step = function () {
  Promise.resolve()
    .then(() => {
      return light(3000, red);
    })
    .then(() => {
      return light(2000, green);
    })
    .then(() => {
      return light(1000, yellow);
    })
    .then(() => {
      return step();
    });
};

step();

// ------------------------------------------------------

/**
 * 实现mergePromise函数, 穿进去的数组按顺序先后执行, 并且把返回的数据先后放到数组data中
 */

// 自己实现:  不会

const time = (timer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};
const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

function mergePromise(arr) {}

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]

// 参考答案

const time = (timer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};
const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

function mergePromise(ajaxArray) {
  const data = [];

  let promise = Promise.resolve();
  ajaxArray.forEach((ajax) => {
    // 第一次then为了调用 ajax
    // 第二次then是为了获取ajax
    promise = promise.then(ajax).then((res) => {
      data.push(res);
      return data;
    });
  });

  return promise;
}

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// ------------------------------------------------------------

/**
 *
 * 5. 封装一个异步加载图片的方法
 */

// 自己实现:  不会
function loadImg(url) {}

// 参考答案:

function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // 在图片的onload函数中 使用resolve返回.
    img.onload = function () {
      console.log("一张图片加载完成");
      resolve(img);
    };

    img.onerror = function () {
      reject(new Error("Could not load image at" + url));
    };

    img.src = url;
  });
}

// --------------------------------------------------------------------

/**
 * 6. 限制异步操作的并发个数并尽可能快的完成全部
 */

var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error("Could not load image at" + url));
    };
    img.src = url;
  });
}

// 自己实现:  写的有问题

function limitImg(urls) {
  let res = [];
  for (let i = 0; i < urls.length; i = i + 3) {
    const fragment = urls.slice(i, i + 3);
    res.push(fragment);
  }

  Promise.resolve(res).then((res) => {
    const arr = Promise.all(res.shift()).then((resArr) => {
      for (let i = 0; i < resArr.length; i++) {
        loadImg(resArr[i]);
      }
    });

    return res;
  });
}

// 参考答案:
