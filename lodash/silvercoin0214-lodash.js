var silvercoin0214 = {
  isNull: function (val) {
    if (val == null && val != undefined) {
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
};

console.log(silvercoin0214.compact([2, 3, 5, NaN]));
