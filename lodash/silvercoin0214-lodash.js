var silvercoin0214 = {
  //
  //  Array !!!
  //

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
    // var new_ary = [];
    // for (var i = 0; i < ary.length; i++) {
    //   if (Array.isArray(ary[i])) {
    //     for (var j = 0; j < ary[i].length; j++) {
    //       new_ary.push(ary[i][j]);
    //     }
    //   } else {
    //     new_ary.push(ary[i]);
    //   }
    // }

    // return new_ary;

    return ary.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...item);
      } else {
        result.push(item);
      }

      return result;
    }, []);
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

    // var result = [];
    // ary.forEach((item) => {
    //   if (Array.isArray(item)) {
    //     result.push(...this.flattenDeep(item));
    //   } else {
    //     result.push(item);
    //   }
    // });
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

  /**
   * remove: 删除被选中的元素组成新数组返回, 并且把原数组里的元素也删除
   * @param {array} ary
   * @param {function} predicate
   * @return {array}
   */
  remove: function (ary, predicate = this.identity) {
    var new_ary = [];
    for (let i = 0; i < ary.length; i++) {
      if (predicate(ary[i])) {
        new_ary.push(ary[i]);
      }
    }

    for (let i = 0; i < new_ary.length; i++) {
      if (ary.includes(new_ary[i])) {
        ary.splice(ary.indexOf(new_ary[i]), 1);
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

  /**
   * parseInt: 讲字符串数字转成数字形式, 默认参数如果未定义或者0时为十进制, 如果为16,则认为传入16进制,输出10进制.
   * @param {string} str
   * @param {number} radix
   */
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

  /**
   * repeat: 字符串重复输出
   * @param {string} str
   * @param {number} n
   * @return {string}
   */
  repeat: function (str = "", n = 1) {
    if (n === 0) {
      return "";
    }

    var repeatStr = "";
    for (let i = 0; i < n; i++) {
      repeatStr += str;
    }

    return repeatStr;
  },

  /**
   * replace: 把字符串其中一个片段替换成需要的.
   * @param {string} string
   * @param {string | RegExP} pattern
   * @param {string | Function } replacement
   */
  replace: function (string = "", pattern, replacement) {
    string = string.split(pattern).join(replacement);

    return string;
  },

  /**
   * split: 将字符串按照特定符号切割后返回切割片段组成的数组.
   * @param {string} str
   * @param {string | reg} separator
   * @param {number} limit
   */
  split: function (str = "", separator, limit) {
    var ary = [];
    var cut = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== separator) {
        cut += str[i];
      }
      if (str[i] === separator || i === str.length - 1) {
        ary.push(cut);
        cut = "";
      }
    }

    var reAry = [];
    for (let i = 0; i < limit; i++) {
      reAry.push(ary[i]);
    }

    return reAry;
  },

  /**
   * strtsWith: 判断是否按照规定的字符串开头,可以选择起始位置
   * @param {string} str
   * @param {string} target
   * @param {number} position
   * @return {boolean}
   */
  startsWith: function (str = "", target, position = 0) {
    var cut = "";
    for (let i = position; i < str.length; i++) {
      if (i < position + target.length) {
        cut += str[i];
      }
    }

    if (cut === target) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * trimEnd: 末尾去除指定字符串
   * @param {string} str
   * @param {string} chars
   * @return {string}
   */
  trimEnd: function (str = "", chars = " ") {
    // var newStr = "";
    // for (let i = str.length - 1; i > 0; i--) {
    //   if (!chars.includes(str[i])) {
    //     newStr = str.slice(0, i + 1);
    //     return newStr;
    //   }
    // }

    var j = str.length - 1;
    while (j > 0) {
      if (!chars.includes(str[j])) {
        break;
      }
      j--;
    }
    return str.slice(0, j + 1);
  },

  /**
   * tirmStart: 头部去除指定字符串
   * @param {*} str
   * @param {*} chars
   * @return {string}
   */
  trimStart: function (str = "", chars = " ") {
    // var newStr = "";
    // for (let i = 0; i < str.length; i++) {
    //   if (!chars.includes(str[i])) {
    //     newStr += str.slice(i);
    //     return newStr;
    //   }
    // }

    var i = 0;
    while (i < str.length) {
      if (!chars.includes(str[i])) {
        break;
      }
      i++;
    }
    return str.slice(i);
  },

  /**
   * trim: 两头去除指定字符串
   * @param {string} str
   * @param {string} chars
   * @return {string}
   */
  trim: function (str = "", chars = " ") {
    var newStr = this.trimStart(str, chars);
    return this.trimEnd(newStr, chars);
  },

  unescape: function (str = "") {
    var dict = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
    };

    for (let i in dict) {
      let r = new RegExp(i, "g");
      str = str.replace(r, dict[i]);
    }

    return str;
  },

  //
  // lang方法 !!!
  //

  isArray: function (value) {
    return Object.prototype.toString.apply(value) === "[object Array]";
  },

  isArguments: function (val) {
    return Object.prototype.toString.apply(val) === "[object Arguments]";
  },

  isBoolean: function (val) {
    return Object.prototype.toString.apply(val) === "[object Boolean]";
  },

  isDate: function (val) {
    return Object.prototype.toString.apply(val) === "[object Date]";
  },

  isArrayLike: function (val) {
    if (
      typeof val !== "function" &&
      val.length >= 0 &&
      val.length < Number.MAX_SAFE_INTEGER
    ) {
      return true;
    } else {
      return false;
    }
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

  /**
   * lt:判断value是否小于other
   * @param {*} value
   * @param {*} other
   * @return {boolean}
   */
  lt: function (value, other) {
    if (value < other) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * lte:判断value是否小于等于other
   * @param {*} value
   * @param {*} other
   * @return {boolean}
   */
  lte: function (value, other) {
    if (value <= other) {
      return true;
    } else {
      return false;
    }
  },

  toArray: function (value) {
    var ary = [];
    if (typeof value === "string") {
      ary = value.split("");
    } else if (Array.isArray(value)) {
      return value;
    } else if (typeof value === "object" && !Array.isArray(value)) {
      for (let i in value) {
        ary.push(value[i]);
      }
    } else {
      return [];
    }

    return ary;
  },

  /**
   * 在对象和源之间执行部分深度比较，以确定对象是否包含等效的属性值。
   * @param {object} obj
   * @param {object} source
   */
  isMatch: function (obj, source) {
    // 只能做两层判断, 无法无限叠加下去.
    for (let key in source) {
      if (typeof source[key] === "object") {
        for (let k2 in source[key]) {
          if (source[key][k2] !== obj[key][k2]) {
            return false;
          }
        }
      } else if (source[key] !== obj[key]) {
        return false;
      }
    }

    return true;
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

  /**
   * range: 生成一个从开始到结束的数字数组, 可以设置步长
   * @param {number} start = 0
   * @param {number} end
   * @param {number} step = 1
   */
  range: function (start = 0, end, step = 1) {
    var ary = [];

    if (end === undefined) {
      for (let i = 0; i < start; i = i + step) {
        ary.push(i);
      }

      if (start < 0) {
        for (let i = 0; i > start; i = i - 1) {
          ary.push(i);
        }
      }
    }

    if (step === 0) {
      for (let i = start; i < end; i++) {
        ary.push(start);
      }
    } else {
      for (let i = start; i < end; i = i + step) {
        ary.push(i);
      }

      if (end < 0) {
        if (step < 0) {
          for (let i = start; i > end; i = i + step) {
            ary.push(i);
          }
        } else {
          for (let i = start; i > end; i = i - 1) {
            ary.push(i);
          }
        }
      }
    }

    return ary;
  },

  //
  //  Util !!!
  //

  /**
   * identity: 返回首个提供的参数
   * @param  {...any} value
   * @return {*}
   */
  identity: function (...value) {
    return value[0];
  },

  /**
   * 创建一个函数，该函数在给定对象的路径处返回值。
   * @param {arrray | string} path
   * @return {function}
   */
  property: function (path) {
    var result;
    return function (obj) {
      if (typeof path == "string") {
        path = path.split(".");
      }
      for (let i = 0; i < path.length; i++) {
        obj = obj[path[i]];
      }

      result = obj;

      return result;
    };
  },

  /**
   * 该函数在给定对象和源之间执行部分深度比较，如果给定对象具有相等的属性值，则返回true，否则返回false。
   * @param {object} source
   * @return {function}
   */
  matches: function (source) {
    return function (obj) {
      for (var key in source) {
        if (obj[key] !== source[key]) {
          return false;
        }
      }

      return true;
    };
  },

  //
  //  collection !!!
  //

  /**
   * size: 返回所需要查询元素的个数
   * @param {Array | Object | string} collection
   */
  size: function (collection) {
    if (typeof collection == "string") {
      return collection.length;
    }

    if (collection instanceof Array) {
      console.log(collection);
      return collection.length;
    }

    if (collection instanceof Object && !(collection instanceof Array)) {
      return Object.getOwnPropertyNames(collection).length;
    }
  },

  /**
   * 遍历collection的元素, 并未每个元素调用iteratee
   * @param {Array | Object} collection
   * @param {function} iteratee
   * @return {*}
   */
  forEach: function (collection, iteratee = this.identity) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iteratee(collection[i]);
      }
    } else {
      for (let key in collection) {
        iteratee(collection[key], key);
      }
    }

    return collection;
  },

  /**
   * filter: 返回被筛选为真的所有元素的数组
   * @param {Array | Object} collection
   * @param {Array | Function | Object | string} test
   * @return {Array}
   */
  filter: function (collection, test = this.identity) {
    var result = [];

    var collectFun = function (collection, test) {
      collection.forEach(function (p) {
        if (test(p)) {
          result.push(p);
        }
      });
    };

    var collectStr = function (collection, test) {
      collection.forEach(function (p) {
        if (p[test]) {
          result.push(p);
        }
      });
    };

    var collectObj = function (collection, test) {
      for (let i = 0; i < collection.length; i++) {
        let flag = true;
        for (let j in test) {
          if (test[j] != collection[i][j]) {
            flag = false;
          }
        }
        if (flag) {
          result.push(collection[i]);
        }
      }
    };

    if (Object.prototype.toString.call(test) == "[object Function]") {
      collectFun(collection, test);
    } else if (Object.prototype.toString.call(test) == "[object Object]") {
      collectObj(collection, test);
    } else if (Object.prototype.toString.call(test) == "[object String]") {
      collectStr(collection, test);
    } else {
      for (let i = 0; i < collection.length; i++) {
        if (collection[i][test[0]] == test[1]) {
          result.push(collection[i]);
        }
      }
    }

    return result;
  },

  reduce: function (collection, iteratee = this.identity, initial) {
    if (Array.isArray(collection)) {
      var start = 0;
      if (arguments.length === 2) {
        start = 1;
        initial = collection[0];
      }

      for (let i = start; i < collection.length; i++) {
        initial = iteratee(initial, collection[i]);
      }
    } else {
      for (let i in collection) {
        if (initial === null) {
          initial = { i: collection[i] };
        } else {
          initial = iteratee(initial, collection[i], i);
        }
      }
    }

    return initial;
  },

  keyBy: function (collection, iteratee = this.identity) {
    var result = {};
    if (typeof iteratee == "string") {
      collection.forEach((item) => {
        result[item[iteratee]] = item;
      });
    } else {
      collection.forEach((item) => {
        result[iteratee(item)] = item;
      });
    }

    return result;
  },

  groupBy: function (collection, iteratee = this.identity) {
    var fun = iteratee;
    if (typeof iteratee == "string") {
      fun = (item) => item[iteratee];
    }

    var result = {};
    collection.forEach((item) => {
      var key = fun(item);

      if (!(key in result)) {
        result[key] = [];
      }

      result[key].push(item);
    });

    return result;
  },

  reject: function (collection, predicate = this.identity) {
    return this.filter(collection, this.negate(predicate));
  },

  /**
   *
   * @param {Array | Object}} collection
   * @param {function} iteratee
   * @return {array}
   */
  map: function (collection, iteratee = this.identity) {
    var result = [];

    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (typeof iteratee === "function") {
          result.push(iteratee(collection[i]));
        } else if (typeof iteratee === "string") {
          result.push(collection[i][iteratee]);
        }
      }
    } else {
      for (let i in collection) {
        result.push(iteratee(collection[i]));
      }
    }

    return result;
  },

  every: function (collection, predicate = this.identity) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (!predicate(collection[i])) {
        }
      }
    }
  },

  //
  //  Object !!!
  //

  get: function (obj, path, defaultValue) {
    var result = obj;

    if (typeof path === "string") {
      let reg = /\b\w+\b/g;
      var ary = path.match(reg);
    } else if (Array.isArray(path)) {
      ary = path;
    }

    if (ary.length == 1) {
      return result[ary[0]];
    }

    for (let i of ary) {
      if (i in result) {
        result = result[i];
      } else {
        return defaultValue;
      }
    }

    return result === undefined ? defaultValue : result;
  },

  at: function (object, ...paths) {
    var result = [];
    [].concat(...paths).forEach((item) => result.push(this.get(object, item)));

    return result;
  },

  //
  //  Function !!!
  //

  before: function (n, func) {
    var i = 0;
    var result;
    return function (...args) {
      if (i < n) {
        i++;
        result = func(...args);
      }

      return result;
    };
  },

  after: function (n, func) {
    var i = 0;
    return function () {
      i++;
      if (i > n) {
        return func(...args);
      }
    };
  },

  ary: function (func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n));
    };
  },

  unary: function (func) {
    return function (arg) {
      return func(arg);
    };
  },

  flip: function (func) {
    return function (...args) {
      return func(...args.reverse());
    };
  },

  negate: function (func) {
    return function (...args) {
      return !func(...args);
    };
  },

  spread: function (func, start = 0) {
    return function (ary) {
      return func(...ary);
    };
  },

  bind: function (func, thisArg, partials) {},

  curry: function (func, arity = func.length) {
    return function (...args) {
      if (args.length >= arity) {
        return func(...args);
      } else {
        return curry(func.bind(null, ...args), arity - args.length);
      }
    };
  },
};

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;
