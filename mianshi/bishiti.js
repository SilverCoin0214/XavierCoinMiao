// 1.实现call

Function.prototype.call_ = function (context) {
  // 判断参数是否是非null或者undefined, 然后转为对象
  context = context ? Object(context) : window;

  // 把调用函数绑定到这个对象上当做它的方法
  context.fn = this;

  // 将传入的argument转换成数组然后在调用
  let args = [...arguments].slice(1);
  let result = context.fn(...args);

  // 需要把对象上这个属性给删了, 防止挂载太多无用属性
  delete context.fn;
  return result;
};

// 2.实现apply

Function.prototype.apply_ = function (obj, arr) {
  obj = obj ? Object(obj) : window;

  obj.fn = this;

  let result;
  if (!arr) {
    result = obj.fn();
  } else {
    result = obj.fn(...arr);
  }

  delete obj.fn;
  return result;
};

// 3. 实现bind

Function.prototype.bind_ = function (obj) {
  let args = [...arguments].slice(1);
  let fn = this;

  let fn_ = function () {};

  let bound = function () {
    var params = [...arguments];
    fn.apply(this.consturctor === fn ? this : obj, args.concat(params));
  };

  fn_.prototype = fn.prototype;
  bound.prototype = new fn_();

  return bound;
};

// 4. 实现new
// new过程中会新建对象, 此对象会继承构造器的原型与原型上的属性, 最后它会被作为实例返回.
let newMethod = function (constructor, ...rest) {
  let instance = {};
  instance.__proto__ = constructor.prototype;
  let result = constructor.apply(instance, rest);
  return typeof result === "object" ? result : instance;
};

function mockNew() {
  let consturctor = [].shift.call(arguments);
  let instance = {};
  instance.__proto__ = consturctor.prototype;
  let result = consturctor.apply(instance, arguments);
  return typeof result === "object" ? result : instance;
}

// 5. 实现map
// 循环遍历数组, 返回一个新的数组.
// 回调函数接受三个参数, item, index, arr

Array.prototype.map_ = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

// 6. 实现filter
// 遍历数组,返回符合条件的新数组, 如果都没有则返回一个空数组

Array.prototype.filter_ = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// 7. 实现some
// 遍历数组, 如果找到一个符合条件的元素就返回true, 如果全部不符合就返回false
Array.prototype.some_ = function (callback) {
  let result = false;

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result = true;
      return result;
    }
  }

  return result;
};

// 8. 实现every
// 遍历数组, 判断是否所有元素都符合条件, 是则返回true, 否则返回False

Array.prototype.every_ = function (callback) {
  let result = true;

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return (result = false);
    }
  }

  return result;
};

// 9. 实现find
// 在数组中查找元素, 如果找到就返回该元素, 没找到就返回undefined, 且找到后不会继续查找

Array.prototype.find_ = function (callback) {
  let result = undefined;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return result;
};

// 10. 实现forEach
// 循环遍历数组, 没有返回值

Array.prototype.forEach_ = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// 11. 实现reduce
// 初始值不传时特殊处理, 会默认使用数组的第一个元素
// 函数返回的结果会作为下一次的prev
// 接收4个参数, prev, item, index, arr

Array.prototype.reduce_ = function (callback, prev) {
  for (let i = 0; i < this.length; i++) {
    if (typeof prev === "undefined") {
      prev = this[0];
      prev = callback(prev, this[i + 1], i + 1, this);
      i++;
    } else {
      prev = callback(prev, this[i], i, this);
    }
  }

  return prev;
};

/**********************测试代码**********************/

// // call/apply 测试+++++++++++++++++++++++++++++++++++++++++++
// const name = "呀哈哈";

// function f1(a) {
//   console.log(a + this.name);
// }

// const f2 = {
//   name: "sce",
// };

// f1.call_(f2, "我是");
// f1.call_(f2);

// f1.apply_(f2, ["是我"]);
// f1.apply_(f2);

// // bind 测试++++++++++++++++++++++++++++++++++++++++++++++++++
// var obj2 = {
//   z: 1,
// };

// function fn2(x, y) {
//   console.log(x + y + this.z);
// }

// var bound = fn2.bind_(obj2, 1);
// bound(2);

// // map测试++++++++++++++++++++++++++++++++++++++++++++++++++
// let array = [1, 2, 3].map_((item) => {
//   return item * 2;
// });

// console.log(array);

// // filter测试++++++++++++++++++++++++++++++++++++++++++++++++++
// let array = [1, 2, 3].filter_((item) => {
//   return item > 2;
// });

// console.log(array); // [3]

// // some测试++++++++++++++++++++++++++++++++++++++++++++++++++
// let flag = [1, 2, 3].some_((item) => {
//   return item > 1;
// });

// console.log(flag); // true

// // every测试++++++++++++++++++++++++++++++++++++++++++++++++++
// let flag = [1, 2, 3].every_((item) => {
//   return item > 1;
// });

// console.log(flag); // false

// // find测试++++++++++++++++++++++++++++++++++++++++++++++++++

// let item = [1, 2, 3].find_((item) => {
//   return item > 1;
// });

// console.log(item); // 2

// // forEach测试++++++++++++++++++++++++++++++++++++++++++++++++++
// [1, 2, 3].forEach_((item, index, array) => {
//   // 1 0 [1, 2, 3]
//   // 2 1 [1, 2, 3]
//   // 3 2 [1, 2, 3]
//   console.log(item, index, array);
// });

// // reduce测试++++++++++++++++++++++++++++++++++++++++++++++++++

// let total = [1, 2, 3].reduce_((prev, next, currentIndex, array) => {
//   return prev + next;
// });

// console.log(total); // 6
