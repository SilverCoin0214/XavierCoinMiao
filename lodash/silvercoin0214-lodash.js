var silvercoin0214 = {
  isNull: function (val) {
    if (val === null) {
      return true;
    } else {
      return false;
    }
  },

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

  // String 类的方法
  //
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
};

console.log(silvercoin0214.dropRight([1, 2, 3], 5));
