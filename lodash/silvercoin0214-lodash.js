var silvercoin0214 = {
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

  /**
   *
   *   通过传入一个比较器来判断第一个数组里的元素是否跟需要比较的其他数组相等, 把不相等的元素重新组成一个数组返回
   *   @param array {Array} 待比较的第一个数组
   *   @param value {...array}  用来比较的其他数组
   *   @param comparator {function}  比较器
   *   @returns {array} 返回新数组
   */

  differenceWith: function (array, ...values) {
    let result = [];

    if (!Array.isArray(values[values.length - 1])) {
      var func = this.iteratee(values[values.length - 1]);
      values.pop();
    } else {
      func = this.identity();
    }

    let aryValue = this.concat([], ...values);

    for (let item of array) {
      let arrVal = item;
      for (let iten of aryValue) {
        let othVal = iten;
        if (!func(arrVal, othVal)) {
          result.push(item);
        }
      }
    }

    return result;
  },

  /**
   *   创建一个切片数组, 从开头删除N个元素
   *   @param ary {array} 需要切片的数组
   *   @param n {number}  删除个数
   *   @return {array}
   */

  drop: (ary, n = 1) => {
    let result = [];
    if (ary.length < n) {
      return result;
    }
    for (let i = n; i < ary.length; i++) {
      result.push(ary[i]);
    }

    return result;

    // 使用Array.slice写法, Array.silce(start, end)
    // let result = [...ary];
    // return result.slice(n);
  },

  /**
   *  创建一个切片数组, 原数组从结束位置开始删N个元素,
   *   @param ary {array} 需要切片的数组
   *   @param n {number}  删除个数
   *   @return {array}
   */

  dropRight: (ary, n = 1) => {
    let result = [...ary];
    if (ary.length < n) {
      return [];
    }

    for (let i = 0; i < n; i++) {
      result.pop();
    }

    return result;

    // 使用Array.slice写法
    // return ary.length > n ? result.slice(0, ary.length - n) : [];
  },

  /**
   *  创建一个切片数组, 从predicate返回false时开始返回剩余所有元素
   *  @param ary {array}  要被切片的数组
   *  @param predicate {function}  指定的方法
   *  @return {array}
   */

  dropWhile: (ary, predicate = this.identity) => {
    let result = [...ary];

    predicate = silvercoin0214.iteratee(predicate);

    for (let i = 0; i < ary.length; i++) {
      if (!predicate(ary[i], i, ary)) {
        result = result.slice(i);

        if (
          result.find((e) => silvercoin0214.isEqual(e, ary[ary.length - 1]))
        ) {
          return result;
        } else {
          result.push(ary[ary.length - 1]);
          return result;
        }
      }
    }
  },

  /**
   *  创建一个切片数组, 从尾部开始按照指定方法删除元素,直到方法返回False
   *  @param ary {array}  要被切片的数组
   *  @param predicate {function}  指定的方法
   *  @return {array}
   */

  dropRightWhile: (ary, predicate = this.identity) => {
    let result = [...ary];

    predicate = silvercoin0214.iteratee(predicate);

    for (let i = ary.length - 1; i >= 0; i--) {
      if (!predicate(ary[i], i, ary)) {
        result = result.slice(0, i + 1);

        if (result.find((e) => silvercoin0214.isEqual(e, ary[0]))) {
          return result;
        } else {
          result.push(ary[0]);
          return result;
        }
      }
    }
  },

  /**
   *  使用自定义元素填充数组,默认起始为0,终点为数组长度, 区间为[start, end)
   *  @param ary {Array} 需要填充的数组
   *  @param value {*} 任何元素
   *  @param start {number}
   *  @param end {number}
   *  @return {array}
   */

  fill: function (ary, value, start = 0, end = ary.length) {
    let result = [...ary];

    for (let i = start; i < end; i++) {
      result[i] = value;
    }

    return result;
  },

  /**
   *  在数组中通过编写的条件方法从头部开始找到第一个返回true的元素的下标
   *  @param  ary {array}
   *  @param  predicate {function}
   *  @param  fromIndex {number}
   *  @return {number}
   */

  findIndex: function (
    ary,
    predicate = silvercoin0214.identity,
    fromIndex = 0
  ) {
    for (let i = fromIndex; i < ary.length; i++) {
      let func = silvercoin0214.iteratee(predicate);

      if (func(ary[i])) {
        return i;
      }
    }

    return -1;
  },

  /**
   *  在数组中通过编写的条件方法从尾部开始找到第一个返回true的元素的下标
   *  @param  ary {array}
   *  @param  predicate {function}
   *  @param  fromIndex {number}
   *  @return {number}
   */

  findLastIndex: function (
    ary,
    predicate = silvercoin0214.identity,
    fromIndex = ary.length - 1
  ) {
    for (let i = fromIndex; i >= 0; i--) {
      let func = silvercoin0214.iteratee(predicate);

      if (func(ary[i])) {
        return i;
      }
    }

    return -1;
  },

  /**
   *  返回数组的第一个元素
   *  @param ary {array}
   *  @return {*}
   */

  head: function (ary) {
    return ary[0];
  },

  /**
   *  展平一层数组
   *  @param ary {arary}
   *  @return {array}
   */

  flatten: function (ary) {
    return silvercoin0214.flattenDepth(ary);
  },

  /**
   *  展平所有数组
   *  @param ary {array}
   *  @return {array}
   */

  flattenDeep: function (ary) {
    while (
      ary.find((e) => {
        return e instanceof Array;
      })
    ) {
      ary = silvercoin0214.flatten(ary);
    }

    return ary;
  },

  /**
   *   按所给的层级展平数组
   *   @param ary {array}
   *   @param depth {number}
   *   @return {array}
   */

  flattenDepth: function (ary, depth = 1) {
    let result = [];
    let copyAry = [...ary];

    while (depth) {
      for (let i = 0; i < copyAry.length; i++) {
        if (copyAry[i] instanceof Array) {
          let childAry = copyAry[i];
          result.push(...childAry);
        } else {
          result.push(copyAry[i]);
        }
      }
      depth = depth - 1;

      if (depth === 0) {
        return result;
      }

      copyAry = result;
      result = [];
    }
  },

  /**
   *  键值对数组转对象
   *  @param pairs {array}
   *  @return {object}
   */

  fromPairs: function (pairs) {
    let result = {};

    for (let i = 0; i < pairs.length; i++) {
      let key = pairs[i][0];
      let value = pairs[i][1];
      result[key] = value;
    }

    return result;
  },

  /**
   *  在数组中从头开始找到指定的元素, 返回其下标, 如果第三个参数为负数,则从尾部开始找
   *  @param ary {array}
   *  @param value {*}
   *  @param fromIndex {number}
   *  @return {number}
   */

  indexOf: function (ary, value, fromIndex = 0) {
    let absIndex = Math.abs(fromIndex);

    if (fromIndex > ary.length) {
      return -1;
    }

    if (fromIndex >= 0 || ary.length < absIndex) {
      fromIndex = ary.length < absIndex ? 0 : fromIndex;
      for (let i = fromIndex; i < ary.length; i++) {
        if (ary[i] === value) {
          return i;
        }
      }
    } else {
      let index = ary.length - fromIndex - 2;
      for (let i = index; i >= 0; i--) {
        if (ary[i] === value) {
          return i;
        }
      }
    }

    return -1;
  },

  /**
   *  获取除数组最后一个以外的所有元素
   *  @param ary {array}
   *  @return {array}
   */

  initial: function (ary) {
    let result = [...ary];
    result.pop();
    return result;
  },

  /**
   *  获取多个数组的交集
   *  @param arys {...array}
   *  @return {array}
   *
   */

  intersection: function (...arys) {
    let result = [];

    let total = [].concat(...arys);
    let setNum = new Set(total);
    let elements = Array.from(setNum);

    for (let ele of elements) {
      let flag = arys.every((item, index) => {
        return item.find((e) => e === ele);
      });

      if (flag === true) {
        result.push(ele);
      }
    }

    return result;
  },

  /**
   *   依旧是获取交集,但是有条件限制, 需要先处理后在进行获取
   *   @param arys {array}
   *   @param iter {function}
   *   @return {array}
   */

  intersectionBy: function (...arys) {
    let res = [];

    let func;
    if (!Array.isArray(arys[arys.length - 1])) {
      func = silvercoin0214.iteratee(arys.pop());
    } else {
      func = this.identity();
    }

    for (let i = 1; i < arys.length; i++) {
      for (let item of arys[i]) {
        let value = arys[0].find((e) => func(e) === func(item));
        if (value) {
          res.push(value);
        }
      }

      return res;
    }
  },

  /**
   *  依旧是求交集, 但是用比较器比较后才判断相交
   *  @param arys {...array}
   *  @param comparator {function}
   *  @return {array}
   */

  intersectionWith: function (...arys) {
    let res = [];

    let comparator;
    if (!Array.isArray(arys[arys.length - 1])) {
      comparator = silvercoin0214.iteratee(arys.pop());
    } else {
      comparator = silvercoin0214.identity();
    }

    let firstAry = arys.shift();

    for (let item of firstAry) {
      for (let iten of arys) {
        for (let ele of iten) {
          if (comparator(item, ele)) {
            res.push(item);
          }
        }
      }
    }

    return res;
  },

  /**
   *   将数组转为字符串, 并且分隔符自定义,默认为逗号
   *  @param ary {array}
   *  @param sep {string}
   *  @returns {string}
   *
   */

  join: function (ary, sep = ",") {
    let result = "";

    for (let i = 0; i < ary.length; i++) {
      result = result + ary[i] + sep;
    }

    return result.slice(0, result.length - 1);
  },

  /**
   *  获得数组最后一个值
   *  @param ary {array}
   *  @param {*}
   */

  last: function (ary) {
    return ary.pop();
  },

  /**
   *  与indexOf相似, 区别是从右到左
   *  @param ary {array}
   *  @param value {*}
   *  @param fromIndex {number}
   *  @return {number}
   */

  lastIndexOf: function (ary, value, fromIndex = ary.length - 1) {
    if (fromIndex > ary.length) {
      return -1;
    }

    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] === value) {
        return i;
      }
    }

    return -1;
  },

  /**
   *  获取索引处元素的值, 如果是负数就从右往左数
   *  @param ary {array}
   *  @param n {number}
   *  @pram {*}
   */

  nth: function (ary, n = 0) {
    if (n > 0 && n < ary.length) {
      return ary[n];
    } else if (n < 0 && Math.abs(n) < ary.length) {
      return ary[ary.length + n];
    }

    return undefined;
  },

  /**
   *   删除给定的元素, 返回被删除元素的数组
   *   @param ary {array}
   *   @param value {*}
   *   @return {array}
   */

  pull: function (ary, ...value) {
    for (let i = 0; i < ary.length; i++) {
      if (value.find((e) => e === ary[i])) {
        ary.splice(i, 1);
        i = 0;
      }
    }

    return ary;
  },

  /**
   *  给定删除的数组, 返回被删除的元素
   *  @param ary {array}
   *  @param value {array}
   *  @return {array}
   */

  pullAll: function (ary, value) {
    return this.pull(ary, ...value);
  },

  /**
   *   通过给定的选择器删除元素
   *   @param ary {array}
   *   @param value {array}
   *   @param iter {function}
   *   @return {array}
   */

  pullAllBy: function (ary, value, iter = this.identity) {
    let func = this.iteratee(iter);

    for (let i = 0; i < ary.length; i++) {
      if (value.find((e) => func(e) === func(ary[i]))) {
        ary.splice(i, 1);
        i = 0;
      }
    }

    return ary;
  },

  /**
   *   通过比较器删除元素, 返回原数组
   *   @param ary {array}
   *   @param values {array}
   *   @param comparator {function}
   *   @return {array}
   */

  pullAllWith: function (ary, value, comparator) {
    let func = this.iteratee(comparator);

    for (let item of ary.keys()) {
      for (let iten of value) {
        if (func(iten, ary[item])) {
          ary.splice(item, 1);
        }
      }
    }

    return ary;
  },

  /**
   *  按照给定位置删除元素,返回原数组
   *  @param ary {array}
   *  @param index {*}
   *  @return {array}
   *
   */

  pullAt: function (ary, index) {
    let res = [];

    if (Array.isArray(index)) {
      let del = [];
      for (let key of index) {
        del.push(ary[key]);
      }

      for (let value of del) {
        res.push(
          ...ary.splice(
            ary.findIndex((e) => e === value),
            1
          )
        );
      }
    } else {
      return ary.splice(index, 1);
    }

    return res;
  },

  /**
   *   根据回调函数删除元素, 返回原数组
   *   @param ary {array}
   *   @param pred {function}
   *   @return {array} newArray
   */

  remove: function (ary, pred = this.identity) {
    let res = [];

    ary.forEach((item, index, ary) => {
      if (pred(item, index, ary)) {
        ary.splice(index, 1);
        res.push(item);
      }
    });

    return res;
  },

  /**
   *  逆序数组, 返回逆序后的数组
   *  @param ary {array}
   *  @return {array}
   *
   */

  reverse: function (ary) {
    return ary.reverse();
  },

  /**
   *  切片数组
   *  @param ary {array}
   *  @param start {number}
   *  @param end {number}
   *
   */

  slice: function (ary, start = 0, end = ary.length) {
    return ary.slice(start, end);
  },

  /**
   *  去除第一个元素返回切片数组
   *  @param {array} ary
   *  @return {array}
   */

  tail: function (ary) {
    ary.shift();
    return ary;
  },

  /**
   *  切片数组, 从头开始取n个
   *  @param {array} ary 需要切片的数组
   *  @param {number} n  切片个数
   *  @return {array} 返回切片后的数组
   */

  take: function (ary, n = 1) {
    return ary.slice(0, n);
  },

  /**
   *  切片数组, 从末尾开始往前切n个
   *  @param {array} ary
   *  @param {number} n
   *  @return {array}
   */

  takeRight: function (ary, n = 1) {
    let res = [];

    if (n === undefined) {
      res = ary.pop();
      return res;
    }

    for (let i = 0; i < n; i++) {
      res.push(ary.pop());
    }

    return res.reverse();
  },

  /**
   *   创建一个数组切片，从开始取元素。采取元素直到谓词返回false。谓词由三个参数调用：（值，索引，数组）。
   *   @param {array} ary
   *   @param {function} pred
   *   @return {array}
   */

  takeWhile: function (ary, pred = this.identity) {
    let res = [];
    let func = silvercoin0214.iteratee(pred);

    for (let i = 0; i < ary.length; i++) {
      if (func(ary[i], i, ary)) {
        res.push(ary[i]);
      } else {
        return res;
      }
    }
  },

  /**
   *   创建一个数组切片，从结尾取元素。采取元素直到谓词返回false。谓词由三个参数调用：（值，索引，数组）。
   *   @param {array} ary
   *   @param {function} pred
   *   @return {array}
   */

  takeRightWhile: function (ary, pred = this.identity) {
    let res = [];
    let func = silvercoin0214.iteratee(pred);

    for (let i = ary.length - 1; i >= 0; i--) {
      if (func(ary[i], i, ary)) {
        res.push(ary[i]);
      } else {
        return res.reverse();
      }
    }
  },

  // ------------
  /**
   *  通过传入的函数对数组或对象进行遍历后返回一个新的数组
   *  @param collection {array | object}
   *  @param iter {function}
   *  @returns {Array}
   */

  map: function (collection, iter = silvercoin0214.identity) {
    let result = [];

    if (collection instanceof Array) {
      for (let item of collection) {
        if (iter instanceof Function) {
          let value = item;
          let index = collection.findIndex((e) => e === item);
          result.push(iter(value, index, collection));
        } else if (Object.prototype.toString.call(iter) == "[object String]") {
          let aryIte = iter.split(".");
          for (let i of aryIte) {
            item = item[i];
          }
          result.push(item);
        }
      }
    } else {
      let aryVaules = Object.values(collection);
      for (let item of aryVaules) {
        result.push(iter(item));
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

  isEqual: (value, other) => {
    if (!(value instanceof Object)) {
      return value === other;
    } else if (value instanceof Object && !(other instanceof Object)) {
      return false;
    } else if (value instanceof Object && other instanceof Object) {
      if (Object.keys(value).length !== Object.keys(other).length) {
        return false;
      }
      for (let key of Object.keys(value)) {
        if (!silvercoin0214.isEqual(value[key], other[key])) {
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

  get: function (object, path, defaultvalue = "undefined") {
    if (typeof path == "string") {
      path = path.split(".");

      for (let i = 0; i < path.length; i++) {
        let sp = path[i].split("[");

        if (sp.length > 1) {
          let newsp = [];
          for (let item of sp) {
            newsp.push(item[0]);
          }

          path.splice(i, 1, ...newsp);
        }
      }
    }

    let obj = Object.assign({}, object);
    for (let p of path) {
      if (p in obj) {
        obj = obj[p];
      } else {
        return defaultvalue;
      }
    }

    return obj;
  },

  /**
   *   把对象转成映射的数组
   *   @param obj {object}
   *   @return {array}
   */

  toPairs: function (obj) {
    let result = [];

    for (let key of Object.keys(obj)) {
      let element = [key, obj[key]];
      result.push(element);
    }

    return result;
  },

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

  // property: function (path) {
  //   return function (obj) {
  //     return obj[path];
  //   };
  // },

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
      return this.matchesProperty(func[0], func[1]);
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
   *   Collection
   *
   */

  /**
   *  在数组中通过编写的条件方法找到第一个返回true的元素
   *  @param  collection {array | object}
   *  @param  predicate {function}
   *  @param  fromIndex {number}
   *
   */

  find: function (collection, predicate, fromIndex = 0) {
    for (let i = fromIndex; i < collection.length; i++) {
      let func = silvercoin0214.iteratee(predicate);

      if (func(collection[i])) {
        return collection[i];
      }
    }

    return undefined;
  },

  /**
   *  在数组中通过编写的条件方法找到第一个返回true的元素
   *  @param  collection {array | object}
   *  @param  predicate {function}
   *  @param  fromIndex {number}
   *
   */

  findLast: function (
    collection,
    predicate,
    fromIndex = collection.length - 1
  ) {
    for (let i = fromIndex; i >= 0; i--) {
      let func = silvercoin0214.iteratee(predicate);

      if (func(collection[i])) {
        return collection[i];
      }
    }

    return undefined;
  },
};

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
// debugger;
var value = silvercoin0214.takeRightWhile(users, "active");
console.log(value);
