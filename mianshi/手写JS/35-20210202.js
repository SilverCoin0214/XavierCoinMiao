// 地址 : https://juejin.cn/post/6859026583533912072#heading-4

/*****
 * 1. 实现 call / apply
 */

Function.prototype.call_ = function (context, ...args) {
  let fn = Symbol("fn");
  context = context ? Object(context) : window;
  context[fn] = this;

  let res = context[fn](...args);

  delete context[fn];
  return res;
};

Function.prototype.apply_ = function (context, args) {
  let fn = Symbol("fn");
  context = context ? Object(context) : window;
  context[fn] = this;

  let res = context[fn](...args);

  delete context[fn];
  return res;
};

//-------------------------------------------------------------------------------------

// 要多复习几遍
/***
 * 2. 实现 bind
 * bind返回的是一个绑定了this的函数,
 */

Function.prototype.bind_ = function (context, ...args) {
  context = context ? Object(context) : window;
  let that = this;
  function Fn() {}
  function fBound() {
    return that.apply(this instanceof fBound ? this : context, [
      ...args,
      ...arguments,
    ]);
  }

  Fn.prototype = this.prototype;
  fBound.prototype = new Fn();
  return fBound;
};

//-------------------------------------------------------------------------------------

/***
 * 3. 实现 new
 * new 完成了3件事
 * 1. 创建了一个新的对象, 并且这个对象的原型指向构造函数的原型
 * 2. 将构造函数绑定到这个对象上, 并且执行构造函数
 * 3. 如果构造函数返回了一个对象, 那么就返回这个对象, 否则返回新创的这个对象
 */

function mockNew(ctor, ...args) {
  let obj = Object.create(ctor.prototype);

  let res = ctor.call(obj, ...args);

  return typeof res === "object" ? res : obj;
}

//-------------------------------------------------------------------------------------

/**
 * 4. 用ES5实现数组的map
 * map就是数组映射, 遍历数组后会返回一个新的映射数组
 * @param {function} callback
 *    @param {any} currentValue
 *    @param {number} index
 *    @param {array} arr
 * @return {array}
 */

Array.prototype.map_ = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = callback(this[i], i, this);
  }

  return res;
};

//-------------------------------------------------------------------------------------

/**
 * 5. 用ES5实现 filter
 * fiter是过滤数组, 符合条件的会返回成一个新的数组, 所以参数是一个函数, 该函数返回一个布尔值
 * @param {function} callback
 *    @param {any} currentValue
 *    @param {number} index
 *    @param {array} arr
 *    @return {boolean}
 * @return {array}
 */

Array.prototype.filter_ = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
//-------------------------------------------------------------------------------------

/**
 * 6.用ES6实现some方法
 * some返回的是一个布尔值, 如果找到符合条件返回true, 找不到返回false, 参数是一个函数, 返回值也是布尔值
 * @param {function} callback
 * @return {boolean}
 */

Array.prototype.some_ = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

//-------------------------------------------------------------------------------------

/**
 * 6. 用ES6实现 every 方法
 * 跟some一样, 但要求是所有条件都满足时返回true, 有条件不符合返回false
 * @param {function} callback
 * @return {boolean}
 */

Array.prototype.every_ = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

//-------------------------------------------------------------------------------------

/**
 * 7. 用es5实现 Find 方法
 * find方法是用来找到数组里符合条件的元素的值, 如果找到返回第一个符合的值, 找不到返回-1. 参数是一个函数,
 * @param {function} callback
 * @return {any}
 */

Array.prototype.find_ = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return -1;
};

//-------------------------------------------------------------------------------------

/**
 * 8. 用es5实现 forEach 方法
 * forEach不返回值, 它只是用来处理数组里每一个元素. 参数也是一个函数
 * @param {function} callback
 */

Array.prototype.forEach_ = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//-------------------------------------------------------------------------------------

// 要重新写几遍
/**
 * 9. 用ES5实现 reduce 方法
 * reduce方法会返回一个叠加值, 是通过数组里每个元素叠加而成的. 参数是一个函数.
 * @param {function} callback
 *    @param {any} prevValue
 *    @param {any} currentValue
 *    @param {number}
 *    @param {array} arr
 *    @return {any}
 * @param {any} initailValue
 * @return {any}
 */

Array.prototype.reduce_ = function (callback, init = undefined) {
  const len = this.length;

  for (let i = 0; i < len; i++) {
    if (init == undefined) {
      init = this[0];
      init = callback.call(this, init, this[i + 1], i + 1, this);
      i++;
    } else {
      init = callback.call(this, init, this[i], i, this);
    }
  }

  return init;
};

//-------------------------------------------------------------------------------------

/**
 * 11. 实现 instanceOf 方法
 * instanceOf 使用来判断 原型链的, 一个对象的原型链上是否存在另一个对象, 也就是A的原型链上是否有B
 * 返回值就是布尔值, 有就是 true, 没有就是 false
 */

function instanceOf_(objA, objB) {
  while (objA) {
    if (objA.__proto__ == objB.prototype) {
      return true;
    }

    objA = objA.__proto__;
  }

  return false;
}

//-------------------------------------------------------------------------------------

/**
 * 12. 实现 Object.create 方法
 * create方法实际上就是 原型式继承
 * 参数是需要继承的原型
 * @param {any} fatherProto
 */

Object.create_ = function (fatherProto) {
  function Fn() {}
  Fn.prototype = fatherProto;
  Fn.prototype.constructor = Fn;
  return new Fn();
};

//-------------------------------------------------------------------------------------

// 这个不是自己写的, 要下次重新写一遍
/***
 * 13. 实现一个通用的柯里化函数
 * curry指的是每次只传入一个参数, 返回一个新的接受剩下参数的函数
 * 所以需要达到 1. 参数是否已经满足个数
 *            2. 如果没有达到个数, 那么返回一个新的函数
 *            3. 达到个数, 那么就执行该函数, 返回结果
 */

const curring = (fn, arr = []) => {
  let len = fn.length;
  return function (...args) {
    arr = [...arr, ...args];
    if (arr.length < len) {
      return curring(fn, arr);
    } else {
      return fn(...arr);
    }
  };
};
//-------------------------------------------------------------------------------------

// 反柯里化没懂
/**
 * 14. 实现一个反柯里化函数
 * 使用call, apply可以让非数组借用一些其他类型的函数
 */

Function.prototype.uncurring = function () {
  let self = this;
  return function () {
    return Function.prototype.call.apply(self, arguments);
  };
};

let checkType = Object.prototype.toString.uncurring();

//-------------------------------------------------------------------------------------

/**
 * 15. 实现一个简单的节流函数 throttle
 * 节流函数就是 当事件触发后的一段时间内无法再次触发, 可以理解为存在冷却时间.
 * 节流主要用在滚动条滑动时, 避免不断触发滚动条事件.
 * 还有Input输入框时, 避免输入的过程多次触发键盘事件
 *
 * @param {function} fn 需要绑定的节流函数
 * @param {number} time 需要冷却的时间
 */

function throttle_(fn, time) {
  let flag = false;
  let self = this;
  let timeout;

  return function () {
    if (!flag) {
      flag = true;
      timeout = setTimeout(() => {
        flag = false;
        clearTimeout(timeout);
      }, time);
      fn.apply(self, arguments);
    }
  };
}

const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

//-------------------------------------------------------------------------------------

/**
 * 16. 实现一个简单的防抖函数 debounce
 * 防抖函数 主要是当一个事件触发时先需要一个等待时间, 时间完成才触发, 如果在规定时间内再次触发, 需要重新先计算时间
 * 相当于存在吟唱时间, 被打断后需要重新启动.
 *
 * 主要用在 Input输入框的情况, 当用户输入未完成前先去进行触发键盘事件
 * 浏览器窗口大小resize时避免多次触发
 * 文本编辑器实时保存
 *
 * @param {function} fn 需要绑定的函数
 * @param {number} time 需要等待的时间
 * @return {function}
 */

function debounce_(fn, time) {
  let timeout = null;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

//-------------------------------------------------------------------------------------

// 不是自己写的, 过几天要重新复习
/**
 * 17. 实现一个 compose (组合)
 * 将需要嵌套的函数平铺, 嵌套执行.
 * 就是将一个函数的返回值作为另一个函数的参数.  该函数的调用方向是从右至左执行的.
 * 参数是 各个函数
 * @return {function}
 */

function compose_(...fns) {
  return function (...args) {
    let lastFn = fns.pop();
    return fns.reduceRight((a, b) => {
      return b(a);
    }, lastFn(...args));
  };
}

const compose = (...fns) => (...args) => {
  let lastFn = fns.pop();
  return fns.reduceRight((a, b) => b(a), lastFn(...args));
};

function sum(a, b) {
  return a + b;
}

function toUpper(str) {
  return str.toUpperCase();
}

function add(str) {
  return "===" + str + "===";
}

console.log(compose_(add, toUpper, sum)("cherry", "27")); // ===CHERRY27===

//-------------------------------------------------------------------------------------

/**
 * 18. 实现一个 pipe (管道)
 * pipe的作用跟compose函数的作用是一样的, 也是将参数平铺, 只不过顺序是从左往右
 *
 * 参数就是 各个函数
 * @return {function}
 */

function pipe_(...fns) {
  return function (...args) {
    let firstFn = fns.shift();
    return fns.reduce((a, b) => b(a), firstFn(...args));
  };
}

//-------------------------------------------------------------------------------------

// 不是自己写的, 不过先抄一遍学习下
/**
 * 19. 实现一个模板引擎
 *
 */

const fs = require("fs");
const path = require("path");

const readerFile = (filePath, obj, cb) => {
  fs.readFile(filePath, "utf8", function (err, html) {
    if (err) {
      return cb(err, html);
    }

    html = html.replace(/\{\{([^}]+)\}\}/g, function () {
      console.log(arguments[1], arguments[2]);
      let key = arguments[1].trim();
      return "${" + key + "}";
    });

    let head = `let str = '';\r\n with(obj){\r\n`;
    head += "str+=`";
    html = html.replace(/\{\%([^%]+)\%\}/g, function () {
      return "`\r\n" + arguments[1] + "\r\nstr+=`\r\n";
    });
    let tail = "`}\r\n return str;";
    let fn = new Function("obj", head + html + tail);
    cb(err, fn(obj));
  });
};

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
