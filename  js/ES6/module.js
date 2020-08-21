// CommonJS模块导入, 模块加载只能在运行时加载, 所以没法在编译时静态优化
let { stat, exists, readFile } = require("fs");
// ES6模块导入, 模块可以编译时加载, 所以效率更高
import { stat, exists, readFile } from "fs";

//------------------------------------------------------------

// export语句输出接口与其对应的值是动态绑定关系, 通过该接口可以取到模块内部实时的值.
export var foo = "bar";
setTimeout(() => (foo = "baz"), 500); // 输出的变量foo值为bar,但500毫秒后会变为baz

// tips: CommonJS模块输出的是指的缓存, 不存在动态更新

//export和import命令只能在模块的顶层, 不能在代码块之中.

// 浏览器加载ES6模块时也使用<script>标签,但是要加入type="module"属性. 对于带有module属性的<script>, 浏览器都是异步加载的

// ConmmonJS和ES6模块的差异
//       1. CommonJS模块输出的是一个值的复制, ES6模块输出的是值的引用
//       2. CommonJS模块是运行时加载, ES6是编译时输出接口
//       3. CommonJS加载的是一个对象, 该对象只有在脚本运行结束时才生成. ES6模块不是对象, 它的对外接口是一种静态定义.

// CommonJS是值的复制的例子

// lib.js
var counter = 3;
function incCounter() {
  counter++;
}

module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var mod = require("./lib");

console.log(mod.counter); // 3
mod.incCounter();
console.log(mod.counter); // 3, 还是3

// 修改lib.js
var counter = 3;
function incCounter() {
  counter++;
}

module.exports = {
  get counter() {
    return counter;
  },
  incCounter: incCounter,
};

// 再次调用main.js
var mod = require("./lib");

console.log(mod.counter); // 3
mod.incCounter();
console.log(mod.counter); // 4

// ES6模块是动态引用, 并不会缓存值, 模块里的变量绑定其所在的模块
// ES6复制的例子

// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from "./lib";
console.log(counter); // 3
incCounter();
console.log(counter); // 4

// 由于ES6输入的模块变量只是一个符号连接, 所以这个变量是只读的, 对它进行重新赋值会报错.
// 例子
// lib.js
export let obj = {};

// main.js
import { obj } from "./lib";

obj.prop = 123; // OK
obj = {}; // TypeError

// export通过接口输出的是同一个值, 不同的脚本加载这个接口得到的都是同一个实例.

// -----------------------------------------------------------------------

// Node加载

// 如果不指定绝对路径, Node加载ES6模块会依次寻找以下脚本, 与require()的规则一致

import "./foo";
// 依次寻找
//  ./foo.js
//  ./foo/package.json
//  ./foo/index.js

import "baz";
hon;
// 依次寻找
//  ./node_modules/baz.js
//  ./node_modules/baz/package.json
//  ./node_modules/baz/index.js
//寻找上一级目录
//  ../node_modules/baz.js
//  ../node_modules/baz/package.json
//  ../node_modules/baz/index.js

// 2. import命令加载CommonJS模块
// 在Node环境中, 使用import命令加载CommonJS模块, Node会自动将Module.exports属性当做模块的默认输出,等同于export default

// 3. require命令加载ES6模块

// es.js
let foo = { bar: "my-default" };
export default foo;
foo = null;

// cjs.js
const es_namespace = require("./es");
console.log(es_namespace.default); // {bar: 'my-default}
