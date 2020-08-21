// Node.js是基于CommonJS规范的, 但现在已经做了非常多的改进.

// Node.js和CommonJS的区别主要体现在Module.exports对象的具体实现上.
// 1. 在Node.js中, module.exports是真正的特殊对象, 是真正的对外暴露接口.而exports只是一个变量,是被默认的module.exports绑定的
// 2. CommonJS规范里没有module.exports对象. 在Node.js中,它的实际含义是一个完全预先构建的对象, 不经过Module.exports是不可能对外暴露的.

// Node.js核心技术
/** Node.js对模块的定义十分简单, 主要分为模块引用, 模块定义和模块标识3个部分
 *  require: 用来引用模块
 *  export: 用来导出模块, 包括标识符和模块内容
 *      modeule.exports: 对外导出的对象只能有1个
 *      exports.xxx: 对外导出的值可以有多个
 */
