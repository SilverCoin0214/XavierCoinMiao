/***
 *  代理模式
 *  定义: 代理模式是为了一个对象提供一个代用品或占位符, 以便控制对它的访问.
 *
 *  在js中最常用到的是虚拟代理和缓存代理. 虚拟代理可以理解为惰性代理, 就是在需要时再处理. 缓存代理则是避免重复计算
 *  在ES6中直接可以使用 proxy
 */

// 虚拟代理 -- 图片预加载

// const myImage = () => {
//   let imgNode = document.createElement("img");
//   document.body.appendChild(imgNode);

//   return {
//     setSrc: function (src) {
//       imgNode.src = src;
//     },
//   };
// };

// const proxyImage = () => {
//   let img = new Image();
//   img.onload = function () {
//     myImage().setSrc(this.src);
//   };

//   return {
//     setSrc: function (src) {
//       myImage().setSrc("本地图片");
//       img.src = src;
//     },
//   };
// };

// proxyImage().setSrc("网络图片");

// 缓存代理 -- 缓存计算

const mult = (...args) => {
  let res = 1;
  for (let i = 0, len = args.length; i < len; i++) {
    res *= args[i];
  }

  return res;
};

const plus = (...args) => {
  let res = 0;
  for (let i = 0, len = args.length; i < len; i++) {
    res += args[i];
  }
  return res;
};

const proxyFactory = (fn) => {
  const cache = {};

  return function (...args) {
    if (args in cache) {
      return cache[args];
    }

    cache[args] = fn.apply(this, [...args]);

    return cache[args];
  };
};

let proxyMult = proxyFactory(mult);
let proxyPlus = proxyFactory(plus);

console.log(proxyMult(1, 2, 3, 4));
console.log(proxyMult(1, 2, 3, 4));
console.log(proxyPlus(1, 2, 3, 4));
console.log(proxyPlus(1, 2, 3, 4));

// proxy

const person = {
  name: "sce",
  phone: 123456,
  price: 1000000,
};

const agent = new Proxy(person, {
  get: function (target) {
    console.log("转接phone 654321");
  },
  set: function (target, key, value) {
    if (key == "price") {
      if (value < target.pricec) {
        throw new Error("价格太低");
      }
      target.price = value;
    }
  },
});

agent.phone;
agent.price = 1000;
