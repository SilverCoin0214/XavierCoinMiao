// 题目1:
// 理解私有属性方法和公有属性方法
// 对于构造函数来说:  用var定义的就是私有属性, 用this绑定属性的就是公有属性

function Cat(name, color) {
  var heart = "心";
  var stamch = "胃";

  var heartbeat = function () {
    console.log(heart + "跳");
  };

  this.name = name;
  this.color = color;

  this.jump = function () {
    heartbeat();
    console.log("猫跳");
  };
}

var cat = new Cat("nemo", "white");
console.log(cat);
cat.jump();

// -------------------------------------------

// 题目2:
// 理解 静态属性方法 和 公有属性方法
// 在构造函数上使用 Cat.XXX 就是静态属性和方法
// 在构造函数内使用this, 或者在构造函数的原型上绑定的方法就是 拥有属性和方法

function Cat(name, color) {
  var heart = "心";
  var stamch = "胃";

  var heartbeat = function () {
    console.log(heart + "跳");
  };

  this.name = name;
  this.color = color;

  this.jump = function () {
    heartbeat();
    console.log("猫跳");
  };
}

Cat.descript = "我是这个构造函数用来生出的一只猫";
Cat.actingCute = function () {
  console.log("卖萌");
};

Cat.prototype.cleanTheBody = function () {
  console.log("清洁身体");
};

var nemo = new Cat("nemo", "white");
console.log(Cat.descript);
Cat.actingCute();
console.log(nemo.descript);
nemo.cleanTheBody();

// 输出:
// "我是这个构造函数用来生出一只猫"
// "卖萌"
// undefined
// "清洁身体"

// ---------------------------------------------

// 题目3:
// 理解 实例自身属性 和 定义在构造函数原型对象中的属性

function Cat(name) {
  this.name = name;
}
Cat.prototype.prototypeProp = "我是构造函数原型对象上的属性";
Cat.prototype.cleanTheBody = function () {
  console.log("我会用唾液清洁身体");
};
var guaiguai = new Cat("guaiguai");
console.log(guaiguai);
console.log(guaiguai.name);
console.log(guaiguai.prototypeProp);
guaiguai.cleanTheBody();

// 结果:

// Cat {name: "guaiguai"}
// "guaiguai"
// "我是构造函数原型对象的属性"
// "我会用唾液清洁身体"

// ------------------------------------------------

// 题目4:
// for...in 可以获取到的实例自身的属性和原型链上的属性
// Object.keys() 和 Object.getOwnPropertyNames()只能获取实例对象自身的属性
// .hasOwnProperty() 方法传入属性名来判断一个属性是不是实例的自身属性
function Cat(name) {
  this.name = name;
}
Cat.prototype.prototypeProp = "我是构造函数原型对象上的属性";
Cat.prototype.cleanTheBody = function () {
  console.log("我会用唾液清洁身体");
};
var guaiguai = new Cat("guaiguai");

for (key in guaiguai) {
  if (guaiguai.hasOwnProperty(key)) {
    console.log("我是自身属性", key);
  } else {
    console.log("我不是自身属性", key);
  }
}
console.log("-分隔符-");
console.log(Object.keys(guaiguai));
console.log(Object.getOwnPropertyNames(guaiguai));

// 结果:

// "我是自身属性 name"
// "我不是自身属性 prototypeProp"
// "我不是自身属性 cleanTheBody"
// "-分隔符-"
// ["name"]
// ["name"]

// ----------------------------------------

// 题目5:

function Person(name, sex) {
  this.name = name;
  this.sex = sex;
  var evil = "我很邪恶";
  var pickNose = function () {
    console.log("我会扣鼻子但不让你看见");
  };
  this.drawing = function (type) {
    console.log("我要画一幅" + type);
  };
}

Person.fight = function () {
  console.log("打架");
};

Person.prototype.wc = function () {
  console.log("我是个人我会wc");
};

var p1 = new Person("lindaidai", "boy");

console.log(p1.name);
console.log(p1.evil);
p1.drawing("国画");
p1.pickNose();
p1.fight();
p1.wc();
Person.fight();
Person.wc();
console.log(Person.sex);

// 结果:

// "lindaidai"
// undefined
// "我要画一幅国画"
// 报错 TypeError
// 报错 TypeError
// "我是个人我会wc"
// "打架"
// 报错 TypeError
// undefined

// -----------------------------------

// 题目6:

function Cat() {
  this.color = "white";
  this.getColor = function () {
    console.log(this.color);
  };
}
Cat.prototype.color = "black";
var cat = new Cat();
cat.getColor();

// 结果:
// "white"

// --------------------------------

// 题目7:
function Cat() {
  this.color = "white";
  this.getColor = function () {
    console.log(this.color);
  };
}
Cat.prototype.color = "black";
Object.prototype.color = "yellow";
Object.prototype.feature = "cute";

var cat = new Cat();
cat.getColor();
console.log(cat);
console.log(cat.feature);

// 结果:

// "white"
// Cat {color: "white", getColor: f}
// "cute"

// ----------------------------------------------------------

/**
 *   ES6之后的封装   class
 */

// 题目1:

class Cat {
  constructor(name, color) {
    var heart = "❤️";
    var stomach = "胃";
    var heartbeat = function () {
      console.log(heart + "跳");
    };
    this.name = name;
    this.color = color;
    this.jump = function () {
      heartbeat();
      console.log("我跳起来了~来追我啊");
    };
  }
}
var guaiguai = new Cat("guaiguai", "white");
console.log(guaiguai);
guaiguai.jump();

// 结果:

// Cat {name: "guaiguai", color: "white" , jump: f}
// "心跳"
// "我跳起来了"

// ---------------------------------------

// 题目2:
// 在类的所有方法都定义在类的 prototype属性上.

class Cat {
  constructor() {
    var heart = "❤️";
    this.name = "guaiguai";
    this.jump = function () {};
  }
  color = "white";
  cleanTheBody = function () {
    console.log("我会用唾液清洁身体");
  };
  hideTheShit() {
    console.log("我在臭臭完之后会把它藏起来");
  }
}
var guaiguai = new Cat();
console.log(guaiguai);
console.log(Object.keys(guaiguai));
guaiguai.cleanTheBody();
guaiguai.hideTheShit();

// 结果:

// Cat {name:"guaiguai", jump: f, color: "white", cleanTheBody: f}
// ["color, "cleanTheBody, "name", "jump"]
// "我会用唾液清洁身体"
// "我在臭臭完之后会把它藏起来"

// --------------------------------------

// 题目3:
// 在class定义静态属性和方法
// 只要在class里的 属性和方法前 加 static

// --------------------------------------

// 题目4:
var a = new A();
function A() {}
console.log(a);

var b = new B();
class B {}
console.log(b);

// 结果

// A{}
// 报错

// 解析:  class没有提升机制, 所以报错说明未初始化

// ----------------------------------------

// 题目5:  ------ 在类中 实例的方法 里的 this 指向的也是 实例本身

class Cat {
  constructor() {
    this.name = "guaiguai";
    var type = "constructor";
  }
  type = "class";
  getType = function () {
    console.log(this.type);
    console.log(type);
  };
}

var type = "window";
var guaiguai = new Cat();
guaiguai.getType();

// 结果:
// "class"
// "window"

// ----------------------------------------

// 题目6:  ---- 这题做错了, 在类中使用 箭头函数 里的 this 指向的是实例, 而不是window

class Cat {
  constructor() {
    this.name = "guaiguai";
    var type = "constructor";
  }
  type = "class";
  getType = () => {
    console.log(this.type);
    console.log(type);
  };
}
var type = "window";
var guaiguai = new Cat();
guaiguai.getType();
console.log(guaiguai);

// 结果:

// "class"
// "window"
// Cat {name: "guaiguai", type: "class", getType: f}

// -------------------------------------------

// 题目7:  ---- 如果存在相同的属性和方法, constructor里定义的相同属性和方法会覆盖 class里定义的

class Cat {
  constructor() {
    this.name = "cat1";
  }
  name = "cat2";
  getName = function () {
    console.log(this.name);
  };
}
var cat = new Cat();
cat.getName();

// 结果:

// "cat1"

// -----------------------------------------

// 题目8:  ---- 原型对象中相同名称的属性和方法 也会被 constructor 给覆盖

class Cat {
  constructor() {
    this.name = "cat1";
  }
  name = "cat2";
  getName = function () {
    console.log(this.name);
  };
}
Cat.prototype.name = "cat3";
var cat = new Cat();
cat.getName();

// 结果:

// "cat1"

// -----------------------------------------

// 题目9:

class Cat {
  constructor() {
    this.name = "guaiguai";
    var type = "constructor";
    this.getType = () => {
      console.log(this.type);
      console.log(type);
    };
  }
  type = "class";
  getType = () => {
    console.log(this.type);
    console.log(type);
  };
}

var type = "window";
var guaiguai = new Cat();
guaiguai.getType();
console.log(guaiguai);

// 结果:

// "class"
// "constructor"
// Cat {name:"guaiguai", getType: f, type: "class"}


// ----------------------------------------------------------

1. class基本概念:

- 当使用class的时候, 它会默认调用 constructor 这个函数, 来接收一些参数, 并构造出一个新的实例对象(this)

- 如果 class 里没有 constructor, 也会隐式生成一个 constructor 方法

2. class中几种定义属性的区别:

- 在 constructor 中的 var 变量, 它只存在于 constructor 构造函数中
- 在 class 中使用 = 定义一个属性和方法, 相当于定义在实例上. 就是用 this指向
- 在 constructor 中使用this定义属性和方法会被定义到实例上
- 在class中直接定义一个方法, 相当于定义在 Class的原型上
- 在class中使用了 static 修饰符定义的属性和方法会被认为是静态方法或属性, 只有类自己可以使用

3. class本质虽然是函数, 但没有提升效果
