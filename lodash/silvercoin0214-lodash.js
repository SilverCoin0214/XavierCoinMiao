var silvercoin0214 = {
  isNull: function (val) {
    if (val == null || val == undefined) {
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
};

console.log(silvercoin0214.chunk([1, 2, 3], 2));
