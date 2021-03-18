/**
 * 单例模式
 * 单例模式定义: 保证一个类仅有一个实例, 并提供一个访问它的全局访问点
 *
 * 单例的核心逻辑就是
 *    let instance = null
 *    function () {
 *      if (!instance) {
 *        instance = xxxx
 *      }
 *      return instance
 *    }
 */

// 代理
const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, agrumengtList) => {
      if (!this.instance) {
        this.instance = new target(...agrumengtList);
      }
      return this.instance;
    },
  });
};

// test -------------------------------

class Myclass {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

const singletonClass = singletonify(Myclass);

const a = new singletonClass("sce");
console.log(a);
const b = new singletonClass("zaj");
console.log(b);
