var silvercoin0214 = {
  chunk: function (array, size = 1) {
    var split_array = [];
    for (var i = 0; i < size; i++) {
      split_array.push(array[i]);
    }
    for (var i = 0; i < size; i++) {
      array.shift(i);
    }

    var new_array = [];
    new_array.push(split_array);
    new_array.push(array);
    return new_array;
  },

  compact: function (ary) {
    for (var i = 0; i < ary.length; i++) {
      if (
        ary[i] === false ||
        ary[i] === 0 ||
        ary[i] == null ||
        ary[i] == undefined ||
        ary[i] === "" ||
        ary[i] === "" ||
        isNaN(ary[i])
      ) {
        ary.splice(i, 1);
        i = 0;
      }
    }

    return ary;
  },

  concat: function (ary) {
    var new_ary = ary;
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] instanceof Array) {
        for (var j = 0; j < arguments[i].length; j++) {
          new_ary.push(arguments[i][j]);
        }
      } else {
        new_ary.push(arguments[i]);
      }
    }

    return new_ary;
  },

  difference: function (ary) {
    for (var i = 1; i < arguments.length; i++) {
      for (var j = 0; j < ary.length; j++) {
        if (arguments[i].includes(ary[j])) {
          ary.splice(j, 1);
          j = -1;
        }
      }
    }

    return ary;
  },

  drop: function (ary, n = 1) {
    for (var i = 0; i < n; i++) {
      ary.shift();
    }

    return ary;
  },

  dropRight: function (ary, n = 1) {
    for (var i = 0; i < n; i++) {
      ary.pop();
    }

    return ary;
  },

  fill: function (ary, value, start = 0, end = ary.length) {
    for (var i = start; i < end; i++) {
      ary[i] = value;
    }

    return ary;
  },

  /**
   *  flatten: 把数组中存在的二维数组展开一层
   *  @param: {array}  ary  需要展平的数组
   *  @returns: {array}  new_ary  返回新的已展平数组
   */

  flatten: function (ary) {
    var new_ary = [];
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        for (var j = 0; j < ary[i].length; j++) {
          new_ary.push(ary[i][j]);
        }
      } else {
        new_ary.push(ary[i]);
      }
    }

    return new_ary;
  },

  /**
   * flattenDeep: 把数组中存在的数组全部展平成一维数组
   * @param {array} ary
   * @return {array} new_ary
   */

  flattenDeep: function (ary) {
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        ary = this.flatten(ary);
        this.flattenDeep(ary);
      }
    }

    return ary;
  },

  /**
   * flattenDepth: 可以自己控制数组要展平几层
   * @param {array} ary
   * @param {number} depth
   */
  flattenDepth: function (ary, depth = 1) {
    while (depth) {
      ary = this.flatten(ary);
      depth = depth - 1;
    }

    return ary;
  },

  fromPairs: function (ary) {
    let obj = {};
    for (let i = 0; i < ary.length; i++) {
      obj[ary[i][0]] = ary[i][1];
    }

    return obj;
  },

  head: function (ary) {
    return ary.shift();
  },

  indexOf: function (ary, value, fromIndex = 0) {
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] === value || (Number.isNaN(value) && Number.isNaN(ary[i]))) {
        return i;
      }
    }

    return -1;
  },

  /**
   *  initial: 返回除了最后一个元素外的数组
   *  @param {array} ary
   *  @return {array} ary
   */
  initial: function (ary) {
    //return ary.slice(0, ary.length - 1);
    return this.slice(ary, 0, ary.length - 1);
  },

  /**
   * intersection: 返回所有数组里的交集.
   * @param  {...any} arys
   * @return {array}
   */
  intersection: function (...arys) {
    // 把所有数组过滤掉重复项后全部存到一个数组中
    var new_ary = [];
    for (let i = 0; i < arys.length; i++) {
      arys[i] = Array.from(new Set(arys[i]));
    }
    for (let i = 0; i < arys.length; i++) {
      for (let j = 0; j < arys[i].length; j++) {
        new_ary.push(arys[i][j]);
      }
    }

    // 创建一个对象计算数组里每个元素的个数
    var new_obj = {};
    for (let i = 0; i < new_ary.length; i++) {
      var num = new_ary[i];
      new_obj[num] = new_obj[num] + 1 || 1;
    }

    // 如果元素的个数等于添加到的数组个数的长度, 说明每个数组都有存在该元素.
    var reary = [];
    for (key in new_obj) {
      if (new_obj[key] == arys.length) {
        reary.push(Number(key));
      }
    }

    return reary;
  },

  join: function (ary, separator = ",") {
    var str = "";
    for (var i = 0; i < ary.length; i++) {
      if (i == ary.length - 1) {
        str += ary[i];
        return str;
      }
      str += ary[i] + String(separator);
    }
  },

  last: function (ary) {
    return ary.pop();
  },

  lastIndexOf: function (ary, value, fromIndex = ary.length - 1) {
    for (var i = fromIndex; i > 0; i--) {
      if (ary[i] === value || (Number.isNaN(value) && Number.isNaN(ary[i]))) {
        return i;
      }
    }

    return -1;
  },

  nth: function (ary, n = 0) {
    if (n >= 0) {
      return ary[n];
    }

    return ary[ary.length + n];
  },

  pull: function (ary, ...values) {
    for (var i = 0; i < ary.length; i++) {
      if (values.includes(ary[i])) {
        ary.splice(i, 1);
        i = -1;
      }
    }

    return ary;
  },

  pullAll: function (ary, values) {
    for (var i = 0; i < ary.length; i++) {
      if (values.includes(ary[i])) {
        ary.splice(i, 1);
        i = -1;
      }
    }

    return ary;
  },

  pullAt: function (ary, indexes) {
    var new_ary = [];
    if (indexes instanceof Array) {
      for (var i = 0; i < indexes.length; i++) {
        new_ary.push(ary[indexes[i]]);
      }

      for (var j = 0; j < new_ary.length; j++) {
        if (ary.includes(new_ary[j])) {
          var idx = ary.indexOf(new_ary[j]);
          ary.splice(idx, 1);
        }
      }
    } else {
      new_ary.push(ary[indexes]);
      ary.splice(indexes, 1);
    }

    console.log(ary);
    return new_ary;
  },

  reverse: function (ary) {
    for (var i = 0; i < ary.length; i++) {
      ary.splice(i, 0, ary.pop());
    }

    return ary;
  },

  tail: function (ary) {
    ary.shift();
    return ary;
  },

  take: function (ary, n = 1) {
    let new_ary = [];
    if (ary.length > n) {
      for (var i = 0; i < n; i++) {
        new_ary.push(ary[i]);
      }
    } else {
      return ary;
    }

    return new_ary;
  },

  takeRight: function (ary, n = 1) {
    let new_ary = [];
    if (ary.length > n) {
      for (var i = 0; i < n; i++) {
        new_ary.unshift(ary[ary.length - 1 - i]);
      }
    } else {
      return ary;
    }

    return new_ary;
  },

  union: function (...arys) {
    let new_ary = [];
    for (var i = 0; i < arys.length; i++) {
      for (var j = 0; j < arys[i].length; j++) {
        if (new_ary.includes(arys[i][j]) == false) {
          new_ary.push(arys[i][j]);
        }
      }
    }

    return new_ary;
  },

  uniq: function (ary) {
    let new_ary = [];
    for (var i = 0; i < ary.length; i++) {
      if (new_ary.includes(ary[i]) == false) {
        new_ary.push(ary[i]);
      }
    }

    return new_ary;
  },

  slice: function (ary, start = 0, end = ary.length) {
    for (var i = 0; i < start; i++) {
      ary.shift();
    }

    for (var i = ary.length; i > end; i--) {
      ary.pop();
    }

    return ary;
  },

  without: function (ary, ...values) {
    var new_ary = [];

    for (var i = 0; i < ary.length; i++) {
      if (values.includes(ary[i]) == false) {
        new_ary.push(ary[i]);
      }
    }

    return new_ary;
  },

  // 所有添加进的数组找到不同值.  先合并所有数组, 然后清除同类项.
  xor: function (...arys) {
    var new_ary = [];
    var filter_ary = [];

    for (var i = 0; i < arys.length; i++) {
      new_ary = new_ary.concat(arys[i]);
    }

    for (var i = 0; i < new_ary.length; i++) {
      if (new_ary.indexOf(new_ary[i]) == new_ary.lastIndexOf(new_ary[i])) {
        filter_ary.push(new_ary[i]);
      }
    }

    return filter_ary;
  },

  /**
   * unzip: 解包, 传进的数组集拆分成下标相同的归为一类的数组集
   * @param {array} ary
   * @return {array}
   */
  unzip: function (ary) {
    // 创建一个数组, 其中具有需要解包元素个数的空数组
    var new_ary = [];

    var itemLength = ary[0].length;

    for (let i = 0; i < itemLength; i++) {
      new_ary.push([]);
    }

    // 把元素放到每个空数组中
    for (let i = 0; i < itemLength; i++) {
      for (let j = 0; j < ary.length; j++) {
        new_ary[i].push(ary[j][i]);
      }
    }

    return new_ary;
  },

  /**
   * zip: 创建一个分组元素的数组，每数组第n个元素各自存成一个数组.
   * @param  {...any} ary
   * @return  {array}
   */
  zip: function (...ary) {
    var new_ary = [];
    var itemLength = ary[0].length;
    for (let i = 0; i < itemLength; i++) {
      new_ary.push([]);
    }

    for (let i = 0; i < itemLength; i++) {
      for (let j = 0; j < ary.length; j++) {
        new_ary[i].push(ary[j][i]);
      }
    }

    return new_ary;
  },

  //
  // String 类的方法 !!!
  //

  pad: function (str = "", length = 0, chars = " ") {
    if (str.length > length) {
      return str;
    }

    var slength = Math.floor((length - str.length) / 2);
    var elength = length - str.length - slength;

    var sstr = "";
    while (sstr.length < slength) {
      for (var i = 0; i < chars.length; i++) {
        if (sstr.length < slength) {
          sstr += chars[i];
        }
      }
    }

    var estr = "";
    while (estr.length < elength) {
      for (var i = 0; i < chars.length; i++) {
        if (estr.length < elength) {
          estr += chars[i];
        }
      }
    }

    return sstr + str + estr;
  },

  padEnd: function (str = "", length = 0, chars = " ") {
    if (str.length > length) {
      return str;
    }

    while (str.length < length) {
      for (var i = 0; i < chars.length; i++) {
        if (str.length < length) {
          str += chars[i];
        }
      }
    }

    return str;
  },

  padStart: function (str = "", length = 0, chars = " ") {
    if (str.length > length) {
      return str;
    }

    var start_str = "";
    while (start_str.length < length - str.length) {
      for (var i = 0; i < chars.length; i++) {
        if (start_str.length < length - str.length) {
          start_str += chars[i];
        }
      }
    }

    return start_str + str;
  },

  lowerCase: function (str = "") {},

  lowerFirst: function (str = "") {
    var new_str = "";
    var sign = 0;
    if (str[0].charCodeAt() >= 65 && str[0].charCodeAt() <= 90) {
      new_str += String.fromCharCode(str[0].charCodeAt() + 32);
      sign = 1;
    }

    for (var i = sign; i < str.length; i++) {
      new_str += str[i];
    }

    return new_str;
  },

  upperFirst: function (str = "") {
    var new_str = "";
    var sign = 0;
    if (str[0].charCodeAt() >= 97 && str[0].charCodeAt() <= 122) {
      new_str += String.fromCharCode(str[0].charCodeAt() - 32);
      sign = 1;
    }

    for (var i = sign; i < str.length; i++) {
      new_str += str[i];
    }

    return new_str;
  },

  parseInt: function (str, radix = 10) {
    if (radix === 16) {
      var num = 0;
      for (let i = str.length - 1; i >= 0; i--) {
        num = str[i] * 16 ** (str.length - 1 - i) + num;
      }

      return num;
    }

    if (radix === 0) {
      return Number(str);
    }

    return Number(str);
  },

  //
  // lang方法 !!!
  //

  isArray: function (value) {
    return Object.prototype.toString.apply(value) === "[object Array]";
  },

  /**
   * gt: 判断value是否大于Other
   * @param {*} value
   * @param {*} other
   * @return {boolean}
   */
  gt: function (value, other) {
    if (value > other) {
      return true;
    }

    return false;
  },

  /**
   * 判断是否是Null或者undefined
   * @param {*}} value
   */
  isNil: function (value) {
    if (value === null || value === undefined) {
      return true;
    }

    return false;
  },

  isNull: function (val) {
    if (val === null) {
      return true;
    } else {
      return false;
    }
  },

  //
  // Math方法!!!
  //

  /**
   * add: 加法
   * @param {number} augend
   * @param {number} addend
   * @return {number}
   */
  add: function (augend, addend) {
    if (typeof augend != "number" || typeof addend != "number") {
      return false;
    }

    return augend + addend;
  },

  /**
   * ceil: 可选位取整, 如果precision为负数, 则为从整数个位数往上取整
   * @param {number} number
   * @param {number} precision
   * @return {number}
   * 思维: 把数字分割成整数和小数部分, 通过判断可选位来研究是处理小数部分还是整数部分.
   */
  ceil: function (number, precision = 0) {
    var aryNum = String(number).split(".");

    if (precision != 0) {
      if (precision > 0 && precision < aryNum[1].length) {
        var n = "";
        for (let i = 0; i < precision; i++) {
          if (i == precision - 1) {
            var x = Number(aryNum[1][i]) + 1;
            n += x;

            aryNum[1] = n;

            return Number(aryNum.join("."));
          } else {
            n += aryNum[1][i];
          }
        }
      }
      if (precision < 0) {
        var n = 0;
        for (let i = 0; i < aryNum[0].length + precision; i++) {
          if (i == aryNum[0].length + precision - 1) {
            n += Number(aryNum[0][i]) + 1;

            var x = aryNum[0].length - String(n).length;

            return n * 10 ** x;
          } else {
            n = n * 10 + Number(aryNum[0][i]) * 10;
          }
        }
      }

      return number;
    } else {
      return Number(aryNum[0]) + 1;
    }
  },

  /**
   * divide: 两个数字相除
   * @param {number} dividend
   * @param {number} divisor
   * @return {number}
   */
  divide: function (dividend, divisor) {
    if (typeof dividend != "number" || typeof divisor != "number") {
      return false;
    }
    return dividend / divisor;
  },

  /**
   * floor: 向下取整
   * @param {number} number
   * @param {number} precision
   * @return {number}
   */
  floor: function (number, precision = 0) {
    var strNum = String(number).split(".");
    if (precision >= 0 && precision < strNum[1].length) {
      let exp = 10 ** -precision;
      return number - (number % exp);
    }
    if (precision < 0 && -precision < strNum[0].length) {
      let exp = 10 ** -precision;
      return number - (number % exp);
    }

    return 0;
  },

  /**
   * max: 返回数组里的最大值
   * @param {array} ary
   * @return {number}
   */
  max: function (ary) {
    var max = -Infinity;

    if (ary === [] || ary == false) {
      return undefined;
    }

    for (let i = 0; i < ary.length; i++) {
      if (max < ary[i]) {
        max = ary[i];
      }
    }

    return max;
  },

  /**
   * mean: 求平均数
   * @param {array} ary
   * @return {number}
   */
  mean: function (ary) {
    var avg = 0;
    var sum = 0;
    for (let i = 0; i < ary.length; i++) {
      sum += ary[i];
    }

    avg = sum / ary.length;

    return avg;
  },

  /**
   * min: 返回数组里的最小值
   * @param {array} ary
   * @return {number}
   */
  min: function (ary) {
    var min = Infinity;

    if (ary === [] || ary == false) {
      return undefined;
    }

    for (let i = 0; i < ary.length; i++) {
      if (min > ary[i]) {
        min = ary[i];
      }
    }

    return min;
  },

  /**
   * 乘法
   * @param {number} multiplier
   * @param {number} multiplicand
   */
  multiply: function (multiplier, multiplicand) {
    return multiplier * multiplicand;
  },

  /**
   * 减法
   * @param {number} minuend
   * @param {number} sub
   */
  subtract: function (minuend, sub) {
    return minuend - sub;
  },

  /**
   * 求和
   * @param {array} ary
   */
  sum: function (ary) {
    let sum = 0;
    for (let i = 0; i < ary.length; i++) {
      sum += ary[i];
    }

    return sum;
  },
};

console.log(silvercoin0214.parseInt("110"));
