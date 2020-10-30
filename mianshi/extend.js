/**
 * 1. 原型链继承--缺点: 引用属性会被所有实例共享, 子类构建实例不能向父类传递参数
 *              优点: 函数复用
 *
 */

function Person(name, age) {
  this.name = name;
  this.arr = [1, 2, 3];
}

function Student(name) {
  this.name = name;
}

Student.prototype = new Person();

const stu = new Student("sce");

// Student.prototype.__proto__ === Person.prototype
// 所以实质情况是 Student.prototype -> Person.prototype
// Student.prototype.constructor === Person
// stu.__proto__ === Student.prototype
// stu.constructor === Student

/**
 * 2. 构造函数继承--缺点: 函数也是引用类型, 方法无法共享
 *                优点: 避免引用类型的属性共享, 可以传参
 */

function Person2() {
  this.arr = [1, 2, 3];
}

function Student2() {
  Person2.call(this); //相当于复制了一遍
}

const stu1 = new Student2();
const stu2 = new Student2();
stu1.arr.push(4);

// stu1.__proto__ === Student.prototype
// stu1.constructor === Student2 ---> Person.call(this)里的this绑定为stu1

/**
 *  3. 组合继承 -- 缺点: 调用了两次父类的构造函数, 性能浪费
 *                优点: 融合原型链继承和构造函数继承的优点
 */

function Person3() {
  this.arr = [1, 2, 3];
}

Person3.prototype.say = function () {};

function Student3() {
  Person3.call(this); // 继承属性
}

Student3.prototype = new Person3(); // 继承方法

const stu3 = new Student3();

// stu3.__proto__ === Student3.prototype  === Person3.prototype
// stu3.constructor === Student3  ---> this绑定为stu3

/**
 * 4. 原型式继承-- 缺点: 引用属性共享,不能传参
 * Object.create()的写法就是这个, 对象关联对象
 */

function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

const person4 = {
  name: "sce",
  arr: [1, 2, 3],
};

const stu4 = create(person4);
stu4.arr.push(4);
const stu44 = create(person4);

// stu4.__proto__ === F.prototype === person4

/**
 *  5. 寄生式继承 --- 缺点: 还是引用共享属性,不能传参,且增加的方法无法复用
 *                  优点: 增强对象
 */

function createPlus(proto) {
  function F() {}
  F.prototype = proto;
  let f = new F();

  f.say = function () {
    console.log("hi");
  };
  return f;
}

const person5 = {
  name: "zaj",
  arr: [1, 2, 3],
};

const stu5 = createPlus(person5);
stu5.arr.push(5);
const stu55 = createPlus(person5);

// stu5.__proto__ === F.prototype === person5

/**
 *  6.寄生组合继承   优点: 函数复用, 引用类型不会共享, 父类只被调用一次
 *
 */

function inherit(subType, superType) {
  let prototype = create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function Person6(name) {
  this.name = name;
  this.arr = [1, 2, 3];
}

Person6.prototype = function say() {
  console.log("good");
};

function Student6(name, age) {
  Person6.call(this, name);
  this.age = age;
}

inherit(Student6, Person6);

const stu6 = new Student6();

// Student6.__proto__ === F.prototype === superType.prototype(Person6.prototype)
// F.prototype.consructor = Student6
// Student6.prototype = F.prototype

/**
 *  7. class继承
 *
 */

class A {}

class B extends A {
  consturctor() {
    super();
  }
}

class A {}
class B {}

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
};

Object.setPrototypeOf(B.prototype, A.prototype);
Object.setPrototypeOf(B, A);
