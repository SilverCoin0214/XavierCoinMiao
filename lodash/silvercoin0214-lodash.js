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
        ary[i] == false ||
        ary[i] == 0 ||
        ary[i] == null ||
        ary[i] == undefined ||
        ary[i] == "" ||
        ary[i] == "" ||
        ary[i] == NaN
      ) {
        ary.splice(i, 1);
        i = 0;
      }
    }

    return ary;
  },
};
