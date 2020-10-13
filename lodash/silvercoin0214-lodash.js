var silvercoin0214 = {
  /**
   *   Util
   *
   */

  /**
   *  该函数接收数组或字符串后返回一个函数, 返回函数的返回值为其参数在Path路径上的值.
   *  @param path {Array | string}
   *  @return {function}
   */

  property: function (path) {
    return function (obj) {
      var value = Object.assign({}, obj);
      if (typeof path === "string") {
        let ary = path.split(".");
        for (let i of ary) {
          value = value[i];
        }
      } else {
        for (let i of path) {
          value = value[i];
        }
      }

      return value;
    };
  },

  /**
   * identity: 返回首个提供的参数
   * @param  {any} value
   * @return {*}
   */
  identity: function (value) {
    return value;
  },

  /**
   * 创建一个使用创建的函数的参数调用func的函数。如果func是属性名称，则创建的函数返回给定元素的属性值。
   * 如果func是数组或对象，则创建的函数对包含等效源属性的元素返回true，否则返回false。
   * @param func {*}
   * @returns {function}
   */

  iteratee: function (func = this.identity) {
    if (typeof func === "string") {
      return this.property(func);
    } else if (func instanceof Array) {
      return this.matchesProperty(func);
    } else if (func instanceof Function) {
      return func;
    } else if (func instanceof Object) {
      return this.matches(func);
    }
  },

  /**
   *  创建一个函数判断一个给定的对象和参数source，如果给定对象中有与source相同的属性，返回true，否则返回false
   *  @param source {object}
   *  @return {function}
   *
   */

  matches: function (source) {
    return function (obj) {
      for (let key of Object.keys(source)) {
        if (obj[key] !== source[key]) {
          return false;
        }
      }
      return true;
    };
  },

  /**
   * 创建一个函数，判断给定对象属性是否与传入的参数相同，相同返回true，不同返回false
   * @param {Array|string} path 待获取的属性名
   * @param {*} srcValue 待比较的属性值
   * @returns {Function}
   */

  matchesProperty: function (path, srcValue) {
    return function (obj) {
      var copyObj = Object.assign({}, obj);
      if (typeof path === "string") {
        let ary = path.split(".");
        for (let i of ary) {
          copyObj = copyObj[i];
        }
        if (srcValue === copyObj) {
          return true;
        }
      } else {
        for (let i of path) {
          copyObj = copyObj[i];
        }
        if (srcValue === copyObj) {
          return true;
        }
      }
      return false;
    };
  },

  /**
   ** Array
   */

  /**
   **  将一个数组分为N个指定长度的数组,如果剩余的元素个数不够,就把剩下的组成一个组.
   **  @param ary{Array}  需要拆分的数组
   **  @param size{Number}  指定的长度
   **  @returns {Array[][]}  返回二维数组
   */

  chunk: function (ary, size) {
    let newAry = [];
    for (let i = 0; i < ary.length; i += size) {
      newAry.push(ary.slice(i, i + size));
    }

    return newAry;
  },

  /**
   *  创建一个删除了所有false,null,0,""和undefined还有NaN的数组
   *  @param ary{Array} 需要处理的数组
   *  @returns {Array[]} 返回一维数组
   */

  compact: function (ary) {
    let result = [];
    for (let item of ary) {
      if (Boolean(item)) {
        result.push(item);
      }
    }

    return result;
  },

  /**
   *   用任何其他数组或值用来创建一个新的数组后连接第一个数组,
   *   @param ary{Array} 第一个数组
   *   @param values{...values}
   *   @returns {Array}
   */

  concat: function (ary, ...values) {
    let result = ary;

    for (let item of values) {
      if (item instanceof Array) {
        for (let iten of item) {
          result.push(iten);
        }
      } else {
        result.push(item);
      }
    }

    return result;
  },

  /**
   *  通过与第一个数组进行比较,创建一个第一个数组中不存在在其他数组中的值的数组.
   *  @param ary{Array}
   *  @param values{...array}
   *  @returns {Array} new Array
   */

  difference: function (ary, ...values) {
    let result = [];
    let aryValues = this.concat([], ...values);
    for (let item of ary) {
      let ele = aryValues.find((e) => e == item);
      if (typeof ele == "undefined") {
        result.push(item);
      }
    }

    return result;
  },

  /**
   *  通过传入的比较条件来和第一个数组比较, 最后返回 第一个数组里没有存在在其他数组里的值的数组
   *  @param ary {array} 第一个数组
   *  @param values {...array} 其他数组
   *  @param iteratee {function}
   *  @returns {Array}
   */

  differenceBy: function (ary, ...values) {
    if (values.length === 1) {
      return this.difference(ary, ...values);
    }

    let result = [...ary];
    let aryAndFunc = values;

    let last = aryAndFunc.pop();

    let func;
    if (last instanceof Array) {
      func = this.identity;
      aryAndFunc.push(last);
    } else {
      func = this.iteratee(last);
    }

    let aryValue = this.concat([], ...aryAndFunc);

    for (let i of ary.keys()) {
      let funcItem = func(ary[i]);
      for (let iten of aryValue) {
        let funcIten = func(iten);
        if (funcItem == funcIten) {
          result.splice(result.indexOf(ary[i]), 1);
        }
      }
    }

    return result;
  },

  // ------------
  /**
   *  通过传入的函数对数组或对象进行遍历后返回一个新的数组
   *  @param collection {array | object}
   *  @param iteratee {function}
   *  @returns {Array}
   */

  map: function (collection, iteratee = this.identity) {
    let result = [];

    if (collection instanceof Array) {
      for (let item of collection) {
        if (iteratee instanceof Function) {
          let value = item;
          let index = collection.findIndex((e) => e === item);
          result.push(iteratee(value, index, collection));
        } else if (
          Object.prototype.toString.call(iteratee) == "[object String]"
        ) {
          let aryIte = iteratee.split(".");
          for (let i of aryIte) {
            item = item[i];
          }
          result.push(item);
        }
      }
    } else {
      let aryVaules = Object.values(collection);
      for (let item of aryVaules) {
        result.push(iteratee(item));
      }
    }

    return result;
  },

  /**
   *    lang
   *
   */

  /**
   *  两个值进行深度比较后判断是否相等
   *  @param value {*}  待比较的值
   *  @param other {*}  用来比较的值
   *  @returns {boolean}
   */

  isEqual: function (value, other) {
    if (!(value instanceof Object)) {
      return value === other;
    } else if (value instanceof Object && !(other instanceof Object)) {
      return false;
    } else if (value instanceof Object && other instanceof Object) {
      if (Object.keys(value).length !== Object.keys(other).length) {
        return false;
      }
      for (let key of Object.keys(value)) {
        if (!this.isEqual(value[key], other[key])) {
          return false;
        }
      }

      return true;
    }
  },

  /**
   *
   *  Object
   *
   */

  /**
   *  获取对象路径处的值, 如果解析未定义, 就返回默认值
   *  @param object {object}
   *  @param path {array | string}
   *  @defaultvalue {*}
   */

  get: function (object, path, defaultvalue = "") {
    if (typeof path == "string") {
      path = path.split(".");

      for (let i = 0; i < path.length; i++) {
        let sp = path[i].split("[");

        if (sp.length > 1) {
          var num = sp[sp.length - 1][0];
          sp.splice(sp.length - 1, 1, num);

          path.splice(i, 1, ...sp);
        }
      }
    }

    let obj = { ...object };
    for (let p of path) {
      if (p in path) {
        obj = obj[p];
      } else {
        return defaultvalue;
      }
    }

    return obj;
  },
};

var object = { a: [{ b: { c: 3 } }] };

var value = silvercoin0214.get(object, "a.b.c", "default");
console.log(value);
