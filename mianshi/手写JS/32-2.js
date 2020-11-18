/**
 *  1. 数组扁平化
 */

const arr = [1, [2, [3, [4, 5]]], 6];

// 方法一:  使用flat(Infinity)
const res1 = arr.flat(Infinity);
console.log("使用flat", res1);

// 方法二: 使用reduce
const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};

const res2 = flatten(arr);
console.log("使用reduce", res2);

// 方法三: 递归
let res3 = [];
const flat3 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat3(arr[i]);
    } else {
      res3.push(arr[i]);
    }
  }
};

flat3(arr);
console.log("使用递归", res3);

// 方法四: 迭代 + 扩展运算符

let res4 = arr;
while (res4.some(Array.isArray)) {
  res4 = [].concat(...res4);
}

console.log("使用扩展运算符", res4);

// ------------------------------------------------------

/******
 *   2. 数组去重
 */

const arr2 = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];

// 方法1: set
const uni1 = Array.from(new Set(arr2));
console.log(uni1, "使用set");

// 方法2: 利用includes

const unique = function (arr2) {
  let res = [];

  for (let i = 0; i < arr2.length; i++) {
    if (!res.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }

  return res;
};

const uni2 = unique(arr2);
console.log(uni2, "使用includes");

// 方法3: 双指针

const unique3 = function (arr2) {
  let res = [...arr2];
  let len = res.length;

  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (res[i] === res[j]) {
        res.splice(j, 1);
      }
    }
  }

  return res;
};

const uni3 = unique3(arr2);
console.log(uni3, "使用头尾双指针");

// 方法4: indexOf

const unique4 = function (arr2) {
  let res = [];
  const len = arr2.length;

  for (let i = 0; i < len; i++) {
    if (res.indexOf(arr2[i]) == -1) {
      res.push(arr2[i]);
    }
  }

  return res;
};

const uni4 = unique4(arr2);
console.log(uni4, "使用indexOf");

// 方法5: filter

const unique5 = function (arr2) {
  return arr2.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
};

const uni5 = unique5(arr2);
console.log(uni5, "使用filter");

// 方法6: Map

const unique6 = function (arr2) {
  const map = new Map();
  const res = [];

  for (let i = 0; i < arr2.length; i++) {
    if (!map.has(arr2[i])) {
      map.set(arr2[i], true);
      res.push(arr2[i]);
    }
  }

  return res;
};

const uni6 = unique6(arr2);
console.log(uni6, "使用Map");

// 方法7: 使用 forEach

const unique7 = function (arr2) {
  let res = [];
  arr2.forEach((item, index) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });

  return res;
};

const uni7 = unique7(arr2);
console.log(uni7, "使用forEach + includes");

/**
 *  3. 类数组转为数组
 */

// 方法1: Array.from
// 方法2: 扩展运算符
// 方法3: 利用concat
// 方法4: Array.prototype.slice.call()

/**
 *  4. Array.prototype.filter() --- filter会返回一个符合条件的数组
 */

Array.prototype.filter_ = function (callback, thisArr = this) {
  const res = [];

  const obj = Object(this);

  const len = obj.length >>> 0;

  for (let i = 0; i < len; i++) {
    if (i in Obj) {
      if (callback.call(thisArr, Obj[i], i, Obj)) {
        res.push(Obj[i]);
      }
    }
  }

  return res;
};

Array.prototype.myFilter = function (callback, thisArr = this) {
  let res = [];

  let len = thisArr.length;

  for (let i = 0; i < len; i++) {
    if (callback.call(thisArr, thisArr[i], i, thisArr)) {
      res.push(thisArr[i]);
    }
  }

  return res;
};

console.log(
  res1.myFilter((item) => item % 2),
  "使用filter"
);

/**
 *  5. Array.prototype.map() --- map会返回一个新映射的数组
 */

Array.prototype.myMap = function (callback, thisArr = this) {
  let res = [];

  let len = thisArr.length;

  for (let i = 0; i < len; i++) {
    res.push(callback.call(thisArr, thisArr[i], i, thisArr));
  }

  return res;
};

console.log(res1.myMap((item) => item * 2));

Array.prototype.map_ = function (callback, thisArg = this) {
  const res = [];

  const obj = Object(this);

  const len = obj.length >>> 0;

  for (let i = 0; i < len; i++) {
    if (i in obj) {
      res[i] = callback.call(thisArg, obj[i], i, this);
    }
  }

  return res;
};

console.log(
  res1.map_((item) => item * 2),
  "使用map"
);

/**
 *  6. Array.prototype.forEach --- forEach不会返回新的数组
 */

Array.prototype.myForEach = function (callback, thisArr = this) {
  const len = thisArr.length >>> 0;

  for (let i = 0; i < len; i++) {
    callback.call(thisArr, thisArr[i], i, thisArr);
  }
};

Array.prototype.forEach_ = function (callback, thisArg = this) {
  const obj = Object(this);
  const len = obj.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in obj) {
      callback.call(thisArg, obj[k], k, obj);
    }
    k++;
  }
};

res1.myForEach((item, index) => {
  console.log(item, "使用forEach");
});

/**
 *  7. Array.prototype.reduce
 */

Array.prototype.myReduce = function (callback, prev) {
  const len = this.length;

  for (let i = 0; i < len; i++) {
    if (prev === undefined) {
      prev = this[0];
      prev = callback.call(this, prev, this[i + 1], i + 1, this);
      i++;
    } else {
      prev = callback.call(this, prev, this[i], i, this);
    }
  }

  return prev;
};

console.log(
  res1.myReduce((prev, curr) => prev + curr),
  "实现reduce"
);

/**
 *  Function.prototype.apply()
 */

let test = {
  a: 5,
};

var a = 1;

function useHard(a = 1, b = 2) {
  return this.a + a + b;
}

Function.prototype.myApply = function (context, args) {
  const fn = Symbol();

  context = context ? Object(context) : window;

  context[fn] = this;

  let res;
  if (args == undefined) {
    res = context[fn]();
  } else {
    res = context[fn](...args);
  }

  delete context[fn];

  return res;
};

console.log(useHard.myApply(test, [3, 3]), "使用apply");

// ES6

Function.prototype.apply_ = function (context = window, args = []) {
  const fn = Symbol("fn");
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
};
console.log(useHard.apply_(test), "使用apply");

/**
 *  Function.prototype.call()
 */

Function.prototype.myCall = function (context, ...args) {
  const fn = Symbol("fn");
  context[fn] = this;

  const res = context[fn](...args);

  delete context[fn];

  return res;
};

console.log(useHard.myCall(test, 3, 3), "使用myCall");

Function.prototype.call_ = function (context = window, ...args) {
  const fn = Symbol("fn");

  context[fn] = this;

  const res = context[fn](...args);

  delete context[fn];

  return res;
};
console.log(useHard.myCall(test, 3, 3), "使用call_");

/**
 *  10. Function.prototype.bind()
 */

Function.prototype.myBind = function (context, ...args) {
  var self = this;

  return function F() {
    // 考虑new情况
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }

    return self.apply(context, [...args, ...arguments]);
  };
};

/**
 *  11. debounce(防抖)
 */

function debounce(func, delay) {
  let timeout = null;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

/**
 *  12. throttle(节流)
 */

function throttle(func, delay) {
  let timeout = null;

  return function () {
    let context = this;

    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(context, arguments);
        timeout = null;
      }, delay);
    }
  };
}

/**
 *  13. 函数柯里化
 */

function add() {
  const _args = [...arguments];

  function fn() {
    _args.push(...arguments);
    return fn;
  }

  fn.toString = function () {
    return _args.reduce((sum, cur) => sum + cur);
  };

  return fn;
}

console.log(add(1)(2)(3));

function add2(...args) {
  var f = add.bind(null, ...args);
  f.toString = function () {
    return args.reduce((a, b) => a + b, 0);
  };

  return f;
}

console.log(add2(1)(2)(3));

/**
 *  14. 模拟new操作
 */

function mockNew(context, ...args) {
  context = context ? Object(context) : window;

  const obj = Object.create(context.prototype);

  const res = obj.apply(obj, ...args);

  return res instanceof Object ? res : obj;
}
