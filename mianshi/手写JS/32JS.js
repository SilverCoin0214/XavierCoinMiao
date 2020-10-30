// 地址: https://juejin.im/post/6875152247714480136

/**
 *  1. 数组扁平化
 */

const arr = [1, [2, [3, [4, 5]]], 6];

// 方法1 原生API

console.log(arr.flat(Infinity));

// 方法2 递归

let res = [];
function myFlat(arr) {
  for (let value of arr) {
    if (Array.isArray(value)) {
      myFlat(value);
    } else {
      res.push(value);
    }
  }

  return res;
}

console.log(myFlat(arr));

// 方法3 reduce

const flatten = (arr) => {
  return arr.reduce((prev, curr, index, arr) => {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
};

console.log(flatten(arr));

// 方法4 正则

const res2 = JSON.stringify(arr).replace(/\[|\]/g, "").split(".");
console.log(res2);

const res3 = JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]");
console.log(res3);

/**
 *  2. 数组去重
 *
 */

const arr2 = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];

// 方法1: set

const setArr = Array.from(new Set(arr2));
console.log(setArr);

// 方法2: for循环 + splice , 双指针

const unique = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }

  return arr;
};

console.log(unique(arr2));

// 方法3: IndexOf

const unique2 = (arr) => {
  let res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }

  return res;
};

console.log(unique2(arr2));

// 方法4: include

const unique3 = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
};

console.log(unique3(arr2));

// 方法5: filter

const unique4 = (arr) => {
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
};

console.log(unique4(arr2));

// 方法6: Map

const unique5 = (arr) => {
  const map = new Map();
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }

  return res;
};

console.log(unique5(arr2));

/**
 *  3.类数组转化为数组
 *
 */

// 方法1:  Array.from(arguments)

// 方法2: 扩展运算符 [...arguments]

// 方法3: concat Array.prototype.concat.apply([], arguments)

// 方法4: Array.prototype.slice.call(arguments)  slice会返回新对象

/**
 *  4. 写一个Array.prototype.filter()
 *  写这些的核心都是遍历数组, 附加条件, 条件就是callback
 */

Array.prototype.myFilter = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

console.log(res.myFilter((item) => item % 2 == 0));

// 完整版 filter

Array.prototype.filter_ = function (callback, thisArg) {
  if (this == undefined) {
    throw new TypeError("this is null or not undefined");
  }

  if (!(callback instanceof Function)) {
    throw new TypeError("callback is not a function");
  }

  const res = [];
  const obj = Object(this);
  const len = obj.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (callback.call(thisArg, obj[i], i, obj)) {
      res.push(obj[i]);
    }
  }

  return res;
};

console.log(res.filter_((item) => item % 2 == 0));

/**
 * 5. Array.prototype.map()
 *    map是映射, 所以就是把一个数组映射到另一个数组
 */

Array.prototype.myMap = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }

  return res;
};

console.log(res.myMap((item) => item * item));

// 完整版

Array.prototype.map_ = function (callback, thisArg) {
  if (this == undefined) {
    throw new TypeError("this is null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }

  const res = [];
  const obj = Object(this);
  const len = obj.length >>> 0;
  for (let i = 0; i < len; i++) {
    res.push(callback.call(thisArg, obj[i], i, obj));
  }

  return res;
};

console.log(res.map_((item) => item * item));

/**
 *  6. Array.prototype.forEach()
 *  相当于For循环, foreach没有返回值
 */

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// 用while实现forEach
Array.prototype.forEach2 = function (callback) {
  let index = -1;
  let len = this.length;
  while (++index < len) {
    callback(this[index], index);
  }
};

console.log(
  "foreach2:" + res.forEach2((item, index) => console.log(item, index))
);

// 完整版

Array.prototype.forEach_ = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("this is null or undefined");
  }
  if (!(callback instanceof Function)) {
    throw new TypeError("callback is not a function");
  }

  const obj = Object(this);
  const len = obj.length >>> 0;
  for (let i = 0; i < len; i++) {
    callback.call(thisArg, obj[i], i, obj);
  }
};

console.log(
  "foreach_: " + res.forEach_((item, index) => console.log(item, index))
);

/**
 *  7. Array.prototyp.reduce
 *
 */

Array.prototype.myReduce = function (callback, prev) {
  for (let i = 0; i < this.length; i++) {
    if (prev == undefined) {
      prev = this[0];
      prev = callback(prev, this[i + 1], i + 1, this);
      i++;
    } else {
      prev = callback(prev, this[i], i, this);
    }
  }

  return prev;
};

console.log(
  res.myReduce((prev, curr) => {
    return prev + curr;
  })
);

// 完整版

Array.prototype.reduce_ = function (callback, init) {
  if (this == null) {
    throw new TypeError("this is null or undefined");
  }
  if (!(callback instanceof Function)) {
    throw new TypeError("callback is not a function");
  }

  const obj = Object(this);
  const len = obj.length >>> 0;

  let accu = init;
  for (let i = 0; i < len; i++) {
    if (accu == undefined) {
      accu = obj[0];
      accu = callback(accu, obj[i + 1], i + 1, obj);
      i++;
    } else {
      accu = callback(accu, obj[i], i, obj);
    }
  }

  return accu;
};

console.log(
  res.reduce_((prev, curr) => {
    return prev + curr;
  })
);

/**
 *  8. Function.prototype.apply()
 *
 */

Function.prototype.myApply = function (obj, args) {
  if (!(this instanceof Fucntion)) {
    throw new TypeError("this is not a function");
  }

  obj = obj ? Object(obj) : window;

  obj[fn] = this;

  let res;
  if (!args) {
    res = obj[fn]();
  } else {
    res = obj[fn](...args);
  }

  delete obj[fn];
  return res;
};

/**
 *  9. Function.prototype.call()
 *
 */

Function.prototype.myCall = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Type Error");
  }

  obj = obj ? Object(obj) : window;

  const fn = Symbol("fn");
  obj[fn] = this;

  let res;
  //   const arg = [...args];
  const arg = Array.prototype.slice.call(args);
  if (!args) {
    res = obj[fn]();
  } else {
    res = obj[fn](...arg);
  }

  delete obj[fn];
  return res;
};

const name = "呀哈哈";

function f1(a, b) {
  console.log(a + b + this.name);
}

const f2 = {
  name: "sce",
};

console.log(f1.myCall(f2, "我是", "一个"));

/**
 *  10. Function.prototype.bind()
 *
 */

/**
 *  11. 防抖
 *  防抖是在规定时间内再次出发会导致时间重新计算, 然后知道不在触发后时间完毕执行函数
 */

const debounce = function (func, delay) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
};

/**
 *  12. 节流
 *  节流是在规定时间内只会触发一次操作, 不论规定时间里进行了多少次, 都只会在时间结束时执行一次
 */

const throttle = function (func, delay) {
  let timeout = null;

  return function () {
    let that = this;

    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(that, arguments);
        timeout = null;
      }, delay);
    }
  };
};

/**
 *  13. ***函数柯里化
 *  柯里化的目的是实现多参函数, js本身具有多参能力, 但是可以用js实现柯里化
 *  柯里化的思路是 把可以接受多个参数的函数变成接受一个单一参数的函数, 然后该函数返回 接受余下参数的新函数
 *  Currying ——只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
 */

function add() {
  const _args = [...arguments];

  function fn() {
    _args.push(...arguments);
    return fn;
  }

  fn.toString = function () {
    return _args.reduce((sum, curr) => sum + curr);
  };

  return fn;
}

console.log(add(1)(2)(3)(4));

function currying(fn, ...args1) {
  if (args1.length > fn.length) {
    return fn(...args1);
  }

  return function (args2) {
    return currying(fn, ...args1, ...args2);
  };
}

/**
 *  14. ***模拟new
 *  1, 以 constructor为原型创建一个对象
 *  2. 执行构造函数并将this绑定到新创建的对象上.
 *  3. 判断构造函数执行返回的结果是否是引用数据类型, 如果是则返回构造函数的结果, 不是就返回新对象
 *
 */

function mockNew() {
  let emptyObj = new Object();

  let constructor = Array.prototype.shift.call(arguments);

  if (typeof constructor !== "function") {
    throw "构造函数应该是一个函数";
  }

  emptyObj.constructor = constructor;
  emptyObj.__proto__ = constructor.prototype;
  let resObj = constructor.apply(emptyObj, arguments);

  if (typeof resObj === "object") {
    return resObj;
  }

  return emptyObj;
}

function newOperator(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw new TypeError("Type Error");
  }

  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);

  const isObject = typeof res === "object" && res !== null;
  const isFunction = typeof res === "function";
  return isObject || isFunction ? res : obj;
}

/**
 *  15. **instanceof
 *  instanof一般用于检查引用类型, 所以如果不是Ojbect, 返回的都是false, 然后是获取需要判定的引用类型的原型
 *  在原型链上能找到原型, 那就返回true, 不能就返回False
 */

const myInstanceof = (left, right) => {
  if (typeof left !== "object" || left === null) {
    return false;
  }

  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
};

console.log(myInstanceof([1, 2, 32], Array));

/**
 *  16. 原型继承, 继承组合继承
 *
 */

function Parent() {
  this.name = "parent";
}

function Child() {
  Parent.call(this);
  this.type = "children";
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

/**
 *   17.Object.is
 *   对比值是否相等.
 *    主要解决: +0===-0为true, NaN==NaN为false
 */

const is = (x, y) => {
  if (x == y) {
    // 针对 +0 不等于 -0
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 针对 NaN 等于 NaN
    return x !== x && y !== y;
  }
};

/**
 *  18. Object.assign
 *
 */

// 0. 定义属性用defineProperty
Object.defineProperty(Object, "assign_", {
  value: function (target, ...args) {
    // 1.保证target存在和正确
    if (target == null) {
      throw new TypeError("type error");
    }

    // 2. 保证target是个对象
    let to = Object(target);

    for (let i = 0; i < args.length; i++) {
      // 3. 取出每个对象
      const nextSource = args[i];
      // 4.保证对象不为空
      if (nextSource !== null) {
        for (const nextKey in nextSource) {
          // 5. 需要保证属性是在对象自身上, 而不是原型链上
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  },

  enumerable: false,
  writable: true,
  configurable: true,
});

let a = {
  name: "advanced",
  age: 18,
};
let b = {
  name: "Jane",
  book: {
    title: "You Don't Know JS",
    price: "45",
  },
  like: ["apple", "orange", "banana"],
};
let c = Object.assign_(a, b);
console.log(c);

/**
 *  19. 深拷贝
 *
 */

// 基本深拷贝
function deepClone(target) {
  if (typeof target === "object") {
    let res = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        res[key] = deepClone(target[key]);
      }
    }
    return res;
  } else {
    return target;
  }
}

let d = deepClone(b);
b.age = 19;
b.book.title = "I know";
console.log(b, d);

// 解决循环引用, 对象自身属性是自身.

function deepClone2(target, map = new WeakMap()) {
  // 参数处理
  if (typeof target !== "object" || target === null) {
    return target;
  }

  if (typeof target === "object") {
    // 考虑数组
    let res = Array.isArray(target) ? [] : {};

    // 使用map防止循环引用
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, res);

    // 递归循环值-- for in 可优化为forEach
    for (const key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        res[key] = deepClone2(target[key], map);
      }
    }

    return res;
  } else {
    return target;
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
};
target.target = target;

let e = deepClone2(b);
console.log(e);

/***
 *  20. Promise
 *
 */
