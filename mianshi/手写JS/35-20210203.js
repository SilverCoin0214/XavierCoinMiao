// https://juejin.cn/post/6870043180444680200#heading-32

//-------------------------------------------------------------------------------------
/**
 * 20. 使用ES5实现类的继承
 * 类的继承有7种
 * 1. 原型链继承
 * 2. 构造函数继承
 * 3. 组合继承
 * 4. 原型式继承
 * 5. 寄生式继承
 * 6. 组合寄生继承
 * 7. class继承
 */

// 1. 原型链继承

function Parent() {
  this.name = "sce";
}

Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child() {
  this.age = 18;
}

Child.prototype = new Parent();

let child = new Child();
child.sayName();

//-------------------------------------------------------------------------------------

/**
 * 21. 实现数组扁平化
 * 将一个多维数组变成一维数组
 */

const arr = [1, [2, 3, [4, 5]]];

// 1. 使用内置 函数 flat

const flat1 = arr.flat(Infinity);
console.log(flat1);

// 2. 使用递归, 碰到数组就拆解

const flat2 = (arr) => {
  let res = [];

  const recursion = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        recursion(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  };

  recursion(arr);

  return res;
};

console.log(flat2(arr));

// 3. 使用 reduce
const flat3 = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev.concat(curr instanceof Array ? flat3(curr) : curr);
  }, []);
};

console.log(flat3(arr));

// 4. 迭代 + 扩展运算符

const flat4 = (arr) => {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }

  return arr;
};

console.log(flat4(arr));

//-------------------------------------------------------------------------------------

/***
 * 22. 实现数组去重
 */

let ary = ["banana", "apple", "orange", "lemon", "apple", "lemon"];

// 1. set是最快最好用的去重方式, 扩展运算符+Set 或者 Array.from + Set
let res1 = [...new Set(ary)];
let res11 = Array.from(new Set(ary));
console.log(res1);
console.log(res11);

// 2. 使用 filter
let res2 = ary.filter((item, index, arr) => {
  return arr.lastIndexOf(item) == index;
});
console.log(res2);

// 3. 使用 indexOf 和 lastIndexOf

// 4. 使用 forEach
let res4 = (arr) => {
  let res = [];

  arr.forEach((item, index, arr) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });

  return res;
};

console.log(res4(ary));

// 5. 使用 Reduce
let res5 = (arr) => {
  return arr.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    []
  );
};

console.log(res5(ary));

//-------------------------------------------------------------------------------------

/**
 * 23. 实现数组的取交集, 并集和差集
 */

// 1. 取交集
let a = [1, 2, 2, 3];
let b = [2, 2, 4, 5];

let intersection = (a, b) => {
  let res = [];
  let map = {};

  for (let i of a) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i] = map[i] + 1;
    }
  }

  for (let i of b) {
    if (map[i]) {
      map[i]--;
      res.push(i);
    }
  }

  return res;
};

console.log(intersection(a, b));

// 1.1 使用 includes
let intersection2 = a.filter((item) => b.includes(item));
console.log(intersection2);

// 1.2 使用 indexOf
let intersection3 = a.filter((item) => b.indexOf(item) > -1);
console.log(intersection3);

// 2. 取并集

// 2.1 合并后使用 Set 去重
let union1 = [...new Set(a.concat(b))];
console.log(union1);

// 2.2 使用 includes
let union2 = a.concat(b.filter((item) => !a.includes(item)));
console.log(union2);

// 3. 取差集

// 3.1 使用 includes
let diff = a.concat(b).filter((item) => !a.includes(item) || !b.includes(item));
console.log(diff);

// 3.2 使用 indexOf
let diff2 = a
  .filter((item) => b.indexOf(item) == -1)
  .concat(b.filter((item) => a.indexOf(item) == -1));
console.log(diff2);

//-------------------------------------------------------------------------------------

// 不是自己写出来的, 需要之后研究 设计模式
/**
 * 24. 实现发布订阅模式
 * 发布订阅模式分两个部分 on, emit, 发布和订阅之间没有依赖关系. 发布者告诉第三方发生了改变, 第三方再通知订阅者
 *
 * on: 就是把一些函数维护到数组中
 * emit: 就是让数组中的函数依次执行
 */

// let fs = require("fs");

// let event = {
//   arr: [],
//   on(fn) {
//     this.arr.push(fn);
//   },
//   emit() {
//     this.arr.forEach((fn) => fn());
//   },
// };

// event.on(function () {
//   console.log("读取了一个内容");
// });

// event.on(function () {
//   if (Object.keys(school).length === 2) {
//     console.log("读取完毕");
//   }
// });

// let school = {};
// fs.readFile("./name.txt", "utf8", function (err, data) {
//   school.name = data;
//   event.emit();
// });

// fs.readFile("./age.txt", "utf8", function (err, data) {
//   (school.age = data), event.emit();
// });

//-------------------------------------------------------------------------------------

/**
 * 25. 实现观察者模式
 * 观察者模式是基于发布订阅模式的, 分为 观察者 和 被观察者. 需要被观察者先收集观察者,
 * 当被观察者的状态改变时通知观察者,  观察者和被观察者之间存在关系, 被观察者数据发生变化时直接通知观察者改变
 */

class Subject {
  constructor(name) {
    this.name = name;
    this.state = "开心的";
    this.observer = [];
  }

  attach(o) {
    this.observer.push(o);
  }

  setState(newState) {
    this.state = newState;
    this.observer.forEach((o) => o.update(this));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(baby) {
    console.log(
      "当前" + this.name + "被通知了, 当前的小宝宝状态是: " + baby.state
    );
  }
}

let baby = new Subject("宝宝");
let father = new Observer("爸爸");
let mother = new Observer("妈妈");

baby.attach(father);
baby.attach(mother);
baby.setState("我饿了");

//-------------------------------------------------------------------------------------

/**
 * 26. 实现单例模式
 * 单例模式是指全局有且仅有一个实例, 并提供一个可以访问它的全局访问点.
 */

// 1. 常规实现:
function CreateSingleton(name) {
  this.name = name;
  this.getName();
}

CreateSingleton.prototype.getName = function () {
  console.log(this.name);
};

let Singleton = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new CreateSingleton(name);
    }
    return instance;
  };
})();

let singleA = new Singleton("a");
let singleB = new Singleton("b");

console.log(singleA == singleB);

// 2. 用闭包和proxy属性拦截实现
const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (!this.instance) {
        this.instance = new target(...argumentsList);
      }
      return this.instance;
    },
  });
};

class Myclass {
  constructor(msg) {
    this.msg = msg;
  }

  printMsg() {
    console.log(this.msg);
  }
}

mySingletonClass = singletonify(Myclass);

const myObj = new mySingletonClass("first");
myObj.printMsg();
const myObj2 = new mySingletonClass("second");
myObj2.printMsg();

//-------------------------------------------------------------------------------------

/**
 * 27. 实现 Promise
 */
//-------------------------------------------------------------------------------------

/**
 * 28. 实现深拷贝
 */

//-------------------------------------------------------------------------------------

/**
 * 29. 手写字符串转二进制
 */

function stringToBinary(text) {
  let code = "";
  for (let i of text) {
    // 这一步转二进制, 先找到 ASCII然后使用 toString(2)变成 二进制
    let number = i.charCodeAt().toString(2);

    for (let a = 0; a <= 8 - number.length; a++) {
      number = 0 + number;
    }
    code += number;
  }

  return code;
}

console.log(stringToBinary("a"));

//-------------------------------------------------------------------------------------

/**
 * 30. 手写二进制转base64
 * 将二进制每 6bit 替换成一个 base64字符
 */

function binaryTobase64(code) {
  let base64Code =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let res = "";

  if (code.length % 24 === 8) {
    code += "0000";
    res += "==";
  }

  if (code.length % 24 === 16) {
    code += "00";
    res += "=";
  }

  let encode = "";
  for (let i = 0; i < code.length; i++) {
    let item = code.slice(i, i + 6);
    encode += base64Code[parseInt(item, 2)];
  }

  return encode + res;
}

//-------------------------------------------------------------------------------------

/**
 * 31. 手写字符转base64
 */

let encodedData = window.btoa("this is a example");
console.log(encodedData);

let decodeData = window.atob(encodedData);
console.log(decodeData);

//-------------------------------------------------------------------------------------

/***
 * 32. 实现一个 sleep 函数
 */

// ES5
function sleep(callback, time) {
  if (typeof callback == "function") {
    setTimeout(callback, time);
  }
}

function output() {
  console.log("es5 1秒");
}

sleep(output, 1000);

// promise
const sleepP = (time) => {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
};

sleepP(2000).then(() => {
  console.log("promise 2秒");
});

// async
function sleepA(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

async function outputA() {
  let out = await sleepA(3000);
  console.log("async 延迟3秒");
  return out;
}

outputA();

// Generator
function* sleepGenerator(time) {
  yield new Promise((resolve, reject) => setTimeout(resolve, time));
}

sleepGenerator(4000)
  .next()
  .value.then(() => console.log("generator 4秒"));

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
