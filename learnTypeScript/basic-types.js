var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var idDone = true;
var age = 123;
var binaryNumber = 15;
var firstName = 'hello';
var u = undefined;
var n = null;
// undefined和null都是其他的子类型, 不会提示错误
var num = undefined;
var str = null;
// 声明为any之后就相当于没定义类型, 跟JS中一样
var notSure = 4;
notSure = 'string';
notSure = true;
notSure.myName;
// 联合类型, 只需要在定义类型的位置加 | 标识
var numOrString = 'lalala';
numOrString = 123;
numOrString = '字符串和数字都不会提示错误, 但其他类型会';
//-----------------------------------------------------------------------------
// 定义数组就是在定义位置加类型然后在加上[]标识
var arrOfNumbers = [1, 2, 3, 4];
var arrOfString = ['2', 'lalala'];
// 元组 -- 是限定了数据类型的数组, 并且定义了每个元素是什么类型
var tuple = ['只能是字符串', 124, 2123];
var silver = {
    id: 123981942,
    name: 'sce',
    age: 12,
    sex: 'male'
};
//-----------------------------------------------------------------------------
// 函数声明 : 函数的类型定义就是加载参数后面, 返回是加在括号后面, 可选参数只能放在最后
function add(x, y, z) {
    if (typeof z === 'number') {
        return x + y + z;
    }
    return x + y;
}
// 参数添加默认值
function add2(x, y, z) {
    if (z === void 0) { z = 10; }
    return x + y + z;
}
var result = add(43, 3);
var r2 = add2(23, 123);
// 函数表达式:
var add3 = function (x, y, z) {
    if (z === void 0) { z = 10; }
    if (typeof z === 'number') {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
var add4 = add3;
//-----------------------------------------------------------------------------
// 类, 使用到的属性需要提前定义, 修饰符定义后可以让类有公有,私有,子类可以继承,或者readonly的属性和方法
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.age = 2; // 私有,只有自己访问的到
        this.life = 20; // 可以在实例上访问到, 但不能修改
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    Animal.categoies = ['bird', 'mammal']; // static静态属性,是类自己属性,实例不可访问
    return Animal;
}());
var snake = new Animal('lily');
console.log(snake.name);
console.log(snake.run());
// 继承
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " is barking";
    };
    return Dog;
}(Animal));
var ddg = new Dog('nemo');
console.log(ddg.bark());
console.log(ddg.run());
// 多态, 覆盖父类方法
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.run = function () {
        return 'gogogo!' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var mew = new Cat('mao');
console.log(mew.run());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function () { };
    return Car;
}());
var Cellphone = /** @class */ (function () {
    function Cellphone() {
    }
    Cellphone.prototype.switchRadio = function () { };
    Cellphone.prototype.checkBatteryStatus = function () { };
    return Cellphone;
}());
console.log("DOWN" /* Down */);
var value = 'UP';
if (value === "UP" /* Up */) {
    console.log('gogogo');
}
//-----------------------------------------------------------------------------
// 泛型 ---
function echo(arg) {
    return arg;
}
var res = echo('123');
var num3 = echo(123);
var bool = echo(true);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result3 = swap(['string', 123]);
console.log(result3);
