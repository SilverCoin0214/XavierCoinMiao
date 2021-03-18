// https://juejin.cn/post/6875152247714480136#heading-35

/***
 *  1. 数组扁平化
 */

// 测试用例
const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]

// 1. 直接使用 flat 函数
const q1Res1 = arr.flat(Infinity);
console.log(q1Res1);

// 2. 使用 递归

let q1Res2 = [];
const recursionQ1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Object.prototype.toString.call(arr[i]) !== "[object Array]") {
      q1Res2.push(arr[i]);
    } else {
      recursionQ1(arr[i]);
    }
  }
};
recursionQ1(arr);
console.log(q1Res2);

// 3. 使用 reduce

const flatten = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
};
const q1Res3 = flatten(arr);
console.log(q1Res3);

// 4. 使用 正则表达式

const q1Res4 = JSON.parse(
  "[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]"
);
console.log(q1Res4);

//-------------------------------------------------------------------------------------

/***
 *  2. 数组去重
 */

// 测试用例
const arr2 = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// 1. 使用 Set
const q2Res1 = Array.from(new Set(arr2));
console.log(q2Res1);

// 2. 使用 for + indexOf
const q2Res2 = [];
for (let i = 0; i < arr2.length; i++) {
  if (q2Res2.indexOf(arr2[i]) == -1) {
    q2Res2.push(arr2[i]);
  }
}
console.log(q2Res2);

// 3. 使用 include
const unique3 = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr2[i]);
    }
  }

  return res;
};
console.log(unique3(arr2));

// 4. 使用 filter

const unique4 = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) == index);
};
console.log(unique4(arr2));

// 5. 使用 map
let map = new Map();
const q2Res5 = [];
for (let i = 0; i < arr2.length; i++) {
  if (!map.has(arr2[i])) {
    map.set(arr2[i], true);
    q2Res5.push(arr2[i]);
  }
}
console.log(q2Res5);

//-------------------------------------------------------------------------------------

/**
 * 3. 类数组转化为数组
 */

// 1. Array.from 方法
// 2. Array.prototype.slice.call()
// 3. concat
// 4. ...运算符

//-------------------------------------------------------------------------------------

/**
 * 4. Array.prototype.filter()
 * filter会返回一个新的数组
 */

Array.prototype.filter_ = function (callback, thisArg = this) {
  const res = [];
  const obj = Object(this);

  for (let i = 0; i < obj.length; i++) {
    if (i in obj) {
      if (callback.call(thisArg, obj[i], i, obj)) {
        res.push(obj[i]);
      }
    }
  }

  return res;
};

console.log(
  q1Res1.filter_((item) => item % 2),
  "使用filter"
);

//-------------------------------------------------------------------------------------

/**
 * 5. Array.prototype.map(callback(currtentVale, index, array), thisArg)
 * map会返回一个新的映射数组.
 */

Array.prototype.map_ = function (callback, thisArg = this) {
  const res = [];
  const obj = Object(this);

  for (let i = 0; i < obj.length; i++) {
    res.push(callback.call(thisArg, obj[i], i, obj));
  }

  return res;
};

console.log(
  q1Res1.map_((item) => item * 2),
  "使用map"
);

//-------------------------------------------------------------------------------------

/***
 *  6. Array.prototype.forEach(callback, thisArg)
 *  forEach是对数组里每个元素进行操作, 但是没有返回值
 */

Array.prototype.forEach_ = function (callback, thisArg = this) {
  const obj = Object(this);
  const len = obj.length >>> 0;

  for (let i = 0; i < len; i++) {
    callback.call(thisArg, obj[i], i, obj);
  }
};

console.log(
  q1Res1.forEach_((item) => {
    let res = item * 3;
    console.log(res);
    return res;
  }),
  "使用forEach"
);

// --------------他人写法
Array.prototype.forEach$ = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }

  if (typeof callbakc !== "function") {
    throw new TypeError(callback + "is not a function!");
  }

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

//-------------------------------------------------------------------------------------

/**
 *  7. Array.prototype.reduce(callback, initialValue)
 *  reduce是对数组里每个元素进行叠加操作, 会最终返回一个叠加值
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

console.log(
  q1Res1.reduce_((prev, curr) => (prev = prev + curr), 0),
  "使用reduce"
);

// ----- 他人答案
Array.prototype.reduce$ = function (callback, init) {
  if (this == undefined) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback != "function") {
    throw new TypeError(callback + "is not a function");
  }

  const obj = Object(this);
  const len = this.length >>> 0;
  let accumulator = init;
  let k = 0;

  if (accumulator === undefined) {
    while (k < len && !(k in obj)) {
      k++;
    }
    if (k >= len) {
      throw new TypeError("reduce of empty array with no initail value");
    }
    accumulator = obj[k++];
  }

  while (k < len) {
    if (k in obj) {
      accumulator = callback.call(undefined, accumulator, obj[k], k, obj);
    }
    k++;
  }

  return accumulator;
};

//-------------------------------------------------------------------------------------

/**
 * 8. Function.prototype.apply()
 * apply其实就是将this强制绑定给一个对象, 并且第二个参数是数组或者类数组
 * 步骤就是创建一个对象, 然后将方法挂载到这个对象上, 然后执行这个方法, 之后删除这个对象, 返回结果
 */

let test = {
  a: 5,
};

var a = 1;

function useHard(a = 1, b = 2, c = 3) {
  return this.a + a + b + c;
}

Function.prototype.apply_ = function (context, args) {
  let fn = Symbol("fn");

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

console.log(useHard.apply_(test, [3, 3]), "使用apply");

// ---- 他人答案
Function.prototype.apply$ = function (context = window, args) {
  if (typeof this != "function") {
    throw new TypeError("TypeError");
  }
  const fn = Symbol("fn");
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
};

//-------------------------------------------------------------------------------------

/**
 * 9. Funciton.prototype.call()
 * call跟apply写法完全一样, 区别只在于传递的后面参数, 从第二个开始是连续的参数
 */

Function.prototype.call_ = function (context, ...args) {
  if (typeof this != "function") {
    throw new TypeError("this is not function");
  }

  const fn = Symbol("fn");
  context = context ? Object(context) : window;
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];

  return res;
};

// --- 他人答案
Function.prototype.call$ = function (context = window, ...args) {
  if (typeof this != "function") {
    throw new TypeError("Type Error");
  }

  const fn = Symbol("fn");
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
};

//-------------------------------------------------------------------------------------

// 这个有点忘了
/**
 *  10. Function.prototype.bind()
 *  bind跟call和apply的区别在于 call/apply是立即执行函数并返回结果, bind只返回绑定了参数的函数
 *  并且bind还有this方面的问题, 一个函数使用了Bind, 当再使用call或者apply时, 绑定的还是原函数
 */

Function.prototype.bind_ = function (context, ...args) {
  const self = this;

  return function F() {
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, [...args, ...arguments]);
  };
};

//-------------------------------------------------------------------------------------

/**
 * 11. debounce(防抖)
 * 防抖主要用于当频繁发送服务器请求时, 限制发送的次数, 具体体现为有一段的吟唱时间, 在吟唱的时间内如果被打断,
 * 会重新计时, 等到时间完毕才进行执行发送请求
 * 防抖的主要场景在 搜索框出现推荐搜索, 还有 滚动条上下滑动时不会一直响应,
 *
 * 防抖返回的是一个新的函数, 这个函数里包括了防抖时间
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

/**
 * 12. throttle(节流)
 * 节流也一样用于服务器发送请求时, 节流是当一个事件触发时, 会存在一个冷却时间, 这个时间内不论怎么触发都无效
 * 直到时间完毕在进行下一次触发
 * 节流的主要场景是在 鼠标多次点击的情况下不会重复触发
 *
 * 节流也一样会返回一个新的函数, 这个函数里设定了时间
 */

// 这个版本是 触发后等待N秒后执行, 可以理解为先冷却,冷却完执行
function throttle_(fn, time) {
  let timeout = null;

  return function () {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
        timeout = null;
      }, time);
    }
  };
}

// 这个版本是 触发先执行, 然后在等待时间,  可以理解为先执行, 执行完冷却
function throttle2(fn, time) {
  let timeout = null;

  return function () {
    const context = this;

    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
      }, time);

      fn.apply(context, arguments);
    }
  };
}

//-------------------------------------------------------------------------------------

/**
 * 13. 函数柯里化
 */

//-------------------------------------------------------------------------------------

/**
 * 14. 模拟new操作
 * new中实际执行了四步, 第一步创建一个新的对象,
 * 第二步会将对象的原型指向构造函数的原型prototype
 * 第三步会使用call改变构造函数里的this指向, 指向新对象, 并且执行然后返回结果
 * 第四步是如果构造函数有返回对象, 就返回该对象, 如果没有就返回创建的这个新对象
 */

function mockNew(ctor, ...args) {
  const obj = Object.create(ctor.prototype);

  const res = ctor.call(obj, ...args);

  return res instanceof Object ? res : obj;
}
//-------------------------------------------------------------------------------------

/**
 * 15. instanceof
 * instanceof是用来判断原型链的, A instanceof B 是指 A的原型链上是否存在B, 也就是B是A的父级
 *
 * instanceof返回的是布尔值
 */

function instanceof_(objA, objB) {
  while (objA.__proto__ != null) {
    if (objA.__proto__ == objB.prototype) {
      return true;
    }
    objA = objA.__proto__;
  }
  return false;
}

console.log(instanceof_(q1Res1, Function));

// --- 他人答案

const instanceof$ = (left, right) => {
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto == null) {
      return false;
    }
    if (proto == right.prototype) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }
};

//-------------------------------------------------------------------------------------

/**
 * 16. 原型继承
 * js继承的7种方式
 *  - 原型链继承
 *  - 构造继承
 *  - 组合继承
 *  - 原型式继承
 *  - 寄生式继承
 *  - 组合寄生继承
 *  - class继承
 */

function Parent() {
  this.name = "parent";
}

function Child() {
  parent.call(this);
  this.type = "children";
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

//-------------------------------------------------------------------------------------

/**
 * 17. Object.is
 * object.is()主要用来解决  +0 === -0 应该为 false,   NaN === NaN 应该为 true
 */

const is_ = (x, y) => {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x == 1 / y;
  } else {
    return x !== x && y !== y;
  }
};

console.log(Object.is(NaN, NaN), "使用object.is");
console.log(is_(NaN, NaN), "使用is_");

//-------------------------------------------------------------------------------------

/**
 * 18. Object.assign()
 * Object.assign主要用来浅拷贝, 是将一个对象的属性拷贝到另一个对象上, 但因为是浅拷贝, 所以引用类型是共用的
 */

Object.defineProperty(Object, "assign_", {
  value: function (target, ...args) {
    if (target === null) {
      return new TypeError("cannot cover undefined or null to object");
    }

    const to = Object(target);

    for (let i = 0; i < args.length; i++) {
      const nextSource = args[i];
      if (nextSource != null) {
        for (const nextKey in nextSource) {
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

console.log(
  Object.assign_({}, { a: 123, b: [2, 1, 1] }),
  "使用Object.assign()"
);

//-------------------------------------------------------------------------------------

/**
 * 19. 深拷贝
 * 深拷贝是指一个对象的属性, 全部完整的拷贝到另一个对象上, 在内存中所表示的情况就是开辟了一个新的空间来保存所有属性,
 * 包括引用类型, 一样也会复制一份新的内容.
 */

const cloneDeep1 = (target, hash = new WeakMAp()) => {
  // 对传入的参数处理
  if (typeof target !== "object" || taregt == null) {
    return target;
  }

  // 哈希表中存在直接返回
  if (hash.has(target)) return hash.get(target);

  const cloneTarget = Array.isArray(target) ? [] : {};
  hash.set(target, cloneTarget);

  // 针对symbol属性
  const symKeys = Object.getOwnPropertySymbols(target);
  if (symKeys.length) {
    symKeys.forEach((symKey) => {
      if (typeof target[symKey] == "object" && target[symKey] != null) {
        cloneTarget[symKey] = cloneDeep1(target[symKey]);
      } else {
        cloneTarget[symKey] = target[symKey];
      }
    });
  }

  for (const i in target) {
    if (Object.prototype.hasOwnProperty.call(target, i)) {
      cloneTarget[i] =
        typeof target[i] === "object" && target[i] !== null
          ? cloneDeep1(target[i], hash)
          : target[i];
    }
  }

  return cloneTarget;
};

//-------------------------------------------------------------------------------------

/**
 * 20. Promise
 * Promise包含三种状态  pending, fufiiled, rejected
 * Promise只要是用来解决回调地狱的
 */

//-------------------------------------------------------------------------------------

/**
 * 21. Promise.all()
 * Promise.all的用处是传入的n个promise全部完成时才返回一个新的promise,
 * 如果出现一个失败的promise,返回失败的结果
 */

Promise.all_ = function (promiseArr) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let index = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
        .then((res) => {
          ans[i] = res;
          index++;
          if (index === promiseArr.length) {
            return resolve(ans);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

//-------------------------------------------------------------------------------------

/**
 * 22. Promise.race
 * race跟all类似, 传入的也是一个promise数组, 但是区别在于race是只要其中有一个promise返回, 就直接返回结果
 * 如果发生错误, 一样也是立马返回promise错误, 只要先完成的promise的结果
 */

Promise.race_ = function (promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((p) => {
      Promise.resolve(p).then(
        (val) => resolve(val),
        (err) => reject(err)
      );
    });
  });
};

//-------------------------------------------------------------------------------------

/**
 * 23. Promise并行限制
 * 并行限制指的是 在执行Promise时需要限定 promise执行的个数, 当一定数量完成时再接着执行其他任务,
 * 类似于有10个任务, 限制3个promise并行执行, 那么当3个中有一个完成时, 会接着完成第四个, 一直保持3个并行状态
 */
class Scheduler {
  constructor() {
    this.queue = [];
    this.maxCount = 2;
    this.runCounts = 0;
  }

  add(promiseCreator) {
    this.queue.push(promiseCreator);
  }

  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }

    this.runCounts++;
    this.queue
      .shift()()
      .then(() => {
        this.runCounts--;
        this.request();
      });
  }

  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

scheduler.taskStart();

//-------------------------------------------------------------------------------------

/**
 * 24. JSONP
 * JSONP是指跨域操作, 跨域的方式是通过 script标签没有同源标签, 可以从其他域中获取请求返回数据,
 * 优点是兼容性好, 但是仅限get请求
 */

const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = "";
    for (let key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  };

  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement("script");
    scriptEle.src = generateUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = (data) => {
      resolve(data);
      document.removeChild(scriptEle);
    };
  });
};

//-------------------------------------------------------------------------------------

/**
 * 25. AJAX
 * async json and xml
 * ajax主要是用来异步请求数据, 可以在不刷新页面的情况下获得服务器传来的数据
 * 本质就是使用 XMLHttpRequest()
 * xhr.open()
 * xhr.setRequestHeader()
 * xhr.onreadystatechange()
 * xhr.send()
 */

const getJSON = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200 || xhr.status == 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };

    xhr.send();
  });
};

//-------------------------------------------------------------------------------------

/***
 * 26. event模块
 */

//-------------------------------------------------------------------------------------

/**
 * 27. 图片懒加载
 * 图片懒加载是指 当页面没有滑动到图片时, 并不会立即向服务器发送请求, 而是当窗口滑动到图片的上边缘时,
 * 才开始进行发送请求获取图片资源. 所以主要是通过响应视口和滚动条获取响应信息
 * 在最开始时Img标签里会插入 data-src属性, 只有到响应时才会把 data-src属性改为 src
 */

function lazyload() {
  const imgs = document.getElementsByTagName("img");
  const len = imgs.length;

  // 获取窗口高度 和 滚动条高度
  const viewHeight = document.documentElement.clientHeight;
  const scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (let i = 0; i < len; i++) {
    // 这里获取的是图片距离顶部的位置
    const offsetHeight = imgs[i].offsetTop;
    if (offsetHeight < viewHeight - scrollHeight) {
      const src = imgs[i].dataset.src;
      imgs[i].src = src;
    }
  }
}

window.addEventListener("scroll", lazyload);

//-------------------------------------------------------------------------------------

/**
 * 28. 滚动加载
 * 本质上就是监听滚动事件, 并且判定 viewHeight, scrollHeight, scrollTop的关系
 */

window.addEventListener(
  "scroll",
  function () {
    const viewHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if (viewHeight + scrollTop >= scrollHeight) {
      // 检测到滚动到页面底部, 进行后续操作
    }
  },
  false
);

//-------------------------------------------------------------------------------------

/**
 * 29. 渲染几万条数据不卡住页面
 * 这个主要用到的是 分批插入节点片段, 而不是一瞬间将数据全部插入, 用到的方法是 createDcoumentFragment
 * 和 requestAnimationFrame
 */

setTimeout(() => {
  const total = 100000;
  const once = 20;
  const loopCount = Math.ceil(total / once);
  let countOfRender = 0;
  const ul = document.querySelector("ul");

  function add() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < once; i++) {
      const li = document.createElement("li");
      li.innerText = Math.floor(Math.random() * total);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    countOfRender += 1;
    loop();
  }

  function loop() {
    if (countOfRender < loopCount) {
      window.requestAnimationFrame(add);
    }
  }

  // loop();
}, 0);
//-------------------------------------------------------------------------------------

/**
 * 30. 打印出当前网页使用了多少种html元素
 */

const fn = () => {
  return [...new Set([...document.querySelector("*")].map((el) => el.tagName))]
    .length;
};

//-------------------------------------------------------------------------------------

/**
 * 31. 将 virtualDom 转化为 真实 DOM 结构
 * 虚拟dom是一个 对象, 保存在内存中,
 */

function render(vnode, container) {
  container.appendChild(_render(vnode));
}

function _render(vnode) {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }

  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }

  vnode.children.forEach((child) => render(child, dom));
  return dom;
}

//-------------------------------------------------------------------------------------

/**
 * 32. 字符串解析问题
 * var a = {
 *	b: 123,
 *	c: '456',
 *	e: '789',
 * }
 * var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;
 * // => 'a123aa456aa {a.d}aaaa'
 *
 * 实现函数使得将str字符串中的{}内的变量替换，如果属性不存在保持原样（比如{a.d}）
 */

const fn1 = (str, obj) => {
  let res = "";

  let flag = flase;
  let start;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{") {
      flag = true;
      start = i + 1;
      continue;
    }
    if (!flag) {
      res += str[i];
    } else {
      if (str[i] === "}") {
        flag = false;
        res += match_(str.slice(start, i), obj);
      }
    }
  }
  return res;
};

const match_ = (str, obj) => {
  const keys = str.split(".").slice(1);
  let index = 0;
  let o = obj;
  while (index < keys.length) {
    const key = keys[index];
    if (!o[key]) {
      return `{${str}}`;
    } else {
      o = o[key];
    }

    index++;
  }

  return o;
};
//-------------------------------------------------------------------------------------
