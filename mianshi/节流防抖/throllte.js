var count = 1;
var container = document.getElementById("container");

function getUserAction() {
  container.innerHTML = count++;
}

getUserAction = throttle4(getUserAction, 1000, true);

container.onmousemove = getUserAction;

// ------------------------------------------------------

// 在n秒后才会第一次执行, 就是定时结束后才运行
function throttle(fn, wait) {
  let timeout = null;

  return function () {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
        timeout = null;
      }, wait);
    }
  };
}

// 第一次先执行, 然后按照n秒后才能执行, 就是定时前运行

function throttle2(fn, wait) {
  let timeout = null;

  return function () {
    let context = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      fn.apply(context, arguments);
    }
  };
}

// 时间戳版本 --- 当前时间 - 之前的时间, 如果大于等待时间那就执行

function throttle3(fn, wait) {
  let prev = 0;

  return function () {
    let now = +new Date();
    if (now - prev > wait) {
      fn.apply(this, arguments);
      prev = now;
    }
  };
}

//  第一次就立马执行, 然后定时结束后还会执行一次
function throttle4(fn, wait, immediate) {
  let timeout = null;

  return function () {
    let context = this;
    if (immediate) {
      immediate = false;
      fn.apply(context, arguments);
    } else {
      if (!timeout) {
        timeout = setTimeout(() => {
          fn.apply(context, arguments);
          timeout = null;
        }, wait);
      }
    }
  };
}
