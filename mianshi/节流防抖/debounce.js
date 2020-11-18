var count = 1;
var container = document.getElementById("container");

function getUserAction() {
  container.innerHTML = count++;
}

getUserAction = debounce(getUserAction, 1000, true);

container.onmousemove = getUserAction;

// ----------------------------------------------------------------

// 不会立马执行, 触发后需要等待N秒, 在N秒内又触发又需要等待.
function debounce(fn, wait) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}

// 能够立马执行
function debounce2(fn, wait, immediate) {
  let timeout;
  let result;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    let context = this;

    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) {
        result = fn.apply(context, arguments);
      }
    } else {
      timeout = setTimeout(() => {
        fn.apply(context, arguments);
      });
    }

    return result;
  };
}
