function array2list(ary) {
  if (ary.length == 0) {
    return null;
  }

  var head = {
    value: ary[0],
    next: null,
  };

  var prev = head;

  for (var i = 1; i < ary.length; i++) {
    var node = {
      value: ary[i],
      next: null,
    };

    prev.next = node;
    prev = node;
  }

  return head;
}

console.log(array2list([1, 2, 3, 4, 5]));
