var silvercoin0214 = {
  /**
   *   Util
   *
   */

  /**
   * identity: 返回首个提供的参数
   * @param  {any} value
   * @return {*}
   */
  identity: function (value) {
    return value;
  },

  /**
   *  该函数接收数组或字符串后返回一个函数, 返回函数的返回值为其参数在Path路径上的值.
   *  @param path {Array | string}
   *  @return {function}
   */

  property: function (path) {
    return function (obj) {
      var value = { ...obj };
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
   * 创建一个使用创建的函数的参数调用func的函数。如果func是属性名称，则创建的函数返回给定元素的属性值。
   * 如果func是数组或对象，则创建的函数对包含等效源属性的元素返回true，否则返回false。
   * @param func {*}
   * @returns {function}
   */

  iteratee: function (func = this.identity) {
    if (typeof func === "string") {
      return this.property(func);
    } else if (func instanceof Array) {
    }
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

  differenceBy: function (ary, iteratee = this.identity, ...values) {
    let result = [];
    let aryValues = this.concat([], ...values);

    for (let item of ary) {
      if (iteeratee instanceof Function) {
        item = iteeratee(item);
        let ele = aryValues.find((e) => iteratee(e) == item);
        if (typeof ele == "undefined") {
          result.push(item);
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
          result.push(iteratee(item));
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
};

var _ = silvercoin0214;

var users = [{ user: "barney" }, { user: "fred" }];

let ary = _.map(users, "user");
console.log(ary);
