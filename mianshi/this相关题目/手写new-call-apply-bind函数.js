// 手写new

function mockNew(ctor, ...args) {
  const obj = Object.create(ctor.prototype);

  const res = ctor.apply(obj, args);

  const isObject = typeof res === "object" && res !== "null";
  const isFunction = typeof res === "function";
  return isObject || isFunction ? res : obj;
}

// -----------------------------------------------------
// 手写call
// ES6版本
Function.prototype.call_ = function (context, ...args) {
  const context = context || window;
  let fn = Symbol();
  context[fn] = this;

  let result = context[fn](...args);

  delete context[fn];

  return result;
};

// ES5版本
Function.prototype.call_ES5 = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }

  var result = eval("context.fn(" + args + ")");

  delete context.fn;

  return result;
};

Fucntion;

// -----------------------------------------------------
// 手写apply

Fucntion.prototype.apply_ = function (context, args) {
  const context = context || window;

  let fn = Symbol("fn");
  context[fn] = this;

  let result = context[fn](...args);

  delete context[fn];

  return result;
};

// 手写bind

Function.prototype.bind_ = function (context, ...args) {
  let self = this;

  return function F() {
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }

    return self.apply(context, [...args, ...arguments]);
  };
};

// 手写new

// new实现的四个步骤:
// 1. 先创建一个新的对象,  并链接到构造函数的原型
// 2. 使用apply改变构造函数里的this指向, 指向这个对象,
// 3. 优先返回函数返回的对象, 如果没有返回引用类型, 那就返回新建的obj

function createNew() {
  var Con = [].shift.call(arguments);
  var obj = Object.create(con.prototype);
  var result = Con.apply(obj, arguments);
  return result instanceof Ojbect ? result : obj;
}

// 手写call

// ES6版本
Function.prototype.call3 = function (context) {
  context =
    context !== null && context !== undefined ? Ojbect(context) : window;
  let fn = Symbol();
  context[fn] = this;

  let args = [...arguments].slice(1);
  let result = context[fn](...args);

  delete context[fn];

  return result;
};

// 手写apply

Function.prototype.apply3 = function (context, arr) {
  context = context ? Object(context) : window;
  let fn = Symbol();
  context[fn] = this;

  let result = arr ? context[fn](...arr) : context[fn]();

  delete context[fn];

  return result;
};

// 手写bind

Function.prototype.bind3 = function (context) {
  let self = this;
  let args = Array.prototype.slice.call(arguments, 1);

  let fBound = function () {
    var innerArgs = Array.prototype.slice.call(arguments);

    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(innerArgs)
    );
  };

  let fNOP = function () {};
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
};
