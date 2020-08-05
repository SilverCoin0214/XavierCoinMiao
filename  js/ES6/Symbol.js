// 1. 为什么要引入Symbol?
//    因为在ES5中对象的属性名都是字符串, 所以当要对一个他人的对象添加新方法的时候, 容易造成已有的方法名和新加名冲突.
//    Symbol能够保证所有属性的名字都是独一无二的.
//    用最简单的话说就是防止命名冲突.

// 2. Symbol是什么东西? 有什么用?
//    Symbol是JS新加的原始类型, 也就是之后的第七种7类型. 跟string, boolean同级.

// 3. Symbol函数前为什么不能使用new命令?
//    Symbol函数是一个原始类型, 它不是对象.不能添加属性. 它是一个类字符串的数据类型.

// 4. Symbol加了相同的参数后能相等么, 什么方式才能让两个Symbol类型相等?
//    不能,即使是相同的参数Symbol类型的值也是不相等的, 只有调用Symbol.for()里加上相同的参数名,二者才相等.

// 5. Symbol作为属性名应该怎么遍历?
//    需要使用Object.getOwnPropertySymbols()方法来获取

/* -------------------------------------------------------------------------- */


/* symbol基本概况-------------------------------------------- */


// 此时s就是独一无二的值
let s = Symbol();

console.log(typeof s); // "symbol"

/* -------------------------------------------- */

var s1 = Symbol("foo");
var s2 = Symbol("bar");

s1; // Symbol(foo)
s2; // Symbol(bar)

s1.toString(); // "Symbol(foo)"
s2.toString(); // "Symbol(bar)"

// 当Symbol传入的是一个对象, 那么它会调用的对象的toString方法作为参数名
const obj = {
  toString() {
    return "abc";
  },
};

const sym = Symbol(obj);
sym; // 输出的是 Symbol(abc)

/* -------------------------------------------- */

// Symbol内即使是参数相同, 它们也是不相等的. 是两个变量.
var s1 = Symbol();
var s2 = Symbol();

s1 === s2; // false

var s1 = Symbol("foo");
var s2 = Symbol("foo");

s1 === s2; // false

/* -------------------------------------------- */

// Symbol值不能与其他类型的值进行运算, 否则会报错.

var sym = Symbol("My Symbol");

console.log("My symbol is " + sym); //TypeError: Cannot convert a Symbol value to a string

/* -------------------------------------------- */

// Symbol的值可以显示的转为字符串,也可以转为布尔值.

var sym = Symbol("My symbol");

String(sym); // "Symbol(My symbol)"
sym.toString(); // "Symbol(My symbol)"

var sym = Symbol();
Boolean(sym); // true
!sym; // false

/* symbol作为属性名 -------------------------------------------- */

// symbol作为属性名的写法
var mysymbol = Symbol();
var a = {};
a[mysymbol] = "hello!";

var a = {
  [mysymbol]: "hello!",
};

/* -------------------------------------------- */

// Symbol值作为对象属性名时不能用点运算符.
var mysymbol = Symbol();
var a = {};

a.mysymbol = "Hello!";
a[mysymbol];
a["mysymbol"];

/* -------------------------------------------- */

// 在对象内部, 使用symbol值定义属性时, symbol值必须放在括号内.

let s = Symbol();

let obj = {
  [s]: function (arg) {
    console.log(arg);
  },
};

// 增强的对象写法, 可以省略function
let obj = {
  [s](arg) {
    console.log(arg);
  },
};

obj[s](123);

/* -------------------------------------------- */

// Symbol类型还可以定义一组常量, 保证常量的值都是不对等的. 并且这么做的好处在于, 其他任何值不可能有相同的值了. 可以保证代码的按照设计的方式工作.
const COLOR_RED = Symbol("red");
const COLOR_GREEN = Symbol("green");

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error("Undefined Color");
  }
}

/* -------------------------------------------- */

// symbol作为属性名, 属性不出现在for in, for of循环中, 也不会被Object.keys(), Object.getOwnPropertNames()返回.
// 对象的所有symbol属性名可以由 Object.getOwnProperSymbols方法获取.

var obj = {};
var a = Symbol("a");
var b = Symbol("b");
obj[a] = "Hello";
obj[b] = "World";

var objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols; // [Symbol(a), Symbol(b)]

/* -------------------------------------------- */

// 有一个新的API, Reflect.ownKeys方法可以返回所有类型的键名, 包括常规键名和symbol键名.
let obj = {
  [Symbol("my_key")]: 1,
  enum: 2,
  nonEnum: 3,
};

Reflect.ownKeys(obj); // ["enum", "nonEnum", Symbol(my_key)]

/* Symbol.for() 和 symbol.keyFor()-------------------------------------------- */

// Symbol.for()接受一个字符串作为参数, 然后搜索有没有以该参数为名称的Symbol值, 如果有则返回这个值, 否则就新建一个.
// Symbol.for() 和 Symbol()都会生成一个新的Symbol值,但Symbol()每次生成的都是新的, 而Symbol.for()需要搜索不到才生成.
var s2 = Symbol.for("foo");

s1 === s2; // true

/* -------------------------------------------- */

// Symbol.keyFor()方法返回一个已登记的Symbol类型值的key
var s1 = Symbol.for("foo");
Symbol.keyFor(s1); // "foo"

var s2 = Symbol("foo");
Symbol.keyFor(s2); // undefined

/* 内置的Symbol值-------------------------------------------- */

// Symbol.hasInstance
// foo instanceof Foo 在语言内部实际调用的是Foo[Symbol.hasInstance](foo)

class Myclass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new Myclass(); // true

class Even {
  static [Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0;
  }
}

1 instanceof Even; // false
2 instanceof Even; // true
123 instanceof Even; // false

/* -------------------------------------------- */

// Symbol.isConcatSpreadable
// 对象Symbol.isConcatSpreadable属性等于一个布尔值, 用来表示该对象使用Array.prototype.concat()时是否能展开
// 数组默认是展开, 类数组默认是不展开.

let arr1 = ["c", "d"];
["a", "b"].concat(arr1, "e"); // ["a", "b", "c", "d", "e"]
arr1[Symbol.isConcatSpreadable]; // undefined

let arr2 = ["c", "d"];
arr2[Symbol.isConcatSpreadable] = false;
["a", "b"].concat(arr2, "e"); //["a", "b", Array(2), "e"]

/* -------------------------------------------- */

// Symbol.species属性指向当前对象的构造函数, 创造实例时默认会调用这个方法, 即使用这个属性返回的函数当做构造函数来创造新的实例对象.

class MyArray extends Array {
  static get [Symbol.species]() {
    return Array; // 由于构造函数替换成了Array, 所以mapped对象的实例不是MyArray,而是Array
  }
}

var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

mapped instanceof MyArray; // false
mapped instanceof Array; // true

/* -------------------------------------------- */

// Symbol.match
// 对象Symbol.match属性指向一个函数,当执行str.mathch(myObject)时, 如果该属性存在, 会调用它返回该方法的返回值.

String.prototype.match(regexp);
// 等同于
regexp[Symbol.match](this);

/* -------------------------------------------- */

// Symbol.replace
// Symbol.replace属性指向一个方法, 当对象被 String.prototype.replace方法调用时会返回该方法的返回值

String.prototype.replace(searchValue, replaceValue);
// 等同于
searchValue[Symbol.replace](this, replaceValue);

/* -------------------------------------------- */

// Symbol.search
// 对象的Symbol.search属性指向一个方法, 当对象被String.prototype.search方法调用时会返回该方法的返回值

String.prototype.search(regexp);
// 等同于
regexp[Symbol.search](this);

/* -------------------------------------------- */

// Symbol.split
// 对象的Symbol.split属性指向一个方法, 当对象被String.prototype.split方法调用时会返回该方法的返回值.

String.prototype.split(separator, limit);
//等同于
separator[Symbol.split](this, limit);

/* -------------------------------------------- */

// Symbol.iterator
// 对象的Symbol.iterator属性指向该对象的默认遍历器方法
// 对象进行for of循环时, 会调用Symmbol.iterator方法返回该对象的默认遍历器

var myIterable = {}
myIterable[Symbol.iterator] = function * (){
   yield 1
   yield 2
   yield 3
}

[...myIterable]  // [1,2,3]


for(var x of myIterable) {
   console.log(x)
}

/* -------------------------------------------- */

// Symbol.toPrimitive
// Symbol.toPrimitive属性指向一个方法, 对象被转为原始类型的值时会调用这个方法, 返回该对象对应的原始值类型.

let obj = {
   [Symbol.toPrimitive](hint) {
      switch (hint) {
         case 'number' :
            return 123
         case 'string' :
            return 'str'
         case 'default' :
            return 'default'
         default:
            throw new Error()
      }
   }
}

2 * obj  // 246
3 + obj  // '3default'
obj == 'default' // true
String(obj)  // 'str'


/* -------------------------------------------- */

// Symbol.toStringTag
// 对象的Symbol.toStringTag属性指向一个方法, 在对象上调用Object.prototype.toString方法时, 如果这个属性存在, 其返回值会出现在toString方法返回的字符串中, 表示对象的类型.
// 这个属性用于定制[object Array]中object后面的字符串

({[Symbol.toStringTag]: 'Foo'}.toString()) // "[object Foo]"


/* -------------------------------------------- */

// Symbol.unscopables
// 该属性指向一个对象, 指定了使用with关键字时那些属性会被with环境排除
