/***
 *   this绑定的几种方式:
 *    1. 默认绑定, 在浏览器中默认绑定指向window, 严格模式下指向undefined
 *    2. 隐式绑定, 当挂载在对象下的方法使用this时, 会把this指向该对象.
 *    3. 显示绑定, 使用call, apply, bind强制指定this的指向.
 *    4. new绑定, new绑定实际也是通过新创建的对象利用apply指向构造函数的原型
 *    5. 箭头函数绑定, this指向的是外层作用域里先能找到的指向.
 *
 */

// 试试上 this 最好的判断方式是去看 函数执行上下文, 最终谁调用它, this就指向它

// ----------------------------------------------------------------------

// 默认绑定:

// 题目1:
var a = 10;
function foo() {
  console.log(this.a);
}
foo();

// 结果:
// 10

// ------------------------------------------

// 题目2:  --- 在全局的this还是指向window的, 只有函数内的this会指向undefined

("use strict");
var a = 10;
function foo() {
  console.log("this1", this);
  console.log(window.a);
  console.log(this.a);
}
console.log(window.foo);
console.log("this2", this);
foo();

// 结果:
// f foo{}
// 'this2' window{}
// 'this1' undefined
// 10
// TypeError a 未定义

// -------------------------------------------

// 题目3:

let a = 10;
const b = 20;

function foo() {
  console.log(this.a);
  console.log(this.b);
}
foo();
console.log(window.a);

// 结果:
// undefined
// undefined
// undefined

// 解析: let和const不会挂载在window下, 所以this虽然是window但是属性不在它上面

// ------------------------------------------

// 题目4:

var a = 1;
function foo() {
  var a = 2;
  console.log(this);
  console.log(this.a);
}

foo();

// 结果:
// windoow
// 1

// -------------------------------------------

// 题目5:

var a = 1;
function foo() {
  var a = 2;
  function inner() {
    console.log(this.a);
  }
  inner();
}

foo();

// 结果:
// 1

// ----------------------------------------------------------------------

/**
 *  隐式绑定
 *
 */

// 题目1:

function foo() {
  console.log(this.a);
}
var obj = { a: 1, foo };
var a = 2;
obj.foo();

// 结果:
// 1

// 隐式绑定丢失

// 题目1:

function foo() {
  console.log(this.a);
}
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;

obj.foo();
foo2();

// 结果:
// 1
// 2

// ------------------------------------------

// 题目2:

function foo() {
  console.log(this.a);
}
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo };

obj.foo();
foo2();
obj2.foo2();

// 结果:
// 1
// 2
// 3

// -------------------------------------------

// 题目3:

function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = { a: 1, foo };
var a = 2;
doFoo(obj.foo);

// 结果:
// window
// 2

// ----------------------------------------------

// 题目4:
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = { a: 1, foo };
var a = 2;
var obj2 = { a: 3, doFoo };

obj2.doFoo(obj.foo);

// 结果:

// {a:3 , doFoo}
// 2

// -----------------------------------------------

// 题目5

("use strict");
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = { a: 1, foo };
var a = 2;
var obj2 = { a: 3, doFoo };

obj2.doFoo(obj.foo);

// 结果:

// {a: 3, doFoo}
// 报错 TypeError

// ----------------------------------------------------------------------

/**
 *   显示绑定
 *
 */

// 题目1:

function foo() {
  console.log(this.a);
}
var obj = { a: 1 };
var a = 2;

foo();
foo.call(obj);
foo.apply(obj);
foo.bind(obj);

// 结果:

// 2
// 1
// 1

// ---------------------------------

// 题目2:
function foo() {
  console.log(this.a);
}
var a = 2;
foo.call();
foo.call(null);
foo.call(undefined);

// 结果:

// 2
// 2
// 2

// -----------------------------------

// 题目3:
var obj1 = {
  a: 1,
};
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a);
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this);
      console.log(this.a);
    }, 0);
  },
};
var a = 3;

obj2.foo1();
obj2.foo2();

// 结果:

// 2
// window
// 3

// ------------------------------------

// 题目3:
var obj1 = {
  a: 1,
};
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a);
  },
  foo2: function () {
    setTimeout(
      function () {
        console.log(this);
        console.log(this.a);
      }.call(obj1),
      0
    );
  },
};
var a = 3;
obj2.foo1();
obj2.foo2();

// 结果:

// 2
// {a: 1}
// 1

// --------------------------------------

// 题目4:
var obj1 = {
  a: 1,
};
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a);
  },
  foo2: function () {
    function inner() {
      console.log(this);
      console.log(this.a);
    }
    inner();
  },
};
var a = 3;
obj2.foo1();
obj2.foo2();

// 结果:

// 2
// window
// 3
// 解析:  函数栈里先压入全局, 然后在压入this指向ojb2的foo2函数. 然后再压入this指向window的inner()函数

// --------------------------------------

// 题目5:
function foo() {
  console.log(this.a);
}
var obj = { a: 1 };
var a = 2;

foo();
foo.call(obj);
foo().call(obj);

// 结果:

// 2
// 1
// 2
// 报错 undefined不能call

// 解析: 第三个实际是 return 值为 undefined绑定了 .call(obj), 所以啥都没有

// ---------------------------------------

// 题目6:

function foo() {
  console.log(this.a);
  return function () {
    console.log(this.a);
  };
}
var obj = { a: 1 };
var a = 2;

foo();
foo.call(obj);
foo().call(obj);

// 结果:

// 2
// 1
// 2
// 1

// ----------------------------------------

// 题目7:
function foo() {
  console.log(this.a);
  return function () {
    console.log(this.a);
  };
}
var obj = { a: 1 };
var a = 2;

foo();
foo.bind(obj);
foo().bind(obj);

// 结果:

// 2
// 2

// ------------------------------------------

// 题目8:
function foo() {
  console.log(this.a);
  return function () {
    console.log(this.a);
  };
}
var obj = { a: 1 };
var a = 2;

foo.call(obj)();

// 结果:

// 1
// 2

// -------------------------------------------

// 题目9:
var obj = {
  a: "obj",
  foo: function () {
    console.log("foo:", this.a);
    return function () {
      console.log("inner:", this.a);
    };
  },
};
var a = "window";
var obj2 = { a: "obj2" };

obj.foo()();
obj.foo.call(obj2)();
obj.foo().call(obj2);

// 结果:

// 'foo:' 'obj'
// 'inner:' 'window'
// 'foo:' 'obj2'
// 'inner:' 'window'
// 'foo:' 'obj'
// 'inner:' 'obj2'

// -------------------------------------------

// 题目10:

var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a;
    return function (c) {
      console.log(this.a + b + c);
    };
  },
};
var a = 2;
var obj2 = { a: 3 };

obj.foo(a).call(obj2, 1);
obj.foo.call(obj2)(1);

// 结果:

// 3+2+1 = 6
// 2+3+1 = 6

//  ----------------------------------------------------------------------

/**
 *  显示绑定的其他用法
 */

// 题目1:

function foo1() {
  console.log(this.a);
}
var a = 1;
var obj = {
  a: 2,
};

var foo2 = function () {
  foo1.call(obj);
};

foo2();
foo2.call(window);

// 结果:

// 2
// 2

// =-----------------------------

// 题目2:

function foo1(b) {
  console.log(`${this.a} + ${b}`);
  return this.a + b;
}
var a = 1;
var obj = {
  a: 2,
};

var foo2 = function () {
  return foo1.call(obj, ...arguments);
};

var num = foo2(3);
console.log(num);

// 结果:

// '2 + 3'
// 5

// --------------------------------

// 题目3:

function foo(item) {
  console.log(item, this.a);
}
var obj = {
  a: "obj",
};
var a = "window";
var arr = [1, 2, 3];

// arr.forEach(foo, obj)
// arr.map(foo, obj)
arr.filter(function (i) {
  console.log(i, this.a);
  return i > 2;
}, obj);

// 结果:

// 1 'obj'
// 2 'obj'
// 3 'obj'

// 解析:  filter, forEach, map的第二个参数也可以绑定this

// ----------------------------------------------------------------------

/**
 *  new绑定
 *
 */

// 题目1:

function Person(name) {
  this.name = name;
}
var name = "window";
var person1 = new Person("LinDaiDai");
console.log(person1.name);

// 结果:

// 'LinDaiDai'

// -----------------------------------------

// 题目2:

function Person(name) {
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = function () {
    return function () {
      console.log(this.name);
    };
  };
}
var person1 = new Person("person1");
person1.foo1();
person1.foo2()();

// 结果:

// 'person1'
// ""

// ----------------------------------------

// 题目3:

var name = "window";
function Person(name) {
  this.name = name;
  this.foo = function () {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  };
}
var person2 = {
  name: "person2",
  foo: function () {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  },
};

var person1 = new Person("person1");
person1.foo()();
person2.foo()();

// 结果:

// 'person1'
// 'window'
// 'person2'
// 'window'

// ---------------------------------------

// 题目4:
var name = "window";
function Person(name) {
  this.name = name;
  this.foo = function () {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  };
}
var person1 = new Person("person1");
var person2 = new Person("person2");

person1.foo.call(person2)();
person1.foo().call(person2);

// 结果:

// 'person2'
// 'window'
// 'person1'
// 'person2'

// --------------------------------------------------------------------

/*****
 *
 *   箭头函数绑定
 */

// 题目1:

var obj = {
  name: "obj",
  foo1: () => {
    console.log(this.name);
  },
  foo2: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
};
var name = "window";
obj.foo1();
obj.foo2()();

// 结果:

// 'window'
// 'obj'
// 'obj'

// --------------------------------

// 题目2:

var name = "window";
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this.name);
  },
};

var obj2 = {
  name: "obj2",
  foo: () => {
    console.log(this.name);
  },
};

obj1.foo();
obj2.foo();

// 结果:

// 'obj1'
// 'window

// --------------------------------

// 题目3:

var name = "window";
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  },
};
var obj2 = {
  name: "obj2",
  foo: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
};
var obj3 = {
  name: "obj3",
  foo: () => {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  },
};
var obj4 = {
  name: "obj4",
  foo: () => {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
};

obj1.foo()();
obj2.foo()();
obj3.foo()();
obj4.foo()();

// 结果:

// 'obj1'
// 'window'
// 'obj2'
// 'obj2'
// 'window'
// 'window'
// 'window'
// 'window'

// ----------------------------------'

// 题目4:

var name = "window";
function Person(name) {
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = () => {
    console.log(this.name);
  };
}
var person2 = {
  name: "person2",
  foo2: () => {
    console.log(this.name);
  },
};
var person1 = new Person("person1");
person1.foo1();
person1.foo2();
person2.foo2();

// 结果:

// 'person1'
// 'person1'
// 'window'

// ------------------------------------

// 题目5:

var name = "window";
function Person(name) {
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  };
  this.foo2 = function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  };
  this.foo3 = () => {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  };
  this.foo4 = () => {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  };
}
var person1 = new Person("person1");
person1.foo1()();
person1.foo2()();
person1.foo3()();
person1.foo4()();

// 结果:

// 'person1'
// 'window'
// 'person1'
// 'person1'
// 'person1'
// 'window'
// 'person1'
// 'person1'

// ------------------------------------

// 题目6:

var name = "window";
var obj1 = {
  name: "obj1",
  foo1: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
  foo2: () => {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  },
};
var obj2 = {
  name: "obj2",
};
obj1.foo1.call(obj2)();
obj1.foo1().call(obj2);
obj1.foo2.call(obj2)();
obj1.foo2().call(obj2);

// 结果:

// 'obj2'
// 'obj2'
// 'obj1'
// 'obj1'
// 'window'
// 'window'
// 'window'
// 'obj2'

// ----------------------------------

/**
 *  综合题
 *
 */

// 题目1:
var name = "window";
var person1 = {
  name: "person1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },
  foo4: function () {
    return () => {
      console.log(this.name);
    };
  },
};
var person2 = { name: "person2" };

person1.foo1();
person1.foo1.call(person2);

person1.foo2();
person1.foo2.call(person2);

person1.foo3()();
person1.foo3.call(person2)();
person1.foo3().call(person2);

person1.foo4()();
person1.foo4.call(person2)();
person1.foo4().call(person2);

// 结果:

// "person1"
// "person2"
// "window"
// "window"
// "window"
// "window"
// "person2"
// "person1"
// "person2"
// "person1"

// --------------------------------

// 题目2:

var name = "window";
function Person(name) {
  this.name = name;
  (this.foo1 = function () {
    console.log(this.name);
  }),
    (this.foo2 = () => console.log(this.name)),
    (this.foo3 = function () {
      return function () {
        console.log(this.name);
      };
    }),
    (this.foo4 = function () {
      return () => {
        console.log(this.name);
      };
    });
}
var person1 = new Person("person1");
var person2 = new Person("person2");

person1.foo1();
person1.foo1.call(person2);

person1.foo2();
person1.foo2.call(person2);

person1.foo3()();
person1.foo3.call(person2)();
person1.foo3().call(person2);

person1.foo4()();
person1.foo4.call(person2)();
person1.foo4().call(person2);

// 结果:

// 'person1'
// 'person2'

// 'person1'
// 'person1'

// 'window'
// 'window'
// 'person2'

// 'person1'
// 'person2'
// 'person1'

// ------------------------------------

// 题目3:  -----------------这题做错了, 要看函数被谁调用
var name = "window";
function Person(name) {
  this.name = name;
  this.obj = {
    name: "obj",
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      return () => {
        console.log(this.name);
      };
    },
  };
}
var person1 = new Person("person1");
var person2 = new Person("person2");

person1.obj.foo1()();
person1.obj.foo1.call(person2)();
person1.obj.foo1().call(person2);

person1.obj.foo2()();
person1.obj.foo2.call(person2)();
person1.obj.foo2().call(person2);

// 结果:
// 'window'
// 'window'
// 'person2'

// 'obj'  --- 这里第一次做时出错了
// 'person2'
// 'obj'

// -----------------------------------

// 题目4:

function foo() {
  console.log(this.a);
}
var a = 2;
(function () {
  "use strict";
  foo();
})();

// 结果:

// 2
