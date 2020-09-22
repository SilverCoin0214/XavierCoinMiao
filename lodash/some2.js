var heavelll = {
  isNull: function (val) {
    if (val === null) {
      return true;
    } else {
      return false;
    }
  },
  isNaN: function (val) {
    if (val !== val) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * 将数组分成多组,每组有size个元素
   * @param ary {Array} 需要拆分的数组
   * @param size {Number} 拆分的大小
   * @returns {Array[][]}
   */
  chunk: function (ary, size = 1) {
    var result = [];
    for (var i = 0; i <= ary.length - 1; i += size) {
      result.push(ary.slice(i, i + size));
    }
    return result;
  },
  /**
   * 清除数组中的错误数值
   * @param ary {Array} 需要进行清除的数组
   * @returns {Array[]}
   */
  compact: function (ary) {
    var result = [];
    for (var i = 0; i <= ary.length - 1; i++) {
      if (Boolean(ary[i])) {
        result.push(ary[i]);
      }
    }
    return result;
  },
  /**
   * 将一个数组和另一个额外的数组或数值进行连接并返回一个新数组
   * @param ary {Array} 需要进行连接的数组
   * @param values {...values} 额外的数组/数值
   * @returns {Array[]}
   */
  concat: function (ary, ...values) {
    var result = ary;
    for (var i = 0; i <= values.length - 1; i++) {
      result.push(values[i]);
    }
    return result;
  },
  /**
   * 将给定数组中不包含额外数组的部分作为一个新数组输出
   * @param ary {Array} 给定的数组
   * @param ary {...others} 额外的数组
   * @returns {Array[]}
   */
  difference: function (ary, ...others) {
    var result = ary;
    var other = [].concat(...others);
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= other.length - 1; j++) {
        if (result[i] === other[j]) {
          result.splice(i, 1);
        }
      }
    }
    return result;
  },
  /**
   * 将给定数组从头删除n项
   * @param {Ary} ary 需要进行删除的数组
   * @param {n = 1} number 删除的项数
   * @returns {ary[]}
   */
  drop: function (ary, n = 1) {
    var result = ary;
    for (var i = 0; i <= n - 1; i++) {
      result.shift();
    }
    return result;
  },
  /**
   * 用数值对数组从选定位置进行填充
   * @param {Array} ary 需要填充的数组
   * @param {value} value 填充所使用的数值
   * @param {number} start 填充的开始位置
   * @param {number} end 填充的结束位置
   * @returns {Array[]}
   */
  fill: function (ary, value, start = 0, end = ary.length) {
    var result = ary;
    for (var i = start; i <= end - 1; i++) {
      result[i] = value;
    }
    return result;
  },
  /**
   * 返回数组的第一个元素
   * @param {Array} ary 需要进行返回的数组
   * @return {value}
   */
  head: function (ary) {
    return ary[0];
  },
  /**
   * 将一个多维数组展开一次
   * @param {Array} ary 需要展开的数组
   */
  flatten: function (ary) {
    var result = [];
    ary.map((arr) => {
      if (Array.isArray(arr)) {
        arr.map((k) => result.push(k));
      } else {
        result.push(arr);
      }
    });
    return result;
  },
  /**
   * 将一个多维数组完全展开
   * @param {Array} array 需要展开的数组
   * @returns {Array}
   */
  flattenDeep: function (ary, result = []) {
    ary.map((arr) => {
      if (Array.isArray(arr)) {
        this.flattenDeep(arr, result);
      } else {
        result.push(arr);
      }
    });
    return result;
  },
  /**
   * 将多维数组展开depth次
   * @param {Array} array 需要展开的数组
   * @param {number} depth 展开次数
   * @returns {Array}
   */
  flattenDepth: function (ary, depth = 1) {
    var result = [];
    var copy = ary;
    for (var i = 0; i < depth; i++) {
      result = this.flatten(copy);
      copy = this.flatten(copy);
    }
    return result;
  },
  /**
   * 从数组的第n个下标开始检索数组中某个数值出现的下标，若n为负则从数组末尾开始补偿
   * @param {Array} ary 需要进行查询的数组
   * @param {number} value 需要进行查询的数值
   * @param {number} n 检索开始的下标
   * @returns {number}
   */
  indexOf: function (ary, value, n = 0) {
    if (n >= 0) {
      for (var i = n; i <= ary.length - 1; i++) {
        if (ary[i] == value) {
          return i;
        }
      }
    }
    if (n < 0) {
      for (var i = ary.length + n; i <= ary.length - 1; i++) {
        if (ary[i] == value) {
          return i;
        }
      }
    }
    return -1;
  },
  /**
   * 将数组的最后一位去掉,得到剩余元素组成的新数组
   * @param {Array} ary 需要去尾的数组
   * @returns {Array}
   */
  initial: function (ary) {
    var result = [];
    for (var i = 0; i <= ary.length - 2; i++) {
      result[i] = ary[i];
    }
    return result;
  },
  /**
   * 将给定数组以字符串输出并以规定字符间隔开
   * @param {Array} ary 需要转换并间隔的数组
   * @param {string} separator 间隔的字符
   * @returns {string}
   */
  join: function (ary, separator = ",") {
    var result = "";
    for (var i = 0; i <= ary.length - 2; i++) {
      result += ary[i] + "" + separator;
    }
    result += ary[ary.length - 1];
    return result;
  },
  /**
   * 得到给定数组的最后一个元素
   * @param {Array} ary 给定的数组
   * @returns {*}
   */
  last: function (ary) {
    return ary[ary.length - 1];
  },
  /**
   * 数组从后往前的第n个开始向前检索给定数值的下标
   * @param {Array} ary 需要检索的数组
   * @param {*} value 需要检索的数值
   * @param {number} n 从后往前第n个开始检索
   * @returns {number}
   */
  lastIndexOf: function (ary, value, n = ary.length - 1) {
    if (n >= 0) {
      for (var i = n; i >= 0; i--) {
        if (value == ary[i]) {
          return i;
        }
      }
    }
    if (n < 0) {
      for (var i = ary.length + n; i >= 0; i--) {
        if (value == ary[i]) {
          return i;
        }
      }
    }
    return -1;
  },
  /**
   * 得到数组中给定下标处的元素,如果给定下标为负，则以数组长度进行补偿
   * @param {Array} ary
   * @param {number} n
   * @return {*}
   */
  nth: function (ary, n = 0) {
    if (n >= 0) {
      return ary[n];
    }
    if (n <= 0) {
      return ary[ary.length + n];
    }
  },
  /**
   * 删除数组中指定的数值
   * @param {Array} ary 需要删除的数组
   * @param  {...*} values 需要删除的数值
   * @returns {Array}
   */
  pull: function (ary, ...values) {
    var result = ary;
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= values.length - 1; j++) {
        if (result[i] == values[j]) {
          result.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return result;
  },
  /**
   * 给定一个数组，删除给定数组中的元素
   * @param {Array} ary 需要被删除的数组
   * @param {Array} values 需要删除的数值
   * @return {Array}
   */
  pullAll: function (ary, values) {
    var result = ary;
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= values.length - 1; j++) {
        if (result[i] == values[j]) {
          result.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return result;
  },
  /**
   * 移除指定下标的元素并返回被移除的元素数组
   * @param {Array} ary 需要进行移除的数组
   * @param  {...numbers|number[]} indexes 需要移除元素的下标
   * @returns {Array}
   */
  pullAt: function (ary, ...indexes) {
    var removed = Array();
    var index = [].concat(...indexes);
    for (var i = 0; i <= index.length - 1; i++) {
      removed[i] = ary[index[i]];
    }
    for (var k = 0; k <= ary.length - 1; k++) {
      for (var l = 0; l <= removed.length - 1; l++) {
        if (ary[k] == removed[l]) {
          ary.splice(k, 1);
          k--;
          break;
        }
      }
    }
    return removed;
  },
  /**
   * 将数组前后颠倒
   * @param {Array} ary 需要颠倒的数组
   * @returns {Array}
   */
  reverse: function (ary) {
    for (var i = 0; i < ary.length / 2; i++) {
      var temp = ary[i];
      ary[i] = ary[ary.length - 1 - i];
      ary[ary.length - 1 - i] = temp;
    }
    return ary;
  },
  /**
   * 将数组从指定的起点截取至指定的终点，返回截取的部分
   * @param {Array} ary 需要被截取的数组
   * @param {number} start 截取的起点下标
   * @param {number} end 截取的终点下标(不包括)
   * @returns {Array}
   */
  slice: function (ary, start = 0, end = ary.length) {
    var result = [];
    for (var i = start, j = 0; i < end; i++, j++) {
      result[j] = ary[i];
    }
    return result;
  },
  /**
   * 用二分法决定给定的数值应该插在数组的能保持顺序的最低下标，返回应插入位置的下标
   * @param {Array} ary 给定的数组
   * @param {*} value 待插入的数值
   * @returns {number}
   */
  sortedIndex: function (ary, value) {
    var start = 0;
    var end = ary.length - 1;
    while (end - start > 1) {
      var middle = ((end + start) / 2) | 0;
      if (ary[middle] >= value) {
        end = middle;
      }
      if (ary[middle] < value) {
        start = middle;
      }
    }
    return ary[start] == value ? start : end;
  },
  /**
   * 在数组中检索数值并返回其所在位置下标，若没有则返回-1
   * @param {Array} ary 需要查找的数组
   * @param {*} value 被检索的数值
   * @returns {number}
   */
  sortedIndexOf: function (ary, value) {
    for (var i = 0; i <= ary.length - 1; i++) {
      if (ary[i] == value) {
        return i;
      }
    }
    return -1;
  },
  /**
   * 得到除第一项以外数组的所有元素
   * @param {Array} ary 需要选择的数组
   * @returns {Array}
   */
  tail: function (ary) {
    var result = [];
    for (var i = 1; i <= ary.length - 1; i++) {
      result.push(ary[i]);
    }
    return result;
  },
  /**
   * 从数组开始处获得n个元素
   * @param {Array} ary 需要选择的数组
   * @param {number} n 提取元素的个数
   * @returns {Array}
   */
  take: function (ary, n = 1) {
    var result = [];
    var len = n - 1 > ary.length - 1 ? ary.length - 1 : n - 1;
    for (var i = 0; i <= len; i++) {
      result[i] = ary[i];
    }
    return result;
  },
  /**
   * 从数组末尾处开始获得n个元素
   * @param {Array} ary 需要选择的数组
   * @param {number} n 提取元素的个数
   * @returns {Array}
   */
  takeRight: function (ary, n = 1) {
    var result = [];
    var len = n - 1 < ary.length - 1 ? ary.length - 1 : n - 1;
    for (var i = ary.length - 1; i > len - n; i--) {
      result.unshift(ary[i]);
    }
    return result;
  },
  /**
   * 将给定数组内的数值变为唯一数
   * @param  {...any} ary 需要变化的数组
   * @returns {Array}
   */
  union: function (...ary) {
    var result = [].concat(...ary);
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i != j && result[i] == result[j]) {
          result.splice(j, 1);
          j--;
        }
      }
    }
    return result;
  },
  /**
   * 将数组内的数值都变为唯一值，只保留第一次出现的元素
   * @param {Array} ary 需要变化的数组
   * @returns {Array}
   */
  uniq: function (ary) {
    var result = ary;
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i != j && result[i] == result[j]) {
          result.splice(j, 1);
          j--;
        }
      }
    }
    return result;
  },
  /**
   * 将分组元素的数组输出为打包前的状态，返回的第一个数组包含所有输入数组的第一元素
   * @param {Array} ary 需要进行重新打包的数组
   * @returns {Array}
   */
  unzip: function (ary) {
    var result = [];
    for (var i = 0; i <= ary[0].length - 1; i++) {
      var fill = [];
      for (var j = 0; j <= ary.length - 1; j++) {
        fill[j] = ary[j][i];
      }
      result.push(fill);
    }
    return result;
  },
  /**
   * 将给定元素从数组中删除，并返回一个新数组
   * @param {Array} ary 需要进行删除的数组
   * @param  {...any} values 需要删除的数值
   * @returns {Array}
   */
  without: function (ary, ...values) {
    var result = [].concat(ary);
    for (var i = 0; i <= values.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (values[i] == result[j]) {
          result.splice(j, 1);
          j--;
        }
      }
    }
    return result;
  },
  /**
   * 创建一个给定数组唯一值的数组，返回顺序取决于他们数组的出现顺序
   * @param  {...Array} ary 需要检查的数组
   * @returns {Array};
   */
  xor: function (...ary) {
    var result = [].concat(...ary);
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i !== j && result[i] === result[j]) {
          var del = result[i];
          while (result.indexOf(del) !== -1) {
            result.splice(result.indexOf(del), 1);
          }
          i--;
          break;
        }
      }
    }
    return result;
  },
  /**
   * 将返回的第一个数组内包含所有输入数组的第一元素，返回的第二个数组包含所有输入数组的第二元素，以此类推
   * @param  {...Array} ary 需要进行的数组
   * @returns {Array}
   */
  zip: function (...ary) {
    var result = [];
    for (var i = 0; i <= ary[0].length - 1; i++) {
      var fill = [];
      for (var j = 0; j <= ary.length - 1; j++) {
        fill[j] = ary[j][i];
      }
      result.push(fill);
    }
    return result;
  },
  /**
   * 将给定的属性名和属性值传入对象
   * @param {Array} props 属性名
   * @param {Array} values 属性值
   * @returns {Object}
   */
  zipObject: function (props = [], values = []) {
    var result = {};
    var temp = values.length;
    for (var i = 0; i <= props.length - 1; i++) {
      result[props[i]] = values[i];
    }
    return result;
  },
  /**
   * 从集合下标处检查值是否在集合中，如果集合是一个字符串，则检测子字符串是否在字符串中
   * @param {Array|Object|string} collection 需要检测的集合
   * @param {*} value 需要检测的值
   * @param {number} fromIndex 检测下标
   * @returns {boolean}
   */
  includes: function (collection, value, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex = collection.length + fromIndex;
    }
    if (typeof collection == "string") {
      if (
        collection.indexOf(value) != -1 &&
        collection.indexOf(value) >= fromIndex
      ) {
        return true;
      }
    } else if (Array.isArray(collection)) {
      for (var i = fromIndex; i <= collection.length - 1; i++) {
        if (collection[i] == value) {
          return true;
        }
      }
    } else if (typeof collection == "object") {
      var save = [];
      for (var key in collection) {
        save.push(key);
      }
      for (var i = fromIndex; i <= save.length - 1; i++) {
        if (collection[save[i]] == value) {
          return true;
        }
      }
    }
    return false;
  },
  /**
   * 从集合中得到一个随机元素
   * @param {Array|Object} collection 待提取的集合
   * @returns {*}
   */
  sample: function (collection) {
    if (Array.isArray(collection)) {
      var len = collection.length;
      var rand = Math.floor(Math.random() * len);
      return collection[rand];
    } else if (typeof collection == "object" && collection != null) {
      var obj = Object.keys(collection);
      var len = obj.length;
      var rand = Math.floor(Math.random() * len);
      return collection[obj[rand]];
    }
  },
  /**
   * 从集合中获取n个随机元素
   * @param {Array|Object} collection 待提取的集合
   * @param {number} n 提取元素的个数
   * @returns {Array}
   */
  sampleSize: function (collection, n = 1) {
    var temp = [];
    if (Array.isArray(collection)) {
      for (var i = 0; i < n && collection.length > 0; i++) {
        var len = collection.length;
        var rand = Math.floor(Math.random() * len);
        temp.push(collection[rand]);
        collection.splice(rand, 1);
      }
    } else if (typeof collection == "object" && collection != null) {
      var obj = Object.keys(collection);
      for (var i = 0; i < n && obj.length > 0; i++) {
        var len = obj.length;
        var rand = Math.floor(Math.random() * len);
        temp.push(collection[obj[rand]]);
        obj.splice(rand, 1);
      }
    }
    return temp;
  },
  /**
   * 将给定集合重新排列并以数组输出
   * @param {Array|Object} collection 需要排列的集合
   * @returns {Array}
   */
  shuffle: function (collection) {
    var temp = [];
    if (Array.isArray(collection)) {
      for (var len = collection.length; len > 0; len--) {
        var rand = Math.floor(Math.random() * len);
        temp.push(collection[rand]);
        collection.splice(rand, 1);
      }
    } else if (typeof collection == "object" && collection != null) {
      var obj = Object.keys(collection);
      for (var len = obj.length; len > 0; len--) {
        var rand = Math.floor(Math.random() * len);
        temp.push(collection[obj[rand]]);
        obj.splice(rand, 1);
      }
    }
    return temp;
  },
  /**
   * 获取集合的长度值
   * @param {Array|Object|string} collection 需要获取长度的集合
   * @returns {number}
   */
  size: function (collection) {
    if (typeof collection == "string" || Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection == "object" && collection != null) {
      return Object.keys(collection).length;
    }
    return 0;
  },
  /**
   * 使用SameValueZero算法比较两个值是否相等
   * @param {*} value 待比较的值
   * @param {*} other 待比较的值
   * @returns {boolean}
   */
  eq: function (value, other) {
    if (value === other || (value !== value && other !== other)) {
      return true;
    }
    return false;
  },
  /**
   * 检测给定的值是否大于其他值
   * @param {*} value 待比较的值
   * @param {*} other 待比较的值
   * @returns {boolean}
   */
  gt: function (value, other) {
    return value > other;
  },
  /**
   * 检测给定的值是否大于或等于其他值
   * @param {*} value 待比较的值
   * @param {*} other 待比较的值
   * @returns {boolean}
   */
  gte: function (value, other) {
    return value >= other;
  },
  /**
   * 检测给定的值是否小于其他值
   * @param {*} value 待比较的值
   * @param {*} other 待比较的值
   * @returns {boolean}
   */
  lt: function (value, other) {
    return value < other;
  },
  /**
   * 检测给定的值是否小于或等于其他值
   * @param {*} value 待比较的值
   * @param {*} other 待比较的值
   * @returns {boolean}
   */
  lte: function (value, other) {
    return value <= other;
  },
  /**
   * 将给定数值相加
   * @param {number} augend 待相加的值
   * @param {number} addend 待相加的值
   * @returns {number}
   */
  add: function (augend, addend) {
    return augend + addend;
  },
  /**
   * 将两数相除
   * @param {number} divided 被除数
   * @param {number} divisor 除数
   * @returns {number}
   */
  divide: function (divided, divisor) {
    return divided / divisor;
  },
  /**
   * 将给定数值保留固定位，向下取整
   * @param {number} number 给定数值
   * @param {number} precision 保留位数
   * @returns {number}
   */
  floor: function (number, precision = 0) {
    var temp = 1;
    if (precision >= 0) {
      for (var i = 1; i <= precision; i++) {
        temp *= 10;
      }
      number = ((number * temp) | 0) / temp;
    } else {
      precision *= -1;
      for (var i = 1; i <= precision; i++) {
        temp *= 10;
      }
      number = ((number / temp) | 0) * temp;
    }
    return number;
  },
  /**
   * 返回数组中的最大值，如果数组是空的或错误的，返回undefined
   * @param {Array} ary 待比较的数组
   * @returns {*}
   */
  max: function (ary) {
    var max = ary[0];
    for (var i = 1; i <= ary.length - 1; i++) {
      if (ary[i] !== ary[i] || typeof ary[i] != "number") {
        return undefined;
      }
      if (ary[i] > max) {
        max = ary[i];
      }
    }
    return max;
  },
  /**
   * 计算数组所有数的平均值
   * @param {Array} ary 待计算的数组
   * @returns {number}
   */
  mean: function (ary) {
    var sum = 0;
    var count = 0;
    for (var i of ary) {
      sum += i;
      count++;
    }
    return sum / count;
  },
  /**
   * 返回数组中的最小值如果数组是空的或错误的，返回undefined
   * @param {Array} ary 待比较的数组
   * @returns {*}
   */
  min: function (ary) {
    var min = ary[0];
    for (var i = 1; i <= ary.length - 1; i++) {
      if (ary[i] !== ary[i] || typeof ary[i] != "number") {
        return undefined;
      }
      if (ary[i] < min) {
        min = ary[i];
      }
    }
    return min;
  },
  /**
   * 将两数相乘
   * @param {number} multiplier 乘数
   * @param {number} multiplicand 乘数
   * @returns {number}
   */
  multiply: function (multiplier, multiplicand) {
    return multiplier * multiplicand;
  },
  /**
   * 将两数相减
   * @param {number} minuend 被减数
   * @param {number} subtrahend 减数
   * @returns {number}
   */
  substract: function (minuend, subtrahend) {
    return minuend - subtrahend;
  },
  /**
   * 将数组内所有数相加
   * @param {Array} ary 需要计算的数组
   * @returns {number}
   */
  sum: function (ary) {
    var sum = 0;
    for (var i of ary) {
      sum += i;
    }
    return sum;
  },
  /**
   * 将所有对象的属性从左向右放入一个对象并返回，同时有相同的属性值则忽略后面的属性
   * @param {Object} object
   * @param  {...Object} sources
   * @returns {Object}
   */
  default: function (object, ...sources) {
    for (var i = 0; i <= sources.length - 1; i++) {
      for (var obj in sources[i]) {
        if (obj in object) {
          continue;
        } else {
          object[obj] = sources[i][obj];
        }
      }
    }
    return object;
  },
  /**
   * 创建一个object键和数值倒置的对象
   * @param {Object} object 待处理的对象
   * @returns {Object}
   */
  invert: function (object) {
    var newobj = {};
    var tmp = Object.keys(object);
    for (var i = 0; i <= tmp.length - 1; i++) {
      newobj[object[tmp[i]]] = tmp[i];
    }
    return newobj;
  },
  /**
   * 将对象的键值以数组的形式输出
   * @param {Object} object 待检索的对象
   * @returns {Array}
   */
  keys: function (object) {
    var ary = [];
    var key = Object.keys(object);
    for (var i of key) {
      ary.push(i);
    }
    return ary;
  },
  /**
   * 将来源对象中的属性从左到右分配到目标对象中，相同的属性后面的会覆盖前面的
   * @param {Object} object 待分配的目标对象
   * @param  {...Object} sources 来源对象
   * @returns {Object}
   */
  assign: function (object, ...sources) {
    for (var i = 0; i <= sources.length - 1; i++) {
      var tmp = Object.keys(sources[i]);
      for (var j = 0; j <= tmp.length - 1; j++) {
        object[tmp[j]] = sources[i][tmp[j]];
      }
    }
    return object;
  },
  /**
   * 将目标对象中含来源的属性删除
   * @param {Object} object 待处理的对象
   * @param  {...string|string[]} paths 待删除的属性
   * @returns {Object}
   */
  omit: function (object, ...paths) {
    var tmp = [].concat(...paths);
    for (var i = 0; i <= tmp.length - 1; i++) {
      if (tmp[i] in object) {
        delete object[tmp[i]];
      }
    }
    return object;
  },
  /**
   * 从指定对象中提取属性值，返回到一个新对象中
   * @param {Object} object 待选择的对象
   * @param  {...string|string[]} paths 选择的路径
   * @returns {Object}
   */
  pick: function (object, ...paths) {
    var obj = {};
    var tmp = [].concat(...paths);
    for (var i = 0; i <= tmp.length - 1; i++) {
      if (tmp[i] in object) {
        obj[tmp[i]] = object[tmp[i]];
      }
    }
    return obj;
  },
  /**
   * 将对象可枚举的属性值以数组的形式返回
   * @param {Object} object 待选择的对象
   * @returns {Array}
   */
  values: function (object) {
    var ary = [];
    var tmp = Object.keys(object);
    for (var i = 0; i <= tmp.length - 1; i++) {
      ary[i] = object[tmp[i]];
    }
    return ary;
  },
  /**
   * 将字符串转为驼峰形式
   * @param {string} string 待转换字符串
   * @returns {string}
   */
  camelCase: function (string = "") {
    var ary = [];
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(String.fromCharCode(string.charCodeAt(i) - 32));
        } else if (
          (string.charCodeAt(i - 1) >= 65 && string.charCodeAt(i - 1) <= 90) ||
          (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
        ) {
          ary.push(string[i]);
        } else if (!string[i - 1]) {
          ary.push(string[i]);
        }
      } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(string[i]);
        } else if (
          string.charCodeAt(i - 1) >= 97 &&
          string.charCodeAt(i - 1) <= 122
        ) {
          ary.push(string[i]);
        } else if (
          string.charCodeAt(i - 1) >= 65 &&
          string.charCodeAt(i - 1) <= 90
        ) {
          if (
            string.charCodeAt(i + 1) >= 97 &&
            string.charCodeAt(i + 1) <= 122
          ) {
            ary.push(string[i]);
          } else {
            ary.push(String.fromCharCode(string.charCodeAt(i) + 32));
          }
        } else if (!string[i - 1]) {
          ary.push(string[i]);
        }
      }
    }
    var result = "";
    for (var j = 0; j <= ary.length - 1; j++) {
      if (j == 0) {
        if (ary[j].charCodeAt(0) >= 65 && ary[j].charCodeAt(0) <= 90) {
          result += String.fromCharCode(ary[j].charCodeAt(0) + 32);
          continue;
        }
      }
      result += ary[j];
    }
    return result;
  },
  /**
   * 将给定字符串的首字母大写，其余字母小写
   * @param {string} string 待转换的字符串
   * @returns {string}
   */
  capitalize: function (string = "") {
    var result = "";
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        if (i != 0) {
          result += String.fromCharCode(string.charCodeAt(i) + 32);
          continue;
        }
      }
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122 && i == 0) {
        result += String.fromCharCode(string.charCodeAt(i) - 32);
        continue;
      }
      result += string[i];
    }
    return result;
  },
  /**
   * 检测字符串是否以给定的字符结束
   * @param {string} string 需要检测的字符串
   * @param {string} target 给定字符
   * @param {number} position 搜索位置，默认为字符串结尾
   * @returns {boolean}
   */
  endsWith: function (string = "", target, position = string.length) {
    if (target.length > position) {
      return false;
    }
    for (var i = 0; i <= target.length - 1; i++) {
      if (target[target.length - 1 - i] != string[position - 1 - i]) {
        return false;
      }
    }
    return true;
  },
  /**
   * 将字符串内 "&", "<", ">" , '"' 和 "'"转义为HTML实体字符
   * @param {string} string 待处理的字符串
   * @returns {string}
   */
  escape: function (string = "") {
    var result = "";
    for (var i = 0; i <= string.length - 1; i++) {
      switch (string[i]) {
        case "&":
          result += "&amp;";
          break;
        case "<":
          result += "&lt;";
          break;
        case ">":
          result += "&gt;";
          break;
        case '"':
          result += "&quot;";
          break;
        case "'":
          result += "&apos;";
          break;
        default:
          result += string[i];
          break;
      }
    }
    return result;
  },
  /**
   * 将字符串转换为kebab case
   * @param {string} string 待转换的数组
   * @returns {string}
   */
  kebabCase: function (string = "") {
    var ary = [];
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(String.fromCharCode(string.charCodeAt(i) - 32));
        } else if (
          (string.charCodeAt(i - 1) >= 65 && string.charCodeAt(i - 1) <= 90) ||
          (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
        ) {
          ary.push(string[i]);
        } else if (!string[i - 1]) {
          ary.push(string[i]);
        }
      } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(string[i]);
        } else if (
          string.charCodeAt(i - 1) >= 97 &&
          string.charCodeAt(i - 1) <= 122
        ) {
          ary.push(string[i]);
        } else if (
          string.charCodeAt(i - 1) >= 65 &&
          string.charCodeAt(i - 1) <= 90
        ) {
          if (
            string.charCodeAt(i + 1) >= 97 &&
            string.charCodeAt(i + 1) <= 122
          ) {
            ary.push(string[i]);
          } else {
            ary.push(String.fromCharCode(string.charCodeAt(i) + 32));
          }
        } else if (!string[i - 1]) {
          ary.push(string[i]);
        }
      }
    }
    var result = "";
    for (var j = 0; j <= ary.length - 1; j++) {
      if (ary[j].charCodeAt(0) >= 65 && ary[j].charCodeAt(0) <= 90) {
        if (j == 0) {
          result += String.fromCharCode(ary[j].charCodeAt(0) + 32);
          continue;
        }
        result += "-" + String.fromCharCode(ary[j].charCodeAt(0) + 32);
      } else {
        result += ary[j];
      }
    }
    return result;
  },
  /**
   * 将字符串中的字母转换为小写，单词以空格隔开
   * @param {string} string 待转换的字符串
   * @returns {string}
   */
  lowerCase: function (string = "") {
    var ary = [];
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(String.fromCharCode(string.charCodeAt(i) - 32));
        } else if (
          (string.charCodeAt(i - 1) >= 65 && string.charCodeAt(i - 1) <= 90) ||
          (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
        ) {
          ary.push(string[i]);
        } else if (!string[i - 1]) {
          ary.push(string[i]);
        }
      } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(string[i]);
        } else if (
          string.charCodeAt(i - 1) >= 97 &&
          string.charCodeAt(i - 1) <= 122
        ) {
          ary.push(string[i]);
        } else if (
          string.charCodeAt(i - 1) >= 65 &&
          string.charCodeAt(i - 1) <= 90
        ) {
          if (
            string.charCodeAt(i + 1) >= 97 &&
            string.charCodeAt(i + 1) <= 122
          ) {
            ary.push(string[i]);
          } else {
            ary.push(String.fromCharCode(string.charCodeAt(i) + 32));
          }
        } else if (!string[i - 1]) {
          ary.push(string[i]);
        }
      }
    }
    var result = "";
    for (var j = 0; j <= ary.length - 1; j++) {
      if (ary[j].charCodeAt(0) >= 65 && ary[j].charCodeAt(0) <= 90) {
        if (j == 0) {
          result += String.fromCharCode(ary[j].charCodeAt(0) + 32);
          continue;
        }
        result += " " + String.fromCharCode(ary[j].charCodeAt(0) + 32);
      } else {
        result += ary[j];
      }
    }
    return result;
  },
  /**
   * 将字符串第一项字母转为小写
   * @param {string} string 待转换的字符串
   * @returns {string}
   */
  lowerFirst: function (string = "") {
    var result = "";
    for (var i = 0; i <= string.length - 1; i++) {
      if (
        i == 0 &&
        string[i].charCodeAt(0) >= 65 &&
        string[i].charCodeAt(0) <= 90
      ) {
        result += String.fromCharCode(string[i].charCodeAt(0) + 32);
        continue;
      }
      result += string[i];
    }
    return result;
  },
  /**
   * 如果字符串长度不够，则使用给定字符在两侧填充
   * @param {string} string 待处理字符串
   * @param {number} length 规定长度
   * @param {string} chars 填充字符
   * @returns {string}
   */
  pad: function (string = "", length = 0, chars = " ") {
    if (string.length >= length) {
      return string;
    }
    var ary = [];
    var len = ((length - string.length) / 2) | 0;
    var timel = (len / chars.length) | 0;
    var reml = len % chars.length;
    for (var i = 1; i <= timel; i++) {
      for (var j = 0; j <= chars.length - 1; j++) {
        ary.push(chars[j]);
      }
    }
    for (var k = 0; k <= reml - 1; k++) {
      ary.push(chars[k]);
    }
    for (var l = 0; l <= string.length - 1; l++) {
      ary.push(string[l]);
    }
    if ((length - string.length) % 2 != 0) {
      var timer = ((len + 1) / chars.length) | 0;
      var remr = (len + 1) % chars.length;
    } else {
      var timer = timel;
      var remr = reml;
    }
    for (var m = 1; m <= timer; m++) {
      for (var n = 0; n <= chars.length - 1; n++) {
        ary.push(chars[n]);
      }
    }
    for (var p = 0; p <= remr - 1; p++) {
      ary.push(chars[p]);
    }
    var result = "";
    for (var q = 0; q <= ary.length - 1; q++) {
      result += ary[q];
    }
    return result;
  },
  /**
   * 如果字符串长度不够，则使用给定字符在右侧填充
   * @param {string} string 待处理字符串
   * @param {number} length 规定长度
   * @param {string} chars 填充字符
   * @returns {string}
   */
  padEnd: function (string = "", length = 0, chars = " ") {
    if (string.length >= length) {
      return string;
    }
    var times = ((length - string.length) / chars.length) | 0;
    var rem = (length - string.length) % chars.length;
    var result = "";
    for (var i = 0; i <= string.length - 1; i++) {
      result += string[i];
    }
    for (var j = 1; j <= times; j++) {
      for (var k = 0; k <= chars.length - 1; k++) {
        result += chars[k];
      }
    }
    for (var m = 0; m <= rem - 1; m++) {
      result += chars[m];
    }
    return result;
  },
  /**
   * 如果字符串长度不够，则使用给定字符在左侧填充
   * @param {string} string 待处理字符串
   * @param {number} length 规定长度
   * @param {string} chars 填充字符
   * @returns {string}
   */
  padStart: function (string = "", length = 0, chars = " ") {
    if (string.length >= length) {
      return string;
    }
    var times = ((length - string.length) / chars.length) | 0;
    var rem = (length - string.length) % chars.length;
    var result = "";
    for (var j = 1; j <= times; j++) {
      for (var k = 0; k <= chars.length - 1; k++) {
        result += chars[k];
      }
    }
    for (var m = 0; m <= rem - 1; m++) {
      result += chars[m];
    }
    for (var i = 0; i <= string.length - 1; i++) {
      result += string[i];
    }
    return result;
  },
  /**
   * 重复给定的字符串数遍
   * @param {string} string 待重复的字符串
   * @param {number} n 重复的遍数
   * @returns {string}
   */
  repeat: function (string = "", n = 1) {
    var result = "";
    for (var i = 1; i <= n; i++) {
      result += string;
    }
    return result;
  },
  /**
   * 将字符串内指定字段替换
   * @param {string} string 待替换字符串
   * @param {RegExp|string} pattern 待替换字段
   * @param {*} replacement 替换字段
   * @returns {string}
   */
  replace: function (string = "", pattern, replacement) {
    var result = "";
    var tmp = string.indexOf(pattern);
    if (tmp == -1) {
      return string;
    }
    for (var i = 0; i <= tmp - 1; i++) {
      result += string[i];
    }
    for (var j = 0; j <= replacement.length - 1; j++) {
      result += replacement[j];
    }
    for (var k = tmp + pattern.length; k <= string.length - 1; k++) {
      result += string[k];
    }
    return result;
  },
  /**
   * 将字符串转化为snakeCase
   * @param {string} string 待转换的字符串
   * @returns {string}
   */
  snakeCase: function (string = "") {
    var ary = [];
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(String.fromCharCode(string.charCodeAt(i) - 32));
        } else if (
          (string.charCodeAt(i - 1) >= 65 && string.charCodeAt(i - 1) <= 90) ||
          (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
        ) {
          ary.push(string[i]);
        } else if (!string[i - 1]) {
          ary.push(string[i]);
        }
      } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(string[i]);
        } else if (
          string.charCodeAt(i - 1) >= 97 &&
          string.charCodeAt(i - 1) <= 122
        ) {
          ary.push(string[i]);
        } else if (
          string.charCodeAt(i - 1) >= 65 &&
          string.charCodeAt(i - 1) <= 90
        ) {
          if (
            string.charCodeAt(i + 1) >= 97 &&
            string.charCodeAt(i + 1) <= 122
          ) {
            ary.push(string[i]);
          } else {
            ary.push(String.fromCharCode(string.charCodeAt(i) + 32));
          }
        } else if (!string[i - 1]) {
          ary.push(string[i]);
        }
      }
    }
    var result = "";
    for (var j = 0; j <= ary.length - 1; j++) {
      if (ary[j].charCodeAt(0) >= 65 && ary[j].charCodeAt(0) <= 90) {
        if (j == 0) {
          result += String.fromCharCode(ary[j].charCodeAt(0) + 32);
          continue;
        }
        result += "_" + String.fromCharCode(ary[j].charCodeAt(0) + 32);
      } else {
        result += ary[j];
      }
    }
    return result;
  },
  /**
   * 按字符串中的指定符号分离，并以数组输出
   * @param {string} string 待分离的字符串
   * @param {RegExp|string} separator 分离符号
   * @param {number} limit 个数限值
   * @returns {number}
   */
  split: function (string = "", separator, limit) {
    var ary = [];
    var str = "";
    for (var i = 0; i <= string.length - 1; i++) {
      if (string[i] == separator) {
        ary.push(str);
        str = "";
        i += separator.length - 1;
        continue;
      }
      if (ary.length >= limit) {
        break;
      }
      str += string[i];
    }
    if (ary.length < limit || !limit) {
      ary.push(str);
    }
    return ary;
  },
  /**
   * 将字符串转化为start case
   * @param {string} string 待转换的字符串
   * @returns {string}
   */
  snakeCase: function (string = "") {
    var ary = [];
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        if (
          !(
            (string.charCodeAt(i - 1) >= 65 &&
              string.charCodeAt(i - 1) <= 90) ||
            (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
          ) &&
          string[i - 1]
        ) {
          ary.push(String.fromCharCode(string.charCodeAt(i) - 32));
        } else if (
          (string.charCodeAt(i - 1) >= 65 && string.charCodeAt(i - 1) <= 90) ||
          (string.charCodeAt(i - 1) >= 97 && string.charCodeAt(i - 1) <= 122)
        ) {
          ary.push(string[i]);
        } else if (!string[i - 1]) {
          ary.push(String.fromCharCode(string.charCodeAt(i) - 32));
        }
      } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        ary.push(string[i]);
      }
    }
    var result = "";
    for (var j = 0; j <= ary.length - 1; j++) {
      if (ary[j].charCodeAt(0) >= 65 && ary[j].charCodeAt(0) <= 90) {
        if (j !== 0) {
          result += " " + ary[j];
        } else if (j == 0) {
          result += ary[j];
        }
      } else {
        result += ary[j];
      }
    }
    return result;
  },
  /**
   * 检测字符串是否是以某字段开头
   * @param {string} string 待检测的字符串
   * @param {string} target 待检测的字段
   * @param {number} position 检测位置
   * @returns {boolean}
   */
  startsWith: function (string = "", target, position = 0) {
    if (target.length > string.length) {
      return false;
    }
    for (var i = 0; i <= target.length - 1; i++) {
      if (string[i + position] != target[i]) {
        return false;
      }
    }
    return true;
  },
  /**
   * 返回接受的第一个参数
   * @param {*} value 任何参数
   * @returns {*}
   */
  identity: function (value) {
    return value;
  },
  /**
   * 创建一个函数，当他被调用n次或更多次时立即执行func
   * @param {number} n func执行之前函数被调用的次数
   * @param {Function} func 被执行的函数
   * @returns {function}
   */
  after: function (n, func) {
    var count = 0;
    var result;
    return function (...args) {
      count++;
      if (count >= n) {
        result = func(...args);
      }
      return result;
    };
  },
  /**
   * 执行func接受n个传参，忽略多余的传参
   * @param {Function} func 待执行的方法
   * @param {number} n 接受参数的个数
   * @returns {Function}
   */
  ary: function (func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n));
    };
  },
  /**
   * 在函数调用次数小于n时前执行方法func
   * @param {number} n func不再执行的次数
   * @param {Function} func 待执行的方法
   * @returns {Function}
   */
  before: function (n, func) {
    var count = 0;
    var restult;
    return function (...args) {
      if (count < n) {
        count++;
        result = func(...args);
      }
      return result;
    };
  },
  /**
   *
   * @param {Function} func 需要绑定的函数
   * @param {*} thisArg func绑定的this
   * @param {...*} partials 被func接收的附加参数
   * @returns {Function}
   */
  bind: function (func, ...partials) {
    return function (...args) {
      var copy = partials.slice();
      var j = 0;
      for (var i = 0; i <= copy.length - 1; i++) {
        if (copy[i] == null) {
          copy[i] = args[j++];
        }
      }
      while (j < args.length) {
        copy.push(args[j++]);
      }
      return func(copy);
    };
  },
  /**
   * 创建一个函数，接受func的参数，要么调用func返回的结果，如果func所需参数已经提供，则返回func所执行的结果。或者返回一个函数，
   * 接受余下的func参数的函数，可以使用func.length强制需要累积的参数个数
   * @param {Function} func 需要柯里化的函数
   * @param {number} arity 需要传给func的参数数量
   * @returns {Function}
   */
  curry: function (func, arity = func.length) {
    return function (...args) {
      if (args.length >= arity) {
        return func(...args);
      } else {
        return curry(func.bind(null, ...args), arity - args.length);
      }
    };
  },
  /**
   * 接收字符串/数组返回其中的数值
   * @param {Array|string} path 待处理的字符串/数组
   * @returns {Function}
   */
  property: function (path) {
    return function (obj) {
      return obj[path];
    };
  },
  /**
   * 创建一个函数,调用func时，this绑定到创建的新函数，把参数作为数组传入
   * @param {Function} func 用于传播参数的函数
   * @param {number} start 起始位置
   * @returns {Function}
   */
  spread: function (func, start = 0) {
    return function (args) {
      return func(...args);
    };
  },
  /**
   * 将二维数组数组转化为对象，数组前一项为属性名，后一项为属性值
   * @param {Array} pairs 需要转化的数组
   * @returns {Object}
   */
  fromPairs: function (pairs) {
    var obj = {};
    for (var i = 0; i <= pairs.length - 1; i++) {
      obj[pairs[i][0]] = pairs[i][1];
    }
    return obj;
  },
  /**
   * 创建一个函数判断一个给定的对象和参数source，如果给定对象中有与source相同的属性，返回true，否则返回false
   * @param {Object} source 待匹配的对象
   * @returns {Function}
   */
  matches: function (source) {
    return function (obj) {
      for (var key in source) {
        if (obj[key] != source[key]) {
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
      if (obj[path] == srcValue) {
        return true;
      } else {
        return false;
      }
    };
  },
  /**
   * 创建一个函数，通过创建的参数调用func函数，如果func是一个属性名，传入包含这个属性名的对象，回调返回这个属性名的
   * 对象，如果func是一个对象，传入的元素有相同的对象属性，回调返回true，其他情况返回false
   * @param {*} func 转换程callback的值
   * @returns {Function}
   */
  iteratee: function (func = heavelll.identity) {
    if (typeof func === "string") {
      func = heavelll.property(func);
    }
    if (Array.isArray(func)) {
      func = heavelll.matchesProperty(func[0], func[1]);
    }
    if (typeof func === "object") {
      func = heavelll.matches(func);
    }
    return func;
  },
  /**
   * 使函数接受传入次序反转的参数
   * @param {Function} func 调用的函数
   * @returns {Function}
   */
  flip: function (func) {
    return function (...args) {
      return func(...args.reverse());
    };
  },
  /**
   * 使函数只接受一个参数，忽略其余参数
   * @param {Function} func 调用的函数
   * @returns {Function}
   */
  unary: function (func) {
    return function (arg) {
      return func(arg);
    };
  },
  /**
   * 将函数判断结果取反
   * @param {Function} predicate 调用的函数
   * @returns {Function}
   */
  negate: function (predicate) {
    return function (...args) {
      return !predicate(...args);
    };
  },
  /**
   * 对传入的集合用函数进行筛选并以数组的形式返回
   * @param {Array|Object} collection 待处理的集合
   * @param {Function} predicate 筛选函数
   * @returns {Array}
   */
  filter: function (collection, predicate = heavelll.identity) {
    var func = this.iteratee(predicate);
    var result = [];
    for (var key in collection) {
      if (func(collection[key])) {
        result.push(collection[key]);
      }
    }
    return result;
  },
  // /**
  //  * 创建一个函数，提供的value包装在wrapper函数的第一个参数里，任何附加的参数都提供给wrapper参数
  //  * @param {*} value 需要包装的值
  //  * @param {Function} wrapper 包装函数
  //  * @returns {Function}
  //  */
  // warp: function(value, wrapper = heavelll.identity) {
  //   return function() {
  //   }
  // },
  /**
    //  * 接受iteratee调用array中的每个元素，对值进行相加处理
    //  * @param {Array} array 待处理数组
    //  * @param {Function} iteratee 处理函数
    //  * @returns {number}
    //  */
  // sumBy: function(array, iteratee = heavelll.identity) {
  //   var sum = 0;
  //   var test = iteratee;
  //   test = heavelll.iteratee(test);
  //   for(var i = 0; i <= array.length - 1; i++) {
  //     sum += array[i]
  //   }
  //   return sum;
  // },
  /**
   * 创建一个函数，在一次调用之后返回的结果都为第一次调用时的结果
   * @param {Function} func 被约束的函数
   * @returns {Function}
   */
  once: function (func) {
    var flag = true;
    var save;
    return function (arg) {
      if (flag) {
        flag = false;
        save = func(arg);
      }
      return save;
    };
  },
  /**
   * 创建一个可以缓存func结果的函数，如果提供了resolver函数，则以resolver的返回值作为key缓存函数的结果，默认使用第一个参数作为缓存的key
   * @param {Function} func 需要缓存的函数
   * @param {Function} resolver 此函数返回值为缓存的key
   * @returns {Function}
   */
  memoize: function (func, resolver) {
    var save;
    return function (...args) {
      save = func(...args);
      return save;
    };
  },
  /**
   * 创建一个对象自身可枚举属性的键值对数组
   * @param {Object} object 要检索的对象
   * @returns {Array}
   */
  toPairs: function (object) {
    var save = [];
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var ary = [];
        ary[0] = key;
        ary[1] = object[key];
        save.push(ary);
      }
    }
    return save;
  },
  /**
   * 将给定字符串字母大写，并以空格分隔
   * @param {string} string 待处理字符串
   * @returns {string}
   */
  upperCase: function (string = "") {
    var save = string;
    save = save.replace(/^[^a-zA-Z0-9]*?(?=[a-zA-Z0-9])/, "");
    save = save.replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]*?$/, "");
    save = save.replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+?(?=[a-zA-Z0-9])/g, " ");
    var result = "";
    for (var i = 0; i <= save.length - 1; i++) {
      if (save.charCodeAt(i) >= 97 && save.charCodeAt(i) <= 122) {
        result += String.fromCharCode(save.charCodeAt(i) - 32);
        continue;
      }
      result += save[i];
    }
    return result;
  },
  /**
   * 将给定字符串中的小写字母转换为大写
   * @param {string} string 需要转换的字符串
   * @returns {string}
   */
  toUpper: function (string = "") {
    var result = "";
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        result += String.fromCharCode(string.charCodeAt(i) - 32);
        continue;
      }
      result += string[i];
    }
    return result;
  },
  /**
   * 将字符串首个字母大写
   * @param {string} string 待转化字符串
   * @returns {string}
   */
  upperFirst: function (string = "") {
    return string.replace(
      /^[a-z]/,
      String.fromCharCode(string.charCodeAt(0) - 32)
    );
  },
  /**
   * 将正则字符转义处理"^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", "|"
   * @param {string} string 待处理字符
   * @returns {string}
   */
  escapeRegExp: function (string = "") {
    var result = "";
    var reg = /[\^\$\,\.\*\+\?\(\)\[\]\{\}\|]/;
    for (var i = 0; i <= string.length - 1; i++) {
      if (reg.test(string[i])) {
        result += "\\" + string[i];
        continue;
      }
      result += string[i];
    }
    return result;
  },
  /**
   * 将字符串转换为start case
   * @param {string} string 待转化的字符串
   * @returns {string}
   */
  startCase: function (string = "") {
    var save = string;
    save = save.replace(/^[^a-zA-Z0-9]*?(?=[a-zA-Z0-9])/, "");
    save = save.replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]*?$/, "");
    save = save.replace(/(?<=[a-zA-Z0-9])[^a-zA-Z0-9]+?(?=[a-zA-Z0-9])/g, " ");
    save = save.replace(
      /((?<=[a-zA-Z])(?=\d))|((?<=\d)(?=[a-zA-Z]))|((?<=[a-z])(?=[A-Z]))/g,
      " "
    );
    var reg = /\b[a-z]/;
    var reg2 = /(?<=[A-Z][A-Z](?=[a-z]))/;
    var result = "";
    for (var i = 0; i <= save.length - 1; i++) {
      if (reg2.test(save[i])) {
        result += " " + save[i];
      }
      if (reg.test(save[i])) {
        result += String.fromCharCode(save.charCodeAt(i) - 32);
        continue;
      }
      result += save[i];
    }
    return result;
  },
  /**
   * 调用传入的函数若干次，并将结果以数组的形式返回
   * @param {number} n 函数需要调用的次数
   * @param {Function} iteratee 需要调用的函数
   * @returns {Array}
   */
  times: function (n, iteratee = heavelll.identity) {
    // iteratee = this.iteratee(iteratee);
    var ary = [];
    for (var i = 0; i < n; i++) {
      ary[i] = iteratee(i);
    }
    return ary;
  },
  /**
   * 输出一个数组，保存从start到end以step的步幅的数
   * @param {number} start 开始数字
   * @param {number} end 结束数字
   * @param {number} step 步幅
   */
  range: function (start = 0, end, step = 1) {
    var ary = [];
    if ((end - start) / step < 0) {
      return ary;
    }
    if (!end) {
      for (var i = 0; i < start; i++) {
        ary.push(i);
      }
      return ary;
    }
    if (step > 0) {
      for (var i = start; i < end; i += step) {
        ary.push(i);
      }
    } else if (step < 0) {
      for (var i = start; i > end; i += step) {
        ary.push(i);
      }
    } else if (step == 0) {
      for (var i = 0; i < end; i++) {
        ary.push(start);
      }
    }
    return ary;
  },
  /**
   * 创建一个函数，传入若干函数，每一个函数调用传入的参数都是前一个函数返回的结果
   * @param  {...Function} funcs 待传函数
   * @returns {Function}
   */
  flow: function (...funcs) {
    return function (...args) {
      var result = funcs[0](...args);
      for (var i = 1; i <= funcs.length - 1; i++) {
        result = funcs[i](result);
      }
      return result;
    };
  },
  /**
   * 此函数为range反过来
   * @param {number} start 范围起始
   * @param {number} end 范围终止
   * @param {number} step 步幅
   * @returns {Array}
   */
  rangeRight: function (start = 0, end, step = 1) {
    var ary = [];
    if ((end - start) / step < 0) {
      return ary;
    }
    if (!end) {
      for (var i = 0; i < start; i++) {
        ary.push(i);
      }
      return ary;
    }
    if (step > 0) {
      for (var i = start; i < end; i += step) {
        ary.push(i);
      }
    } else if (step < 0) {
      for (var i = start; i > end; i += step) {
        ary.push(i);
      }
    } else if (step == 0) {
      for (var i = 0; i < end; i++) {
        ary.push(start);
      }
    }
    ary.reverse();
    return ary;
  },
  /**
   * 将一个字符串的所有字母变为小写
   * @param {string} string 待转化字符串
   * @returns {string}
   */
  toLower: function (string = "") {
    var result = "";
    var reg = /[A-Z]/;
    for (var i = 0; i <= string.length - 1; i++) {
      if (reg.test(string[i])) {
        result += String.fromCharCode(string.charCodeAt(i) + 32);
        continue;
      }
      result += string[i];
    }
    return result;
  },
  /**
   * 根据predicate提取目标对象的属性返回到新的对象里
   * @param {Object} object 待提取的对象
   * @param {Function} predicate 提取条件函数
   * @returns {Object}
   */
  pickBy: function (object, predicate = heavelll.identity) {
    var result = {};
    for (var i in object) {
      if (predicate(object[i])) {
        result[i] = object[i];
      }
    }
    return result;
  },
  /**
   * 将字符串中的&amp;, &lt;, &gt;, &quot;, &#39;转换为对应的HTML字符
   * @param {string} string 需要进行转换的字符
   * @returns {string}
   */
  unescape: function (string = "") {
    var result = string;
    result = result.replace(/&amp;/g, "&");
    result = result.replace(/&lt;/g, "<");
    result = result.replace(/&gt;/g, ">");
    result = result.replace(/&quot;/g, "\\");
    result = result.replace(/&#39;/g, "'");
    return result;
  },
  /**
   * 将任意数值进行拷贝
   * @param {*} value 待拷贝数值
   * @returns {*}
   */
  clone: function (value) {
    return value;
  },
  /**
   * 将给定数组从右边删除n项
   * @param {Array} array 待处理数组
   * @param {number} n 待删元素数量
   * @returns {Array}
   */
  dropRight: function (array, n = 1) {
    var ary = [].concat(array);
    if (n > array.length) {
      return [];
    }
    ary.splice(ary.length - n, n);
    return ary;
  },
  /**
   * 执行深比较来确定两者值是否相同
   * @param {*} value 待比较的值
   * @param {*} other 待比较的值
   * @returns {boolean}
   */
  isEqual: function (value, other) {
    if (typeof value !== typeof other) {
      return false;
    }
    if (
      typeof value == "string" ||
      typeof value == "number" ||
      typeof value == "boolean"
    ) {
      if (value !== value && other !== other) {
        return true;
      }
      if (value === other) {
        return true;
      } else {
        return false;
      }
    }
    if (typeof value == "object") {
      if (
        value.length !== other.length ||
        (Array.isArray(value) && !Array.isArray(other)) ||
        (!Array.isArray(value) && Array.isArray(other))
      ) {
        return false;
      }
      if (Array.isArray(value)) {
        if (typeof value[0] == "object") {
          for (var i = 0; i <= value.length - 1; i++) {
            if (!this.isEqual(value[i], other[i])) {
              return false;
            }
          }
          return true;
        }
        for (var i = 0; i <= value.length - 1; i++) {
          if (value[i] !== other[i]) {
            return false;
          }
        }
        return true;
      } else {
        if (
          Object.getOwnPropertyNames(value).length !==
          Object.getOwnPropertyNames(other).length
        ) {
          return false;
        }
        for (var key in value) {
          if (value[key] !== other[key]) {
            return false;
          }
        }
        return true;
      }
    }
  },
  /**
   * 接受一个iteratee，用它调用array和values中的每一个元素以产生比较的标准，从第一个数组返回结果
   * @param {Array} array 待比较的数组
   * @param {...Array} values 待比较数组
   * @param {Function} iteratee iteratee执行调用参数
   * @returns {Array}
   */
  differenceBy: function (array, ...values) {
    if (!Array.isArray(values[values.length - 1])) {
      var func = this.iteratee(values[values.length - 1]);
      values.splice(values.length - 1, 1);
    } else {
      var func = this.identity;
    }
    var comp = [].concat(...values);
    var result = [];
    for (var i = 0; i <= array.length - 1; i++) {
      var flag = true;
      for (var j = 0; j <= comp.length - 1; j++) {
        if (this.isEqual(func(array[i]), func(comp[j]))) {
          flag = false;
        }
      }
      if (flag) {
        result.push(array[i]);
      }
    }
    return result;
  },
  /**
   * 接受一个comparator，调用比较array, values中的元素，结果从第一个数组中选择
   * @param {Array} array 待比较的数组
   * @param  {...Array} values 待比较数组
   */
  differenceWith: function (array, ...values) {
    if (!Array.isArray(values[values.length - 1])) {
      var func = this.iteratee(values[values.length - 1]);
      values.splice(values.length - 1, 1);
    } else {
      var func = this.identity;
    }
    var result = [];
    var comp = [].concat(...values);
    for (var i = 0; i <= array.length - 1; i++) {
      var flag = true;
      for (var j = 0; j <= comp.length - 1; j++) {
        if (func(array[i], comp[j])) {
          flag = false;
        }
      }
      if (flag) {
        result.push(array[i]);
      }
    }
    return result;
  },
  /**
   * 从右开始截取一个数组，当predicate返回false时返回剩余部分
   * @param {Array} array 待筛选的数组
   * @param {Function} predicate predicate进行迭代
   * @returns {Array};
   */
  dropRightWhile: function (array, predicate = this.identity) {
    var func = this.iteratee(predicate);
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
      if (!func(array[i])) {
        for (var j = i; j >= 0; j--) {
          result.unshift(array[j]);
        }
        return result;
      }
    }
    return result;
  },
  /**
   * 从predicate返回false时开始返回剩余所有元素
   * @param {Array} array 待筛选的数组
   * @param {Function} predicate predicate进行迭代
   * @returns {Array}
   */
  dropWhile: function (array, predicate = this.identity) {
    var result = [].concat(array);
    if (typeof result[0] == "number") {
      for (var j = 0; j <= array.length - 1; j++) {
        if (!predicate(result[j])) {
          return result.slice(j);
        }
      }
    } else {
      var func = this.iteratee(predicate);
    }
    var result = [];
    for (var i = 0; i <= array.length - 1; i++) {
      if (!func(array[i])) {
        for (var j = i; j <= array.length - 1; j++) {
          result.push(array[j]);
        }
        return result;
      }
    }
    return result;
  },
  /**
   * 从集合中按给定索引或函数查找所需项
   * @param {Array|Obect} collection 待查集合
   * @param {Function} predicate 筛选函数
   * @param {number} fromIndx 开始查找的位置
   * @returns {*}
   */
  find: function (collection, predicate = heavelll.identity, fromIndex = 0) {
    var func = this.iteratee(predicate);
    for (var i = fromIndex; i <= collection.length - 1; i++) {
      if (func(collection[i])) {
        return collection[i];
      }
    }
  },
  /**
   * 从数组中按照索引或函数查找所需项的下标
   * @param {Array} array 待查数组
   * @param {Function} predicate 筛选函数
   * @param {number} fromIndex 开始查找的位置
   * @returns {number}
   */
  findIndex: function (array, predicate = heavelll.identity, fromIndex = 0) {
    var func = this.iteratee(predicate);
    for (var i = fromIndex; i <= array.length - 1; i++) {
      if (func(array[i])) {
        return i;
      }
    }
    return -1;
  },
  /**
   * 从数组右侧开始按照索引或函数查找所需项的下标
   * @param {Array} array 待查数组
   * @param {Function} preidicate 筛选函数
   * @param {number} fromIndex 开始查找的位置
   */
  findLastIndex: function (
    array,
    predicate = heavelll.identity,
    fromIndex = array.length - 1
  ) {
    var func = this.iteratee(predicate);
    for (var i = fromIndex; i >= 0; i--) {
      if (func(array[i])) {
        return i;
      }
    }
    return -1;
  },
  /**
   * 将给定数组的所有相同的项以数组的形式输出
   * @param {...Array} arrays 待比较的数组
   * @returns
   */
  intersection: function (...arrays) {
    var result = arrays.reduce((x, y) => {
      for (var i = 0; i <= x.length - 1; i++) {
        var flag = true;
        for (var j = 0; j <= y.length - 1; j++) {
          if (x[i] === y[j]) {
            flag = false;
          }
        }
        if (flag) {
          x.splice(i, 1);
          i--;
        }
      }
      return x;
    });
    return result;
  },
  /**
   * 接受一个iteratee调用每一个arrays的每个值以产生一个值，通过产生的值比较并以数组返回相同的值，以第一个数组为准
   * @param  {...Array} arrays 待迭代的数组
   * @param {Function} iteratee 迭代器
   * @returns {Array}
   */
  intersectionBy: function (...arrays) {
    if (!Array.isArray(arrays[length - 1])) {
      var func = this.iteratee(arrays.pop());
    } else {
      var func = this.identity;
    }
    var result = arrays.reduce((x, y) => {
      for (var i = 0; i <= x.length - 1; i++) {
        var flag = true;
        for (var j = 0; j <= y.length - 1; j++) {
          if (func(x[i]) === func(y[j])) {
            flag = false;
          }
        }
        if (flag) {
          x.splice(i, 1);
          i--;
        }
      }
      return x;
    });
    return result;
  },
  /**
   * 接受一个comparator比较器来比较arrays中的元素，结果从第一个数组中选择
   * @param {...Array} arrays 待比较的数组
   * @param {Function} comparator 比较器调用元素
   * @returns {Array}
   */
  intersectionWith: function (...arrays) {
    var comparator = arrays.pop();
    var result = arrays.reduce((x, y) => {
      for (var i = 0; i <= x.length - 1; i++) {
        var flag = true;
        for (var j = 0; j <= y.length - 1; j++) {
          if (comparator(x[i], y[j])) {
            flag = false;
          }
        }
        if (flag) {
          x.splice(i, 1);
          i--;
        }
      }
      return x;
    });
    return result;
  },
  /**
   * 接受一个iteratee调用所接数组的每个参数进行比较移除
   * @param {Array} array 待比较数组
   * @param {Array} values 待移除数值
   * @param {Function} iteratee 迭代器
   * @returns {Array}
   */
  pullAllBy: function (array, values, iteratee = heavelll.identity) {
    var func = this.iteratee(iteratee);
    for (var i = 0; i <= array.length - 1; i++) {
      for (var j = 0; j <= values.length - 1; j++) {
        if (func(array[i]) === func(values[j])) {
          array.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return array;
  },
  /**
   * 接受一个comparator比较器，调用所接数组的参数进行比较
   * @param {Array} array 待比较数组
   * @param {Array} values 待移除数值
   * @param {Function} comparator 比较器
   * @returns {Array}
   */
  pullAllWith: function (array, values, comparator) {
    for (var i = 0; i <= array.length - 1; i++) {
      for (var j = 0; j <= values.length - 1; j++) {
        if (comparator(array[i], values[j])) {
          array.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return array;
  },
  /**
   * 接受一个迭代器，调用传入的数值后决定其应该插入传入数组的哪个位置
   * @param {Array} ary 待插入数组
   * @param {*} value 待插入数值
   * @param {Function} iteratee 迭代器
   */
  sortedIndexBy: function (ary, value, iteratee = heavelll.identity) {
    var func = heavelll.iteratee(iteratee);
    var start = 0;
    var end = ary.length - 1;
    while (end - start > 1) {
      var middle = ((end + start) / 2) | 0;
      if (func(ary[middle]) >= func(value)) {
        end = middle;
      }
      if (func(ary[middle]) < func(value)) {
        start = middle;
      }
    }
    return func(ary[start]) == func(value) ? start : end;
  },
  /**
   * 从数组右侧开始检索所接数值的插入位置索引
   * @param {Array} ary 待检索的数组
   * @param {*} value 待检索的数值
   * @returns {number}
   */
  sortedLastIndex: function (ary, value) {
    var start = 0;
    var end = ary.length - 1;
    while (end - start > 1) {
      var middle = ((end + start) / 2) | 0;
      if (ary[middle] > value) {
        end = middle;
      }
      if (ary[middle] <= value) {
        start = middle;
      }
    }
    return ary[end] == value ? start : end;
  },
  /**
   * 接受一个迭代器，调用传入的数值后决定其应该插入传入数组从右开始数的哪个位置
   * @param {Array} ary 待检索数组
   * @param {*} value 待检索数值
   * @param {Function} iteratee 迭代器
   * @returns {number}
   */
  sortedLastIndexBy: function (ary, value, iteratee = heavelll.identity) {
    var func = this.iteratee(iteratee);
    var start = 0;
    var end = ary.length - 1;
    while (end - start > 1) {
      var middle = ((end + start) / 2) | 0;
      if (func(ary[middle]) > func(value)) {
        end = middle;
      }
      if (func(ary[middle]) <= func(value)) {
        start = middle;
      }
    }
    return func(ary[end]) == func(value) ? start : end;
  },
  /**
   * 使用二分查找从数组右侧开始检索所接数值的索引
   * @param {Array} ary 待检索数组
   * @param {*} value 待检索数值
   * @returns {number}
   */
  sortedLastIndexOf: function (ary, value) {
    var start = 0;
    var end = ary.length - 1;
    while (end - start > 1) {
      var middle = ((end + start) / 2) | 0;
      if (ary[middle] > value) {
        end = middle;
      }
      if (ary[middle] <= value) {
        start = middle;
      }
    }
    return ary[start] == value ? start : end;
  },
  /**
   * 将给定有序数组去重
   * @param {Array} array 待操作数组
   * @returns {Array}
   */
  sortedUniq: function (array) {
    for (var i = 0; i <= array.length - 2; i++) {
      if (array[i] !== array[i]) {
        if (array[i + 1] !== array[i + 1]) {
          array.splice(i + 1, 1);
          i--;
        }
      } else {
        if (array[i] === array[i + 1]) {
          array.splice(i + 1, 1);
          i--;
        }
      }
    }
    return array;
  },
  /**
   * 用iteratee迭代数组内数值后进行去重
   * @param {Array} array 待处理的数组
   * @param {Function} iteratee 迭代器
   */
  sortedUniqBy: function (array, iteratee = heavelll.identity) {
    for (var i = 0; i <= array.length - 2; i++) {
      if (array[i] !== array[i]) {
        if (array[i + 1] !== array[i + 1]) {
          array.splice(i + 1, 1);
          i--;
        }
      } else {
        if (iteratee(array[i]) === iteratee(array[i + 1])) {
          array.splice(i + 1, 1);
          i--;
        }
      }
    }
    return array;
  },
  /**
   * 用predicate从数组右侧调用元素，元素将被作为数组返回直到predicate返回false
   * @param {Array} array 待选择的数组
   * @param {Function} predicate 调用函数
   * @returns {Array}
   */
  takeRightWhile: function (array, predicate = heavelll.identity) {
    var func = this.iteratee(predicate);
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
      if (func(array[i])) {
        result.unshift(array[i]);
      } else {
        return result;
      }
    }
    return result;
  },
  /**
   * 用predicate从数组左侧调用元素，元素将被作为数组返回直到predicate返回false
   * @param {Array} array 待选择的数组
   * @param {Function} predicate 调用函数
   * @returns {Array}
   */
  takeWhile: function (array, predicate = heavelll.identity) {
    var func = this.iteratee(predicate);
    var result = [];
    for (var i = 0; i <= array.length - 1; i++) {
      if (func(array[i])) {
        result.push(array[i]);
      } else {
        return result;
      }
    }
    return result;
  },
  /**
   * 使用iteratee对给定的多个数组元素进行迭代后创建创建一个无重数组
   * @param {...Array} arrays 待迭代数组
   * @param {Function} iteratee 迭代器
   * @returns {Array}
   */
  unionBy: function (...arrays) {
    if (!Array.isArray(arrays[arrays.length - 1])) {
      var func = this.iteratee(arrays.pop());
    } else {
      var func = this.identity;
    }
    var result = [].concat(...arrays);
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i != j && func(result[i]) === func(result[j])) {
          result.splice(j, 1);
          j--;
        }
      }
    }
    return result;
  },
  /**
   * 使用comparator对给定的多个数组元素进行迭代比较后创建创建一个无重数组
   * @param  {...Array} arrays 待迭代数组
   * @returns {Array}
   */
  unionWith: function (...arrays) {
    if (!Array.isArray(arrays[arrays.length - 1])) {
      var func = this.iteratee(arrays.pop());
    } else {
      var func = this.identity;
    }
    var result = [].concat(...arrays);
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i != j && func(result[i], result[j])) {
          result.splice(j, 1);
          j--;
        }
      }
    }
    return result;
  },
  /**
   * 用iteratee调用数组的元素后将数组去重,并返回一个新的数组
   * @param {Array} array 待操作的数组
   * @param {Function} iteratee 迭代器
   * @returns {Array}
   */
  uniqBy: function (array, iteratee = heavelll.identity) {
    var func = this.iteratee(iteratee);
    var result = array.slice();
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i != j && func(array[i]) === func(array[j])) {
          result.splice(j, 1);
          j--;
        }
      }
    }
    return result;
  },
  /**
   * 用comparator调用数组的元素后进行比较并将数组去重,并返回一个新的数组
   * @param {Array} array 待操作的数组
   * @param {Function} comparator 比较器
   * @returns {Array}
   */
  uniqWith: function (array, comparator) {
    var result = array.slice();
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i != j && comparator(array[i], array[j])) {
          result.splice(j, 1);
          j--;
        }
      }
    }
    return result;
  },
  /**
   * 调用iteratee指定重组值应该怎样被组合
   * @param {Array} array 待处理的数组
   * @param {Function} iteratee 组合函数
   * @returns {Array}
   */
  unzipWith: function (array, iteratee = heavelll.identity) {
    var tmp = array.slice();
    var result = tmp.reduce((thisone, another) => {
      for (var i = 0; i <= thisone.length - 1; i++) {
        thisone[i] = iteratee(thisone[i], another[i]);
      }
      return thisone;
    });
    return result;
  },
  /**
   * 类似xor，不过它接收迭代器iteratee调用数组参数后进行比价取差集
   * @param  {...Arrays} arrays 待处理的组
   * @param  {Function} iteratee 迭代器
   * @returns {Array}
   */
  xorBy: function (...arrays) {
    if (!Array.isArray(arrays[arrays.length - 1])) {
      var func = this.iteratee(arrays.pop());
    } else {
      var func = this.identity;
    }
    var result = [].concat(...arrays);
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i !== j && func(result[i]) === func(result[j])) {
          var del = func(result[i]);
          for (var k = 0; k <= result.length - 1; k++) {
            if (func(result[k]) === del) {
              result.splice(k, 1);
              k--;
            }
          }
        }
      }
    }
    return result;
  },
  /**
   * 类似xor，不过它接收比较器comparator调用数组参数后进行比价取差集
   * @param  {...Array} arrays 待处理的组
   * @param  {Function} 比较器
   * @returns {Array}
   */
  xorWith: function (...arrays) {
    var func = this.iteratee(arrays.pop());
    var result = [].concat(...arrays);
    for (var i = 0; i <= result.length - 1; i++) {
      for (var j = 0; j <= result.length - 1; j++) {
        if (i !== j && func(result[i], result[j])) {
          var del = result[i];
          for (var k = 0; k <= result.length - 1; k++) {
            if (func(result[k], del)) {
              result.splice(k, 1);
              k--;
            }
          }
        }
      }
    }
    return result;
  },
  /**
   * 设置对象路径上的属性值，如果路径对象不存在，则创建它
   * @param {Object} object 需要设置的对象
   * @param {Array|string} path 属性设置路径
   * @param {*} value 属性值
   * @returns {Object}
   */
  set: function (object, path, value) {
    if (typeof path == "object") {
      let obj = object;
      for (var i = 0; i <= path.length - 1; i++) {
        if (i == path.length - 1) {
          obj[path[i]] = value;
          break;
        }
        if (typeof obj[path[i]] != "object") {
          obj[path[i]] = {};
          obj = obj[path[i]];
        } else {
          obj = obj[path[i]];
        }
      }
    } else {
      let j = 0;
      let obj = object;
      let key = "";
      while (j < path.length) {
        if (path[j] == "[" || path[j] == ".") {
          if (j == 0) {
            j++;
            continue;
          }
          if (typeof obj[key] != "object") {
            obj[key] = {};
            obj = obj[key];
            j++;
            key = "";
          } else {
            obj = obj[key];
            j++;
            key = "";
          }
        } else if (path[j] == "]") {
          if (j == path.length - 1) {
            obj[key] = value;
            break;
          }
          if (typeof obj[key] != "object") {
            obj[key] = {};
            obj = obj[key];
            j += 2;
            key = "";
          } else {
            obj = obj[key];
            j += 2;
            key = "";
          }
        } else {
          key += path[j];
          j++;
        }
      }
      if (obj[path.length - 1] !== "]") {
        obj[key] = value;
      }
    }
    return object;
  },
  /**
   * 按多条路径给对象赋值，若对象路径不存在则创建该路径
   * @param {Array} props 待处理对象
   * @param {Array} values 待赋值
   * @returns {Object}
   */
  zipObjectDeep: function (props = [], values = []) {
    var object = {};
    for (var i = 0; i <= props.length - 1; i++) {
      this.set(object, props[i], values[i]);
    }
    return object;
  },
  /**
   * 类似于zip，接受一个iteratee迭代器来指定分组如何被组合
   * @param  {...Array} arrays 待处理的数组
   * @param {Function} iteratee 迭代器
   * @returns {Array}
   */
  zipWith: function (...arrays) {
    if (!Array.isArray(arrays[arrays.length - 1])) {
      var func = arrays.pop();
    }
    var result = [];
    for (var i = 0; i <= arrays[0].length - 1; i++) {
      var save = func;
      for (var j = 0; j <= arrays.length - 1; j++) {
        save = save.bind(this, arrays[j][i]);
      }
      result.push(save());
    }
    return result;
  },
  /**
   * 创建一个对象，键通过迭代器后处理所接数组/对象中每个元素返回的结果，每个键对应的值为迭代器返回该键的次数
   * @param {Array|Object} collection 待处理数组/对象
   * @param {Function} iteratee 迭代器
   * @returns {Object}
   */
  countBy: function (collection, iteratee = heavelll.identity) {
    var func = this.iteratee(iteratee);
    var result = {};
    for (var i in collection) {
      var key = func(collection[i]);
      if (result[key] === undefined) {
        result[key] = 1;
      } else {
        result[key]++;
      }
    }
    return result;
  },
  /**
   * 通过断言函数predicate检查collection中是否所有元素都返回true，一旦返回假值则立即停止
   * @param {Array|Object} collection 待处理数组/对象
   * @param {Array|Function|Object|String} predicate 断言函数
   * @returns {boolean}
   */
  every: function (collection, predicate = heavelll.identity) {
    var func = this.iteratee(predicate);
    for (var key in collection) {
      if (!func(collection[key])) {
        return false;
      }
    }
    return true;
  },
  /**
   * 类似find，但是从数组/对象右侧开始检索
   * @param {Array|Object} collection 待检索数组
   * @param {Function} predicate 断言函数
   * @param {number} fromIndex 开始下标
   * @returns {*}
   */
  findLast: function (
    collection,
    predicate = heavelll.identity,
    fromIndex = collection.length - 1
  ) {
    var func = this.iteratee(predicate);
    for (var i = fromIndex; i >= 0; i--) {
      if (func(collection[i])) {
        return collection[i];
      }
    }
  },
  /**
   * 创建一个扁平化数组，该数组的值来自collection中每个值经过iteratee迭代器调用后返回的结果，并且扁平化合并
   * @param {Array|Object} collection 待操作数组|对象
   * @param {Function} iteratee 迭代器
   * @returns {Array}
   */
  flatMap: function (collection, iteratee = heavelll.identity) {
    var func = this.iteratee(iteratee);
    var result = [];
    for (var i = 0; i <= collection.length - 1; i++) {
      result.push(func(collection[i]));
    }
    return this.flatten(result);
  },
  /**
   * 类似flatMap，但是此方法将结果完全扁平化
   * @param {Array|Object} collection 待操作数组|对象
   * @param {*} iteratee 迭代器
   * @Returns {Array}
   */
  flatMapDeep: function (collection, iteratee = heavelll.identity) {
    var func = this.iteratee(iteratee);
    var result = [];
    for (var i = 0; i <= collection.length - 1; i++) {
      result.push(func(collection[i]));
    }
    return this.flattenDeep(result);
  },
  /**
   * 类似于flatMap，但是此方法可以将结果展开指定次数
   * @param {Array|Object} collection 待操作数组|对象
   * @param {Function} iteratee 迭代器
   * @param {number} depth 展开次数
   * @returns {Array}
   */
  flatMapDepth: function (collection, iteratee = heavelll.identity, depth = 1) {
    var func = this.iteratee(iteratee);
    var result = [];
    for (var i = 0; i <= collection.length - 1; i++) {
      result.push(func(collection[i]));
    }
    return this.flattenDepth(result, depth);
  },
  /**
   * 用iteratee迭代器调用collection中每个元素，如果迭代器显式的返回false，则迭代题前退出
   * @param {Array|Object} collection 待操作数组|对象
   * @param {Function} iteratee 迭代器
   * @returns {*}
   */
  forEach: function (collection, iteratee = heavelll.identity) {
    for (var i in collection) {
      iteratee(collection[i], i, collection);
    }
    return collection;
  },
  /**
   * 用iteratee从右侧调用collection中每个元素
   * @param {Array|Object} collection 待操作数组|对象
   * @param {Function} iteratee 迭代器
   * @returns {*}
   */
  forEachRight: function (collection, iteratee = heavelll.identity) {
    var save = [];
    for (var key in collection) {
      save.unshift(key);
    }
    save.forEach((idx) => {
      iteratee(collection[idx], idx, collection);
    });
    return collection;
  },
  /**
   * 创建一个对象，key为iteratee迭代器遍历collection中每个元素返回的结果，分组顺序由他们出现在collection中的顺序决定，
   * 每个键的值负责生成key的元素组成的数组
   * @param {Array|Object} collection 待操作的数组|对象
   * @param {Function} iteratee 迭代器
   * @returns {Object}
   */
  groupBy: function (collection, iteratee = heavelll.identity) {
    var func = this.iteratee(iteratee);
    var result = {};
    for (var key in collection) {
      if (result[func(collection[key])] === undefined) {
        result[func(collection[key])] = [];
      }
      result[func(collection[key])].push(collection[key]);
    }
    return result;
  },
  // /**
  //  * 调用path路径上的方法处理collection中的每个元素，返回一个数组，包含每次调用方法返回的结果
  //  * @param {Array|Object} collection 待处理数组|对象
  //  * @param {Array|Function|string} path 调用路径|迭代函数
  //  * @param {...*} args 调用每个方法所传的参数
  //  * @returns {Array}
  //  */
  // invokeMap: function(collection, path, ...args) {
  //   if(typeof(collection) == 'object') {
  //     if(typeof(path) == 'function') {
  //       collection.forEach(val => {
  //       })
  //     }
  //   }
  // },
  /**
   * 创建一个对象，key为collection中每一个元素经过iteratee迭代器处理后返回的结果，每个key对应的值是生成key的最后一个元素
   * @param {Array|Object} collection 待操作的数组|对象
   * @param {Array|Function|Object|String} iteratee 迭代器
   * @returns {Object}
   */
  keyBy: function (collection, iteratee = heavelll.identity) {
    var result = {};
    var func = this.iteratee(iteratee);
    collection.forEach((val, idx) => {
      result[func(val)] = val;
    });
    return result;
  },
  /**
   * 创建一个数组，用iteratee迭代器遍历数组进行迭代，并返回一个新的数组
   * @param {Array|Object} collection 待操作数组|对象
   * @param {Array|Function|Object|string} iteratee 迭代器
   * @returns {Array}
   */
  map: function (collection, iteratee = heavelll.identity) {
    var func = this.iteratee(iteratee);
    var result = [];
    for (var key in collection) {
      result.push(func(collection[key]));
    }
    return result;
  },
  /**
   * 创建一个元素数组，以iteratee处理的结果升序排序，这个方法执行稳定排序，也就是说相同元素会保持原始排序
   * @param {Array|Object} collection 待操作数组|对象
   * @param {...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])} iteratee 迭代器
   * @returns {Array}
   */
  sortBy: function (collection, iteratee) {
    if (iteratee.length === 0) {
      return collection;
    }
    for (var i = 0; i <= iteratee.length - 1; i++) {
      var func = this.iteratee(iteratee[i]);
      var save = [];
      var map = collection.map((val) => {
        save.push([func(val), val]);
      });
      if (typeof save[0][0] === "number") {
        save.sort((x, y) => {
          return x[0] - y[0];
        });
      } else {
        save.sort((x, y) => {
          return x[0].localeCompare(y[0]);
        });
      }
      var result = save.map((val) => {
        return val[1];
      });
      collection = result;
    }
    return collection;
  },
  /**
   * 类似于heavelll.sortBy，除了它允许指定迭代器是升序排还是降序排,如果order未指定，则升序，否则指定为"desc"降序，"asc"升序
   * @param {Array|Object} collection
   * @param {Array[]|Function[]|Object[]|string[]} iteratee
   * @param {string[]} orders
   * @returns {Array}
   */
  orderBy: function (collection, iteratee, orders) {
    if (orders.length === 0) {
      return this.sortBy(collection, iteratee);
    }
    for (var i = iteratee.length - 1; i >= 0; i--) {
      if (orders[i] === "desc") {
        var func = this.iteratee(iteratee[i]);
        var save = [];
        var map = collection.map((val) => {
          save.push([func(val), val]);
        });
        if (typeof save[0][0] === "number") {
          save.sort((y, x) => {
            return x[0] - y[0];
          });
        } else {
          save.sort((y, x) => {
            return x[0].localeCompare(y[0]);
          });
        }
        var result = save.map((val) => {
          return val[1];
        });
        collection = result;
      } else {
        collection = this.sortBy(collection, [iteratee[i]]);
      }
    }
    return collection;
  },
  /**
   * 创建一个含两个数组的数组，一个数组内容为predicate返回true的值，另一个为返回为false的值
   * @param {Array|Object} collection 待处理数组
   * @param {Function} predicate 断言函数
   * @returns {Array}
   */
  partition(collection, predicate = heavelll.identity) {
    var func = this.iteratee(predicate);
    var result = [];
    var trueOne = [];
    var falseOne = [];
    collection.forEach((val) => {
      if (func(val)) {
        trueOne.push(val);
      } else {
        falseOne.push(val);
      }
    });
    result.push(trueOne);
    result.push(falseOne);
    return result;
  },
  /**
   * 对所给数组|对象进行遍历并连续迭代返回一个值
   * @param {Array|Object} collection 待处理数组|对象
   * @param {Function} iteratee 迭代函数
   * @param {*} accumulator 初始值
   * @returns {*}
   */
  reduce: function (collection, iteratee = heavelll.identity, accumulator) {
    var flag = true;
    if (accumulator == undefined) {
      flag = false;
      if (Array.isArray(collection)) {
        var result = collection[0];
      } else {
        var result = collection[Object.keys(collection)[0]];
      }
    } else {
      var result = accumulator;
    }
    for (var key in collection) {
      if (flag) {
        result = iteratee(result, collection[key], key);
      } else {
        flag = true;
      }
    }
    return result;
  },
  /**
   * 类似reduce，但是从右侧开始遍历
   * @param {Array|Object} collection 待处理数组|对象
   * @param {Function} iteratee 迭代函数
   * @param {*} accumulator 初始值
   * @returns {*}
   */
  reduceRight: function (
    collection,
    iteratee = heavelll.identity,
    accumulator
  ) {
    var flag = true;
    if (accumulator == undefined) {
      flag = false;
      if (Array.isArray(collection)) {
        var result = collection[collection.length - 1];
      } else {
        var result =
          collection[
            Object.keys(collection)[Object.keys(collection).length - 1]
          ];
      }
    } else {
      result = accumulator;
    }
    var idx = Object.keys(collection).reverse();
    for (var i = 0; i <= idx.length - 1; i++) {
      if (flag) {
        result = iteratee(result, collection[idx[i]], idx[i]);
      } else {
        flag = true;
      }
    }
    return result;
  },
  /**
   * 与filter相反,输出predicate返回为false的值
   * @param {Array|Object} collection 待处理数组
   * @param {Function} predicate 断言函数
   * @returns {Array}
   */
  reject: function (collection, predicate = heavelll.identity) {
    var result = [];
    var func = this.iteratee(predicate);
    for (var key in collection) {
      if (!func(collection[key])) {
        result.push(collection[key]);
      }
    }
    return result;
  },
  /**
   * predicate遍历调用collection的元素，如果有任意true，则遍历停止并返回true
   * @param {Arrat|Object} collection 待处理数组|对象
   * @param {Function} predicate 断言函数
   * @returns {boolean}
   */
  some: function (collection, predicate = heavelll.identity) {
    var func = this.iteratee(predicate);
    for (var key in collection) {
      if (func(collection[key])) {
        return true;
      }
    }
    return false;
  },
  /**
   * 延迟wait秒后调用func
   * @param {Function} func 需要延迟的函数
   * @param {number} wait 要延迟的毫秒数
   * @param  {...any} args
   */
  delay: function (func, wait, ...args) {
    return setTimeout(func(...args), wait);
  },
  /**
   * 如果value不是一个数组，则将他放入数组
   * @param {*} value 待操作参数
   * @returns {Array}
   */
  castArray: function (value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (arguments.length == 0) {
      return [];
    } else {
      return [value];
    }
  },
  /**
   * 调用source的属性，检查object对应属性值是否符合source
   * @param {Object} object 待检查对象
   * @param {Object} source 断言对象
   * @returns {boolean}
   */
  conformsTo: function (object, source) {
    return source[Object.keys(source)[0]](object[Object.keys(source)[0]]);
  },
  /**
   * 判断value是否为参数类型
   * @param {*} value 待判断数值
   * @returns {boolean}
   */
  isArguments: function (value) {
    return Object.prototype.toString.call(value) === "[object Arguments]";
  },
  /**
   * 判断value是否为数组类型
   * @param {*} value 待判断数值
   * @returns {boolean}
   */
  isArray: function (value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  },
  /**
   * 判断value是否为ArrayBuffer类型
   * @param {*} value 待判断数值
   * @returns {boolean}
   */
  isArrayBuffer: function (value) {
    return Object.prototype.toString.call(value) === "[object ArrayBuffer]";
  },
  /**
   * 判断value是否为类数组
   * @param {*} value 待判断数值
   * @returns {boolean}
   */
  isArrayLike: function (value) {
    if (typeof value !== "function") {
      if (value.length !== "undefined" && value.length >= 0) {
        return true;
      }
    }
    return false;
  },
  /**
   * 类似isArrayLike，他还检查value是否是个对象
   * @param {*} value
   * @returns {boolean}
   */
  isArrayLikeObject: function (value) {
    if (typeof value === "object") {
      if (typeof value !== "function") {
        if (value.length !== "undefined" && value.length >= 0) {
          return true;
        }
      }
    }
    return false;
  },
  /**
   * 判断value是否是个布尔值
   * @param {*} value 待判断数值
   * @returns {boolean}
   */
  isBoolean: function (value) {
    return Object.prototype.toString.call(value) === "[object Boolean]";
  },
  /**
   * 判断value是否是个日期对象
   * @param {*} value 待判断数值
   * @returns {boolean}
   */
  isDate: function (value) {
    return Object.prototype.toString.call(value) === "[object Date]";
  },
  /**
   * 判断value是否是DOM元素
   * @param {*} value 待判断数值
   * @returns {boolean}
   */
  isElement: function (value) {
    return Object.prototype.toString.call(value) === "[object HTMLBodyElement]";
  },
  /**
   * 检测value是否是一个空对象，集合，映射
   * @param {*} value 待判断数值
   * @returns {boolean}
   */
  isEmpty: function (value) {
    if (!value) {
      return true;
    } else {
      return Object.keys(value).length === 0;
    }
  },
  // /**
  //  * 类似heavelll.isEqual,但是它接受一个customizer来定制比较值.如果customizer返回undefined将会比较处理方法代替
  //  * @param {} value
  //  * @param {*} other
  //  * @param {*} customizer
  //  */
  // isEqualWith: function(value, other, customizer) {
  // },
  /**
   * 检测value是否是Error实例
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isError: function (value) {
    return value instanceof Error;
  },
  /**
   * 检测value是否是有限数值
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isFinite: function (value) {
    return value !== value
      ? false
      : typeof value !== "number"
      ? false
      : value === Infinity || value === -Infinity
      ? false
      : true;
  },
  /**
   * 检测value是否是Function对象
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isFunction: function (value) {
    return typeof value === "function";
  },
  /**
   * 检测value是否是整数
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isInteger: function (value) {
    return this.isFinite(value) ? (value % 1 == 0 ? true : false) : false;
  },
  /**
   * 检测value是否是有效的类数组长度
   * @param {*} value 待检测的数值
   * @returns {boolean}
   */
  isLength: function (value) {
    return this.isInteger(value) ? (value >= 0 ? true : false) : false;
  },
  /**
   * 检测value是否是一个映射对象
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isMap: function (value) {
    return value instanceof Map;
  },
  /**
   * 执行深度比较,确定object是否含有和source完全相等的属性值
   * @param {Object} object 待比较的对象
   * @param {Object} source 匹配属性值的对象
   * @returns {boolean}
   */
  isMatch: function (object, source) {
    for (var key in source) {
      if (!this.isEqual(object[key], source[key])) {
        return false;
      }
    }
    return true;
  },
  /**
   * 类似heavelll.isMatch,但是它接受一个customizer定制比较的值
   * @param {Object} object 待比较的数组
   * @param {Object} source 匹配属性值的对象
   * @param {Function} customizer 比较函数
   * @returns {boolean}
   */
  isMatchWith: function (object, source, customizer) {
    if (customizer == undefined) {
      return this.isMatch(object, source);
    }
    for (var key in source) {
      if (!customizer(object[key], source[key])) {
        return false;
      }
    }
    return true;
  },
  /**
   * 检测value是否是一个原生函数
   * @param {*} value 待检测的数值
   * @returns {boolean}
   */
  isNative: function (value) {
    return value.toString().includes("[native code]");
  },
  /**
   * 检测value是否是undefined
   * @param {*} value 待检测的数值
   * @returns {boolean}
   */
  isUndefined: function (value) {
    return value === undefined;
  },
  /**
   * 检测value是否是null或者undefined
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isNil: function (value) {
    return this.isUndefined(value) ? true : this.isNull(value) ? true : false;
  },
  /**
   * 检测value是否是原始Number数值型
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isNumber: function (value) {
    return typeof value == "number";
  },
  /**
   * 检测value是否为object的language type
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isObject: function (value) {
    return value instanceof Object;
  },
  /**
   * 检测value是否是类对象,如果一个值是类对象,它不应该是null且它的typeof值应该为object
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isObjectLike: function (value) {
    return value === null ? false : typeof value === "object";
  },
  /**
   * 检测value是否是普通对象,也就是说该对象由Object构造函数构建,或者prototype为null
   * @param {*} value 待检测的值
   * @returns {boolean}
   */
  isPlainObject: function (value) {
    return value.__proto__ == Object.prototype || value.__proto__ == null;
  },
  /**
   * 检测value是否是RegExp对象
   * @param {*} value 待检测的数值
   * @returns {boolean}
   */
  isRegExp: function (value) {
    return value instanceof RegExp;
  },
  /**
   * 检测value是否是安全整数
   * @param {*} value
   */
  isSafeInteger: function (value) {
    return Number.isSafeInteger(value);
  },
  /**
   * 检测value是否是集合对象
   * @param {*} value 待检测的数值
   * @returns {boolean}
   */
  isSet: function (value) {
    return value instanceof Set;
  },
  /**
   * 检测value是否是原始字符串或者字符串对象
   * @param {*} value 待检测数值
   * @returns {booelan}
   */
  isString: function (value) {
    return value instanceof String ? true : typeof value === "string";
  },
  /**
   * 检测value是否是原始symbol或symbol对象
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isSymbol: function (value) {
    return Object.prototype.toString.call(value) === "[object Symbol]";
  },
  /**
   * 检测value是否是TypedArray
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isTypedArray: function (value) {
    return Object.prototype.toString.call(value) === "[object Uint8Array]";
  },
  /**
   * 检测value是否是WeakMap对象
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isWeakMap: function (value) {
    return value instanceof WeakMap;
  },
  /**
   * 检测value是否是WeakSet对象
   * @param {*} value 待检测数值
   * @returns {boolean}
   */
  isWeakSet: function (value) {
    return value instanceof WeakSet;
  },
  /**
   * 将value转为数组
   * @param {*} value 待转化数值
   * @returns {Array}
   */
  toArray: function (value) {
    var result = [];
    if (value) {
      if (value.length || typeof value === "object") {
        for (var i in value) {
          if (value.hasOwnProperty(i)) {
            result.push(value[i]);
          }
        }
      }
    }
    return result;
  },
  toFinite: function (value) {
    if (value !== value) {
      return 0;
    }
    if (value === Infinity) {
      return Number.MAX_VALUE;
    }
    if (value === -Infinity) {
      return -Number.MAX_VALUE;
    }
    if (typeof value == "number") {
      return value;
    }
    if (typeof value == "string") {
      return parseFloat(value);
    }
    if (Array.isArray(value)) {
      if (value.length === 1) {
        return parseFloat(value[0]);
      } else {
        return 0;
      }
    }
    if (typeof value == "object") {
      return 0;
    }
    if (typeof value === "boolean") {
      return 1;
    }
  },
  toInteger: function () {
    if (value !== value) {
      return 0;
    }
    if (value === Number.MIN_VALUE) {
      return 3;
    }
    if (value === Infinity) {
      return Number.MAX_VALUE;
    }
    if (value === -Infinity) {
      return -Number.MAX_VALUE;
    }
    if (typeof value == "number") {
      return parseInt(value);
    }
    if (typeof value == "string") {
      return parseInt(value);
    }
    if (Array.isArray(value)) {
      if (value.length === 1) {
        return parseInt(value[0]);
      } else {
        return 0;
      }
    }
    if (typeof value == "object") {
      return 0;
    }
    if (typeof value === "boolean") {
      return 1;
    }
  },
  /**
   * 深克隆一个变量
   * @param {*} value 待克隆的变量
   * @return {*}
   */
  cloneDeep: function (value) {
    if (typeof value == "object") {
      if (Array.isArray(value)) {
        var result = [];
        for (var i = 0; i <= value.length - 1; i++) {
          result[i] = this.cloneDeep(value[i]);
        }
        return result;
      } else {
        var result = {};
        for (var key in value) {
          result[key] = this.cloneDeep(value[key]);
        }
        return result;
      }
    } else {
      return value;
    }
  },
  /**
   * 将所接参数转为数组
   * @param {*} value 待转参数
   * @returns {Array}
   */
  toArray: function (value) {
    var result = [];
    for (var i in value) {
      result.push(value[i]);
    }
    return result;
  },
  /**
   * 将所接参数转为有限值
   * @param {*} value 待转参数
   * @returns {Number}
   */
  toFinite: function (value) {
    var result = Number(value);
    if (result == Infinity) {
      return Number.MAX_VALUE;
    }
    if (result == -Infinity) {
      return -Number.MAX_VALUE;
    }
    if (result != result) {
      return 0;
    }
    return result;
  },
  /**
   * 将所接参数转为整数
   * @param {*} value 待转参数
   * @returns {Number}
   */
  toInteger: function (value) {
    var result = this.toFinite(value);
    return Math.floor(result);
  },
  /**
   * 将所接参数转为数组的可用长度
   * @param {*} value 待转参数
   * @returns {Number}
   */
  toLength: function (value) {
    var result = this.toInteger(value);
    return result < 0 ? 0 : result > 0xffffffff ? 0xffffffff : result;
  },
  /**
   * 将所接参数转为数字
   * @param {} value 待转参数
   * @returns {Number}
   */
  toNumber: function (value) {
    return Number(value);
  },
  /**
   * 将所接参数转为安全整数
   * @param {*} value 待转参数
   * @returns {Number}
   */
  toSafeInteger: function (value) {
    var result = this.toInteger(value);
    const safeNum = 2 ** 53 - 1;
    return result > safeNum ? safeNum : result < -safeNum ? -safeNum : result;
  },
  /**
   * 进一法对数值保留指定位数
   * @param {Number} number 待处理数值
   * @param {Number} precision 舍入位数
   * @returns {Number}
   */
  ceil: function (number, precision = 0) {
    if (precision == 0) {
      return Math.ceil(number);
    } else {
      let times = 10 ** precision;
      let tmp = number * times;
      let result = Math.ceil(tmp) / times;
      return result;
    }
  },
  /**
   * 类似heavelll.max,但是它接受iteratee迭代器来调用array中的每个元素，生成其值的排序标准
   * @param {Array} array 待迭代的数组
   * @param {Function} iteratee 迭代器
   * @returns {*}
   */
  maxBy: function (array, iteratee = this.identity) {
    if (typeof iteratee !== "function") {
      var func = this.iteratee(iteratee);
    } else {
      var func = iteratee;
    }
    let result = array.reduce((it, next) => {
      return func(it) > func(next) ? it : next;
    });
    return result;
  },
  /**
   * 类似heavelll.mean，但是他接受一个迭代器来调用array中的每个元素，生成其值的计算标准
   * @param {Array} array 待迭代的数组
   * @param {Function} iteratee 迭代器
   * @returns {Number}
   */
  meanBy: function (array, iteratee = this.identity) {
    let func =
      typeof iteratee == "function" ? iteratee : this.iteratee(iteratee);
    let max = 0;
    for (let i = 0; i <= array.length - 1; i++) {
      max += func(array[i]);
    }
    return max / array.length;
  },
  /**
   * 类似heavelll.max,但是它接受iteratee迭代器来调用array中的每个元素，生成其值的排序标准
   * @param {Array} array 待迭代的数组
   * @param {Function} iteratee 迭代器
   * @returns {Number}
   */
  minBy: function (array, iteratee = this.identity) {
    if (typeof iteratee !== "function") {
      var func = this.iteratee(iteratee);
    } else {
      var func = iteratee;
    }
    let result = array.reduce((it, next) => {
      return func(it) < func(next) ? it : next;
    });
    return result;
  },
  /**
   * 四舍五入法对数值处理至指定位数
   * @param {Number} number 待处理数值
   * @param {Number} precision 指定位数
   * @returns {Number}
   */
  round: function (number, precision = 0) {
    if (precision == 0) {
      return Math.round(number);
    } else {
      let times = 10 ** precision;
      let tmp = number * times;
      let result = Math.round(tmp) / times;
      return result;
    }
  },
  /**
   * 将两数相减
   * @param {Number} minuend 被减数
   * @param {Number} subtrahend 减数
   * @returns {Number}
   */
  subtract: function (minuend, subtrahend) {
    return minuend - subtrahend;
  },
  /**
   * 类似heavelll.sum方法，但是该方法使用迭代器将array数组内元素迭代后相加
   * @param {Array} array 待迭代数组
   * @param {Function} iteratee 迭代器
   * @returns {Number}
   */
  sumBy: function (array, iteratee = this.identity) {
    let func =
      typeof iteratee == "function" ? iteratee : this.iteratee(iteratee);
    let result = array.reduce((it, next) => {
      return it + func(next);
    }, 0);
    return result;
  },
  /**
   * 返回夹在lower和upper之间的参数
   * @param {Number} number
   * @param {Number} lower
   * @param {Number} upper
   * @returns {Number}
   */
  clamp: function (number, lower, upper) {
    return number > lower
      ? number < upper
        ? number
        : lower > upper
        ? lower
        : upper
      : lower < upper
      ? lower
      : number > upper
      ? number
      : upper;
  },
  /**
   * 查看目标参数是否在给定范围之间，不含end
   * @param {Number} number 待数值
   * @param {Number} start 开始处
   * @param {Number} end 结束处
   * @returns {Number}
   */
  inRange: function (number, start = 0, end) {
    if (arguments.length == 2) {
      return (number >= 0 && number < start) || (number >= start && number < 0);
    }
    return (
      (number >= start && number < end) || (number >= end && number < start)
    );
  },
  /**
   * 生成一个包括lower与upper之间的数，如果只提供一个参数则返回0到提供的数之间的数，如果floating为true，或者lower或upper是浮点数，返回浮点数
   * @param {Number} lower 下限
   * @param {Number} upper 上限
   * @param {Boolean} floating 是否返回浮点数
   * @returns {Number}
   */
  random: function (lower = 0, upper = 1, floating) {
    if (arguments.length == 0) {
      return Math.floor(Math.random() * 2);
    }
    if (arguments.length == 1) {
      return Math.floor(Math.random() * (lower + 1));
    }
    if (arguments.length == 2) {
      if (typeof upper == "boolean") {
        if (upper) {
          return Math.random() * lower;
        } else {
          if ((lower | 0) != lower) {
            return Math.random() * lower;
          } else {
            return Math.floor(Math.random() * (lower + 1));
          }
        }
      } else {
        if ((lower | 0) != lower || (upper | 0) != upper) {
          return Math.random() * (upper - lower) + lower;
        } else {
          return Math.floor(Math.random() * (upper - lower + 1) + lower);
        }
      }
    }
    if (floating) {
      return Math.random() * (upper - lower) + lower;
    } else {
      if ((lower | 0) != lower || (upper | 0) != upper) {
        return Math.random() * (upper - lower) + lower;
      } else {
        return Math.floor(Math.random() * (upper - lower + 1) + lower);
      }
    }
  },
  /**
   * 类似heavelll.assign方法，但是它遍历并继承来源对象的属性
   * @param {Object} object 目标对象
   * @param  {...Object} sources 来源对象
   * @returns {Object}
   */
  assignIn: function (object, ...sources) {
    for (var i = 0; i <= sources.length - 1; i++) {
      for (var j in sources[i]) {
        object[j] = sources[i][j];
      }
    }
    return object;
  },
  /**
   * 创建一个数组，以参数的路径将值传入该数组
   * @param {Object} object 待迭代的对象
   * @param  {...String} paths 待获取的元素路径，单独指定或指定在数组中
   * @returns {Array}
   */
  at: function (object, paths) {
    var arr = [];
    for (var i = 0; i <= paths.length - 1; i++) {
      var j = 0;
      let obj = object;
      var key = "";
      while (j < paths[i].length) {
        if (paths[i][j] == "[") {
          obj = obj[key];
          j++;
          key = "";
          continue;
        } else if (paths[i][j] == ".") {
          obj = obj[key];
          j++;
          key = "";
          continue;
        } else if (paths[i][j] == "]") {
          obj = obj[key];
          j += 2;
          key = "";
          continue;
        } else {
          key += paths[i][j];
          j++;
        }
      }
      if (paths[i][paths[i].length - 1] != "]") {
        obj = obj[key];
      }
      arr.push(obj);
    }
    return arr;
  },
  /**
   * 分配来源对象的可枚举属性到目标对象所有解析为undefined的属性上。来源对象从左向右应用，如果有相同属性名，后续的会被忽略
   * @param {Object} object 目标对象
   * @param  {...Object} sources 来源对象
   * @returns {Object}
   */
  defaults: function (object, ...sources) {
    for (var i = 0; i <= sources.length - 1; i++) {
      var keys = Object.keys(sources[i]);
      keys.forEach((key) => {
        object[key] = object[key] === undefined ? sources[i][key] : object[key];
      });
    }
    return object;
  },
  /**
   * 类似heavelll.defaults，但他会深拷贝目标对象
   * @param {Object} object 目标对象
   * @param  {...any} sources 来源对象
   * @returns {Object}
   */
  defaultsDeep: function (object, ...sources) {
    function parseP(obj, src) {
      if (typeof src == "object") {
        var keys = Object.keys(src);
        for (var i = 0; i <= keys.length - 1; i++) {
          if (typeof src[keys] == "object") {
            if (obj[keys[i]] === undefined) {
              obj[keys[i]] = {};
            }
            parseP(obj[keys[i]], src[keys[i]]);
          } else {
            if (obj[keys[i]] === undefined) {
              obj[keys[i]] = src[keys[i]];
            }
          }
        }
      } else {
        if (obj[keys[i]] === undfined) {
          obj[keys[i]] = src[keys[i]];
        }
      }
    }
    for (var i = 0; i <= sources.length - 1; i++) {
      var obj = object;
      parseP(obj, sources[i]);
    }
    return object;
  },
  /**
   * 与heavelll.find方法类似，但是它返回最先被predicate判断为真值的元素key，而不是元素key值
   * @param {Object} object 待检索对象
   * @param {Function} predicate 迭代器
   * @returns {*}
   */
  findKey: function (object, predicate = this.identity) {
    let func =
      typeof predicate == "function" ? predicate : this.iteratee(predicate);
    let keys = Object.keys(object);
    for (let i = 0; i <= keys.length - 1; i++) {
      if (func(object[keys[i]])) {
        return keys[i];
      }
    }
    return null;
  },
  /**
   * 与heavelll.findKey方法类似,但是它是从相反方向开始迭代
   * @param {Object} object 待检索对象
   * @param {Function} predicate 迭代器
   * @returns {*}
   */
  findLastKey: function (object, predicate = this.identity) {
    let func =
      typeof predicate == "function" ? predicate : this.iteratee(predicate);
    let keys = Object.keys(object).reverse();
    for (let i = 0; i <= keys.length - 1; i++) {
      if (func(object[keys[i]])) {
        return keys[i];
      }
    }
    return null;
  },
  /**
   * 使用iteratee迭代器遍历对象和继承的可枚举属性。iteratee会传三个参数{value,key,object}如果返回false，iteratee会提前推出遍历
   * @param {Object} object 待遍历对象
   * @param {Function} iteratee 迭代器
   * @returns {Object}
   */
  forIn: function (object, iteratee = this.identity) {
    for (var i in object) {
      iteratee(object[i], i, object);
    }
    return object;
  },
  /**
   * 与heavelll.forIn方法类似，但是该方法会从相反方向开始迭代
   * @param {Object} object 待遍历对象
   * @param {Function} iteratee 迭代器
   * @returns {Object}
   */
  forInRight: function (object, iteratee = this.identity) {
    var arr = [];
    for (var i in object) {
      arr.push(i);
    }
    for (var j = arr.length - 1; j >= 0; j--) {
      iteratee(object[arr[j]], arr[j], object);
    }
    return object;
  },
  /**
   * 使用iteratee遍历对象自身的可枚举属性。iteratee会传入3个参数{value,key,object}。如果返回false，iteratee会提前推出遍历
   * @param {Object} object 待遍历对象
   * @param {Function} iteratee 迭代器
   * @returns {Object}
   */
  forOwn: function (object, iteratee = this.identity) {
    var keys = Object.keys(object);
    for (var i = 0; i <= keys.length - 1; i++) {
      iteratee(object[keys[i]], keys[i], object);
    }
    return object;
  },
  /**
   * 类似heavelll.forOwn方法，但是该方法从相反方向开始迭代
   * @param {Object} object 待迭代对象
   * @param {Function} iteratee 迭代器
   * @returns {Object}
   */
  forOwnRight: function (object, iteratee = this.identity) {
    var keys = Object.keys(object).reverse();
    for (var i = 0; i <= keys.length - 1; i++) {
      iteratee(object[keys[i]], keys[i], object);
    }
    return object;
  },
  /**
   * 返回一个返回数值的函数
   * @param {*} value 从新函数中返回的数值
   * @returns {Function}
   */
  constant: function (value) {
    return function () {
      return value;
    };
  },
  /**
   * 创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性
   * @param {Object} object 要检查的对象
   * @returns {Array}
   */
  functions: function (object) {
    return Object.keys(object);
  },
  /**
   * 创建一个函数属性名称的数组，函数属性名称来自object对象自身和继承的可美剧属性
   * @param {Object} object 待检查对象
   * @returns {Array}
   */
  functionsIn: function (object) {
    var arr = [];
    for (var i in object) {
      arr.push(i);
    }
    return arr;
  },
  /**
   * 得到在给出的对象的路径的数值，如果没有找到，则返回defaultValue
   * @param {Object} object 待查询对象
   * @param {Array|String} path 需要获取的路径
   * @param {*} defaultValue 默认返回值
   * @returns
   */
  get: function (object, path, defaultValue) {
    if (typeof path == "object") {
      let obj = object;
      for (let i = 0; i <= path.length - 1; i++) {
        if (obj[path[i]] == undefined) {
          return defaultValue;
        } else {
          obj = obj[path[i]];
        }
      }
      return obj;
    } else {
      let obj = object;
      let j = 0;
      let key = "";
      while (j < path.length) {
        if (path[j] == "[" || path[j] == ".") {
          if (j == path.length - 1) {
            j++;
            continue;
          }
          if (obj[key] === undefined) {
            return defaultValue;
          } else {
            obj = obj[key];
            key = "";
            j++;
          }
        } else if (path[j] == "]") {
          if (obj[key] === undefined) {
            return defaultValue;
          } else {
            obj = obj[key];
            key = "";
            j += 2;
          }
        } else {
          key += path[j];
          j++;
        }
      }
      if (path[path.length - 1] != "]") {
        if (obj[key] === undefined) {
          return defaultValue;
        } else {
          obj = obj[key];
          return obj;
        }
      }
    }
  },
  /**
   * 创建一个继承prototype的对象。如果提供了分配对象，它的可枚举属性会被分配到创建的对象上
   * @param {Object} prototype 要继承的对象
   * @param {Object} properties 待分配的对象
   * @returns {Object}
   */
  create: function (prototype, properties) {
    var result = Object.create(prototype);
    if (properties !== undefined) {
      this.assign(result, properties);
    }
    return result;
  },
  /**
   * 查看一个对象中的路径是否是直接属性
   * @param {Object} object 待查询对象
   * @param {Array|String} path 待查询路径
   * @returns {Boolean}
   */
  has: function (object, path) {
    if (typeof path == "object") {
      let obj = object;
      for (let i = 0; i <= path.length - 1; i++) {
        if (obj[path[i]] == undefined) {
          return false;
        } else {
          if (obj.hasOwnProperty(path[i])) {
            obj = obj[path[i]];
          } else {
            return false;
          }
        }
      }
      return true;
    } else {
      let obj = object;
      let j = 0;
      let key = "";
      while (j < path.length) {
        if (path[j] == "[" || path[j] == ".") {
          if (j == path.length - 1) {
            j++;
            continue;
          }
          if (obj[key] === undefined) {
            return false;
          } else {
            if (obj.hasOwnProperty(key)) {
              obj = obj[key];
              key = "";
              j++;
            } else {
              return false;
            }
          }
        } else if (path[j] == "]") {
          if (obj[key] === undefined) {
            return false;
          } else {
            if (obj.hasOwnProperty(key)) {
              obj = obj[key];
              key = "";
              j += 2;
            } else {
              return false;
            }
          }
        } else {
          key += path[j];
          j++;
        }
      }
      if (path[path.length - 1] != "]") {
        if (obj[key] === undefined) {
          return false;
        } else {
          if (obj.hasOwnProperty(key)) {
            obj = obj[key];
          } else {
            return false;
          }
          return true;
        }
      }
    }
  },
  /**
   * 检查所给对象的路径是否为直接属性或继承属性
   * @param {Object} object 待检索对象
   * @param {Array|String} path 待检索路径
   * @returns {Boolean}
   */
  hasIn: function (object, path) {
    var result = this.get(object, path);
    return result !== undefined;
  },
  /**
   * 类似heavelll.invert方法，除了倒置对象是每个元素经过迭代函数处理后返回的结果，每个键名反转后对应反转的值是一个负责生成反转值key的数组
   * @param {Object} object 待处理对象
   * @param {Function} interatee 迭代函数
   * @returns {Object}
   */
  invertBy: function (object, iteratee = this.identity) {
    let result = {};
    let keys = Object.keys(object);
    for (let i = 0; i <= keys.length - 1; i++) {
      let key = iteratee(object[keys[i]]);
      if (result[key] !== undefined) {
        if (result[key].indexOf(keys[i]) == -1) {
          result[key].push(keys[i]);
        }
      } else {
        result[key] = [];
        result[key].push(keys[i]);
      }
    }
    return result;
  },
  /**
   * 创建一个含目标对象的继承属性及可枚举属性数组
   * @param {Object} object 待检索对象
   * @returns {Array}
   */
  keysIn: function (object) {
    var result = [];
    for (var i in object) {
      result.push(i);
    }
    return result;
  },
  /**
   * 创建一个对象，对象的值与object相同，而且key是通过iteratee运行object中每个自身可枚举属性名字符串产生，iteratee接受三个参数{value,key,object}
   * @param {Object} object 待遍历的对象
   * @param {Function} iteratee 迭代函数
   * @returns {Object}
   */
  mapKeys: function (object, iteratee = this.identity) {
    let result = {};
    for (var i in object) {
      result[iteratee(object[i], i, object)] = object[i];
    }
    return result;
  },
  /**
   * 创建一个对象，该对象的key与object对象相同，值是通过iteratee运行object中每个自身可枚举属性名字符串产生，iteratee接受三个参数{value,key,object}
   * @param {Object} object 待遍历对象
   * @param {Function} iteratee 迭代函数
   * @returns {Object}
   */
  mapValues: function (object, iteratee = this.identity) {
    let func =
      typeof iteratee == "function" ? iteratee : this.iteratee(iteratee);
    let result = {};
    let keys = Object.keys(object);
    for (var i = 0; i <= keys.length - 1; i++) {
      result[keys[i]] = func(object[keys[i]]);
    }
    return result;
  },
  /**
   * 类似this.assign方法，但是它递归合并来源对象的可枚举及继承属性到目标对象，遇到相同属性名时，如果属性名时纯对象或数组的时候，会合并属性值
   * @param {Object} object 目标对象
   * @param  {Object} souces 来源对象
   * @returns {Object}
   */
  merge: function (object, ...sources) {
    // function trav(obj, source) {
    //   if(typeof(source) == 'object') {
    //     for(var key in source) {
    //       if(key in obj) {
    //         if(typeof(obj[key]) == 'object') {
    //           if(!Array.isArray(obj[key])) {
    //             obj
    //           }
    //           trav(obj[key], source[key]);
    //         } else {
    //           obj[key] = souce[key];
    //         }
    //       } else {
    //         obj[key] = souce[key];
    //       }
    //     }
    //   } else {
    //     if(1) {
    //     }
    //   }
    // }
    // for(var i = 0; i <= sources.length - 1; i++) {
    //   let souce = sources[i];
    //   let obj = object;
    //   trav(obj, source);
    // }
    // return object;
  },
  mergeWith: function (object, souces, customizer) {},
  /**
   * 创建一个对象返回由predicate断言函数对object对象的继承属性及可枚举属性进行断言返回的不是true的属性，predicate接受两个参数{value,key}
   * @param {Object} object 待遍历对象
   * @param {Function} predicate 断言函数
   * @returns {Object}
   */
  omitBy: function (object, predicate = this.identity) {
    let result = {};
    for (var key in object) {
      if (!predicate(object[key], key)) {
        result[key] = object[key];
      }
    }
    return result;
  },
  /**
   * 类似heavelll.get方法，但是如果解析到的是一个函数，那么绑定this到这个函数并返回执行后的结果
   * @param {Object} object 待检索对象
   * @param {Array|String} path 待解析路径
   * @param {*} defautValue 如果解析值为undefined,返回此值
   * @returns {*}
   */
  result: function (object, path, defaultValue) {
    let result = this.get(object, path, defaultValue);
    if (typeof result == "function") {
      return result.call(this);
    }
    return result;
  },
  /**
   * 类似heavelll.set方法，但是它接受一个customizer函数，调用生成对象的path，如果customizer返回undefined将会有他的处理方法代替，customiizer调用三个参数{nsValue,key,nsObject}
   * @param {Object} object 待修改对象
   * @param {Array|String} path 待设置对象路径
   * @param {*} value 待设置的值
   * @param {Function} customizer 定制函数
   * @returns {Object}
   */
  setWith: function (object, path, value, customizer) {
    // let p = customizer(path);
    return this.set(object, path, value);
  },
  /**
   * 创建一个数组，将所给对象的继承的及可枚举的键及键值以两两一个数组的形式以数组的形式返回
   * @param {*} object
   */
  toPairsIn: function (object) {
    let result = [];
    for (let key in object) {
      result.push([key, object[key]]);
    }
    return result;
  },
  /**
   * reduce的替代，累加器，将转换object对象为一个新的accumulator对象，结果来自iteratee处理自身的可枚举属性进行累加，如果不提供初始accumulator，将使用[[prototype]],iteratee接四个参数{accumulator,value,key,object}，如果返回false，iteratee会提前退出
   * @param {Object} object 待迭代对象
   * @param {Function} iteratee 迭代函数
   * @param {*} accumulator 初始值
   * @returns {*}
   */
  transform: function (object, iteratee = this.identity, accumulator) {
    let keys = Object.keys(object);
    let result = accumulator;
    for (let i = 0; i <= keys.length - 1; i++) {
      var decide = iteratee(result, object[keys[i]], keys[i], object);
      if (decide === false) {
        break;
      }
    }
    return result;
  },
  /**
   * 移除对象指定路径的属性
   * @param {Object} object 目标对象
   * @param {Array|String} path 路径
   * @returns {Boolean}
   */
  unset: function (object, path) {
    if (typeof path == "object") {
      let obj = object;
      for (var i = 0; i <= path.length - 1; i++) {
        if (i == path.length - 1) {
          return delete obj[path[i]];
        }
        if (typeof obj[path[i]] !== "object") {
          return false;
        } else {
          obj = obj[path[i]];
        }
      }
    } else {
      let j = 0;
      let obj = object;
      let key = "";
      while (j < path.length) {
        if (path[j] == "[" || path[j] == ".") {
          if (j == 0) {
            j++;
            continue;
          }
          if (typeof obj[key] != "object") {
            return false;
          } else {
            obj = obj[key];
            j++;
            key = "";
          }
        } else if (path[j] == "]") {
          if (j == path.length - 1) {
            return delete obj[key];
          }
          if (typeof obj[key] != "object") {
            return false;
          } else {
            obj = obj[key];
            j += 2;
            key = "";
          }
        } else {
          key += path[j];
          j++;
        }
      }
      if (obj[path.length - 1] !== "]") {
        return delete obj[key];
      }
    }
  },
  /**
   * 类似heavelll.set方法，但是它接受一个updater函数来对目标值进行处理
   * @param {Object} object 目标对象
   * @param {Array|String} path 设置路径
   * @param {Function} updater 处理函数
   * @returns {Object}
   */
  update: function (object, path, updater) {
    let value = updater(this.get(object, path, false));
    this.set(object, path, value);
  },
  updateWith: function (object, path, updater, customizer) {
    this.update(object, path, updater);
    return object;
  },
  /**
   * 将目标对象的继承属性及可枚举属性值存入一个数组返回
   * @param {Object} object 目标函数
   * @returns {Array}
   */
  valuesIn: function (object) {
    let result = [];
    for (var key in object) {
      result.push(object[key]);
    }
    return result;
  },
  deburr: function () {},
  /**
   * 将参数转为整数
   * @param {String} string 目标参数
   * @param {Number} radix 进制,默认为10
   * @returns {Number}
   */
  parseInt: function (string, radix = 10) {
    return parseInt(string, radix);
  },
};
