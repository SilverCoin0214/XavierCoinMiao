function debounce(fn, duration) {
  let timeout;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, druation);
  };
}

function throllte(fn, duration) {
  let timeout = null;

  return function () {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
        timeout = null;
      }, duration);
    }
  };
}

function throttle(fn, duration) {
  let timeout = null;

  return function () {
    let context = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
      }, duration);
      fn.apply(context, arguments);
    }
  };
}
