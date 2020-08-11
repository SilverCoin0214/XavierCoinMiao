// 模块模式

const MouseCounterModule = (function () {
  let numClicks = 0;
  const handleClick = () => {
    alert(++numClicks);
  };

  return {
    countClicks: () => {
      document.addEventListener("click", handleClick);
    },
  };
})();

//
//
//
//模块扩展

const MouseCounterModule = (function () {
  let numClicks = 0;
  const handleClick = () => {
    alert(++numClicks);
  };

  return {
    countClicks: () => {
      document.addEventListener("click", handleClick);
    },
  };
})();

(function (module) {
  let numScrolls = 0;
  const handleScroll = () => {
    alert(++numScrolls);
  };

  module.countScrolls = () => {
    document.addEventListener("wheel", handleScroll);
  };
})(MouseCounterModule);

//
// 立即函数,闭包, 对象组成的模块的缺点:  扩展的模块无法共享原有模块的内部属性
//

//---------------------------------------------------------------

// AMD设计明确基于浏览器

// AMD提供名为define的函数, 它接受以下参数:
// 1. 新创建模块的ID, 使用该ID, 可以在系统的其他部分引用该模块
// 2. 当前模块依赖的模块ID列表
// 3. 初始化模块的工厂函数, 该工厂函数接收依赖的模块列表作为参数

//使用AMD定义模块依赖于jQuery
define("MouseCounterModule", ["jQuery"], ($) => {
  let numClicks = 0;
  const handleClick = () => {
    alert(++numClicks);
  };

  return {
    countClick: () => {
      $(document).on("click", handleClick);
    },
  };
});

// AMD优点
// 1. 自动处理依赖,
// 2. 异步加载模块, 避免阻塞
// 3. 再同一个文件中科院定义多个模块

//---------------------------------------------------------------

// CommonJS设计基于通用javascript环境

// CommonJs的优势
// 1. 语法简单, 只需要定义module.exports属性, 剩下代码与标准js无差异. 引用模块方式也简单, 只需要require函数
// 2. CommonJS是Node.js默认的模块格式]

// CommonJS最大的缺点是不能显示的支持浏览器, 浏览器端的js不支持Module变量以及export属性.

//使用CommonJS定义模块

//MouseCounterModule.js
const $ = require("jQuery");
let numClicks = 0;
const handleClick = () => {
  alert(++numClicks);
};

module.exports = {
  countClick: () => {
    $(document).on("click", handleClick);
  },
};

// 在另一个文件中引用模块
const MouseCounterModule = require("MouseCounterMoudle.js");
MouseCounterModule.countClicks();

//---------------------------------------------------------------

// ES6模块结合了CommonJS和AMD的优点
// 1. 与CommonJS类似, ES6模块的语法简单, 并且基于文件
// 2. 与AMD类似, ES6模块支持异步模块加载

// ES6模块的主要思想是必须显示地使用标识符导出模块, 才能从外部访问模块. 其他标识符, 只能在模块内部使用.

//示例
// Ninja.js中导出
const ninja = "Yoshi";
export const message = "hello";

export function sayHiToNinja() {
  return message + " " + ninja;
}

// 上面与下面等同于一种写法
const ninja = "Yoshi";
const message = "hello";

function sayHiToNinja() {
  return message + " " + ninja;
}

export { message, sayHiToNinja };

// 从Ninja.js中导入
import { message, sayHiToNinja } from "Ninja.js";

assert(message === "hello", "we can access the imported variable");

// ES6 模块语法

export const ninja = "Yoshi"; // 导出变量
export function compare() {} // 导出函数
export class Ninja {} // 导出类
export default class Ninja {} // 导出默认类
export default function Ninja() {} // 导出默认函数

const ninja = "yoshi";
function compare() {}
export { ninja, compare }; // 导出整个文件存在的变量

export { ninja as samurai, compare }; // 使用别名导出变量

import Ninja from "Ninja.js"; // 导入默认导出
import { ninja, Ninja } from "Ninja.js"; // 导入命名导出
import * as Ninja from "Ninja.js"; // 导入模块中声明的全部导出内容
import { ninja as iNinja } from "Ninja.js"; // 通过别名导入模块中声明的全部导出内容
