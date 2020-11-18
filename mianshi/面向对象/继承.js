/***
 *  1. 原型链继承 -- 子类的原型是 父类的一个实例
 *  优点: 子类可以复用父类原型上的方法
 *  缺点: 父类的引用类型会被所有实例复用
 */

// 题目1:

function Parent() {
  this.name = "Parent";
  this.sex = "boy";
}
Parent.prototype.getName = function () {
  console.log(this.name);
};
function Child() {
  this.name = "child";
}
Child.prototype = new Parent();

var child1 = new Child();
child1.getName();
console.log(child1);

// 结果:

// "child"
// Child {name:"child"}

// 解析:  child1.__proto__ = Child.prototype
//       Child.prototype.constructor = Parent
//       Child.prototype.__proto__ = Parent.prototype

//--------------------------

// 题目2:

function Parent() {
  this.name = "Parent";
  this.sex = "boy";
}
Parent.prototype.getSex = function () {
  console.log(this.sex);
};
function Child() {
  this.name = "child";
}
Child.prototype = Parent.prototype;

var child1 = new Child();
child1.getSex();
console.log(child1);

// 结果:

// undefined
// Child {name:'child'}

// 解析: child1.__proto__ = Child.prototype = Parent.prototype

// --------------------------

// 题目3:

function Parent(name) {
  this.name = name;
  this.sex = "boy";
  this.colors = ["white", "black"];
}
function Child() {
  this.feature = ["cute"];
}

var parent = new Parent("parent"); // 两步合并  Child.prototype = new Parent('parent')
Child.prototype = parent;

var child1 = new Child("child1");
child1.sex = "girl";
child1.colors.push("yellow");
child1.feature.push("sunshine");

var child2 = new Child("child2");

console.log(child1);
console.log(child2);

console.log(child1.name);
console.log(child2.colors);

console.log(parent);

// 结果:

// Child {feature:["cute", "sunshine"], sex:"girl"}
// Chidl {feature:["cute"]}

// "parent"
// ["white", "black", "yellow"]

// Parent {name:"parent", sex:"boy", colors:["white", "black", "yellow"]}

// ----------------------------------------------------------------------------------

/**
 *  instanceof
 */

// 题目1:
function Parent() {
  this.name = "parent";
}
function Child() {
  this.sex = "boy";
}
Child.prototype = new Parent();
var child1 = new Child();

console.log(child1 instanceof Child);
console.log(child1 instanceof Parent);
console.log(child1 instanceof Object);

// 结果:
// true
// true
// true

// 解析: child1.__proto__ === Child.protype
// Child.prototype.__proto__ === Parent.prototype
// Parent.prototype.__proto__ === Object.prototype

// 题目2:

function Parent() {
  this.name = "parent";
}
function Child() {
  this.sex = "boy";
}
Child.prototype = new Parent();
var child1 = new Child();

console.log(Child.prototype.isPrototypeOf(child1));
console.log(Parent.prototype.isPrototypeOf(child1));
console.log(Object.prototype.isPrototypeOf(child1));

// 结果:

// true
// true
// true

// -------------------------------------------------------------------

/***
 *  构造继承
 *  优点:  子类能够向父类传参, 父类的引用类型不会被实例共享,
 *  缺点:  子类只能继承父类的属性和方法, 无法继承父类原型的属性和方法. 因此函数无法复用.
 */
// ---------------------------------
// 题目1:

function Parent(name) {
  this.name = name;
}
function Child() {
  this.sex = "boy";
  Parent.call(this, "child");
}
var child1 = new Child();
console.log(child1);

// 结果:

// Child {sex: 'boy', name: 'child'}

// ---------------------------------
// 题目2:

function Parent(name) {
  this.name = name;
}
function Child() {
  this.sex = "boy";
  Parent.call(this, "good boy");
  this.name = "bad boy";
}
var child1 = new Child();
console.log(child1);

// 结果:

// Child {sex: 'boy', name:'bad boy'}

// ---------------------------------
// 题目3:

function Parent(name, sex) {
  this.name = name;
  this.sex = sex;
  this.colors = ["white", "black"];
}
function Child(name, sex) {
  Parent.call(this, name, sex);
}
var child1 = new Child("child1", "boy");
child1.colors.push("yellow");

var child2 = new Child("child2", "girl");
console.log(child1);
console.log(child2);

// 结果:

// Child {name: 'child1', sex:'boy', color: ['white', 'black', 'yellow']}
// Child {name: 'child2', sex:'girl', color: ['white', 'black']}

// ---------------------------------
// 题目4:
// 构造函数继承等于只是复制了父类的函数后立即执行, 对于父类的原型, 子类的原型并没有指向父类的原型.

function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  console.log(this.name);
};
function Child() {
  this.sex = "boy";
  Parent.call(this, "good boy");
}
Child.prototype.getSex = function () {
  console.log(this.sex);
};
var child1 = new Child();
console.log(child1);
child1.getSex();
child1.getName();

// 结果:

// Child {sex: 'boy', name: "good boy"}
// 'boy'
// 错误  TypeError

// -----------------------------------

// 题目5:

function Parent(name) {
  this.name = name;
}
function Child() {
  this.sex = "boy";
  Parent.call(this, "child");
}
var child1 = new Child();

console.log(child1);
console.log(child1 instanceof Child);
console.log(child1 instanceof Parent);
console.log(child1 instanceof Object);

// Child {sex:'boy', name:'child'}
// true
// false
// true

// ---------------------------------------------------------------------------

/**
 *  3. 组合继承
 *
 */

// 题目1:

var child1 = new Child("child1");
var parent1 = new Parent("parent1");
console.log(child1); // Child{ name: 'child1', sex: 'boy' }
console.log(parent1); // Parent{ name: 'parent1' }
child1.getName(); // 'child1'
child1.getSex(); // 'boy'
parent1.getName(); // 'parent1'
parent1.getSex(); // Uncaught TypeError: parent1.getSex is not a function

// 结果:

function Parent(name) {
  this.name = name;
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name) {
  this.sex = "boy";
  Parent.call(this, name);
}

Child.prototype = new Parent(); // 一定得是先返回一个新的Parent实例才行

Child.prototype.getSex = function () {
  console.log(this.sex);
};

// -----------------------------------
// 题目2

function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name) {
  this.sex = "boy";
  Parent.call(this, name);
}
Child.prototype = new Parent();
Child.prototype.getSex = function () {
  console.log(this.sex);
};

var child1 = new Child("child1");
var parent1 = new Parent("parent1");
console.log(child1.constructor);
console.log(parent1.constructor);

// 结果:
// Parent
// Parent

// 解析:
// child1.__proto__ === Child.prototype
// Child.prototype.__proto__ === Parent.prototype
// Child.prototype.constructor === Parent

// -----------------------------------
// 题目3

var a;
(function () {
  function A() {
    this.a = 1;
    this.b = 2;
  }
  A.prototype.logA = function () {
    console.log(this.a);
  };
  a = new A();
})();

a.logA();

// 结果:

// 1

// -----------------------------------------------------
// 题目4:

function Parent(name, colors) {
  this.name = name;
  this.colors = colors;
}
Parent.prototype.features = ["cute"];
function Child(name, colors) {
  this.sex = "boy";
  Parent.apply(this, [name, colors]);
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child("child1", ["white"]);
child1.colors.push("yellow");
child1.features.push("sunshine");
var child2 = new Child("child2", ["black"]);

console.log(child1);
console.log(child2);
console.log(Child.prototype);

console.log(child1 instanceof Child);
console.log(child1 instanceof Parent);

// 结果:

// Child {sex:"boy", name: "child1", colors: ["white", "yellow"]}
// Child {sex:"boy", name:"child2", colors:["black"]}
// Parent {name: undefined, colors: undefined, constructor: f Child}

// true
// true

// --------------------------------------------------------

// 题目5:

function Parent(name) {
  console.log(name); // 这里有个console.log()
  this.name = name;
}
function Child(name) {
  Parent.call(this, name);
}
Child.prototype = new Parent();
var child1 = new Child("child1");

console.log(child1);
console.log(Child.prototype);

// 结果:
// undefined
// "child1"
// Child {name: "child1"}
// Parent {name:undefined}

// ---------------------------------------------------------

// 题目6:

function Parent(name, colors) {
  this.name = name;
  this.colors = colors;
}
Parent.prototype.features = ["cute"];

function Child(name, colors) {
  Parent.apply(this, [name, colors]);
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child("child1", ["white"]);
child1.colors.push("yellow");
child1.features.push("sunshine");
var child2 = new Child("child2", ["black"]);

console.log(child1.colors);
console.log(child2.colors);
console.log(child1.features);
console.log(child2.features);

// 结果:

// ['white', 'yellow']
// ['black']
// ['cute', 'sunshine']
// ['cute', 'sunshine']

// ---------------------------------------------------------------

/***
 *   组合寄生继承
 */

function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name) {
  this.sex = "boy";
  Parent.call(this, name);
}
// 与组合继承的区别
Child.prototype = Object.create(Parent.prototype);

var child1 = new Child("child1");

console.log(child1);
child1.getName();

console.log(child1.__proto__);
console.log(Object.create(null));
console.log(new Object());

// 结果:

// Child {sex:'boy', name: 'child1'}
// 'child1'
// Child.prototype
// {}
// Object {}

// -------------------------------------------------------------

/**
 *   原型式继承
 */

// 题目1:

var cat = {
  heart: "❤️",
  colors: ["white", "black"],
};

var guaiguai = Object.create(cat);
var huaihuai = Object.create(cat);

console.log(guaiguai);
console.log(huaihuai);

console.log(guaiguai.heart);
console.log(huaihuai.colors);

// 结果:

// {}
// {}

// '心'
// ['white', 'black']

// ----------------------------------------------------------------

/**
 *  寄生式继承
 */

var cat = {
  heart: '❤️',
  colors: ['white', 'black']
}
function createAnother (original) {
    var clone = Object.create(original);
    clone.actingCute = function () {
      console.log('我是一只会卖萌的猫咪')
    }
    return clone;
}
var guaiguai = createAnother(cat)
var huaihuai = Object.create(cat)

guaiguai.actingCute()
console.log(guaiguai.heart)
console.log(huaihuai.colors)
console.log(guaiguai)
console.log(huaihuai)

// 结果:

// '我是一只会卖萌的猫咪'
// '心'
// ['white', 'black']
// {actingCute: f}
// {}


// ----------------------------------------------------------------------

/**
 *  class继承
 */

// 题目1:

class Parent {
  constructor (name) {
    this.name = name
  }
  getName () {
    console.log(this.name)
  }
}
class Child extends Parent {
  constructor (name) {
    super(name)
    this.sex = 'boy'
  }
}
var child1 = new Child('child1')
console.log(child1)
child1.getName()

console.log(child1 instanceof Child)
console.log(child1 instanceof Parent)

// 结果:

// Child {sex:'boy', name:'name'}
// 'child1'
// true
// true

// --------------------------------------------

// 题目2:

class Parent {
  constructor (name) {
    this.name = name
  }
  getName () {
    console.log(this.name)
  }
}
class Child extends Parent {
  // constructor (name) {
  //   super(name)
  //   this.sex = 'boy'
  // }
  sex = 'boy' // 实例属性sex放到外面来
}
var child1 = new Child('child1')
console.log(child1)
child1.getName()

// 结果:

// Child {sex:'boy', name:'child1'}
// "child1"

// -----------------------------------------------

// 题目3:

class Parent {
  constructor () {
    this.name = 'parent'
  }
}
class Child extends Parent {
  constructor () {
    // super(name) // 把super隐去
  }
}
var child1 = new Child()
console.log(child1)
child1.getName()

// 结果:

// 报错

// -----------------------------------------------

// 题目4:

class Parent {
  constructor () {
    console.log(new.target.name)
  }
}
class Child extends Parent {
  constructor () {
    var instance = super()
    console.log(instance)
    console.log(instance === this)
  }
}
var child1 = new Child()

var parent1 = new Parent()

console.log(child1)
console.log(parent1)

// 结果:

// Child
// true
// Chlid {}

// Parent
