function HashTable() {
  var table = [];

  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    console.log(position + "-" + key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined;
  };

  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  };
}

var hash = new HashTable();
hash.put("Gandalf", "gandalf@eamil.com");
hash.put("john", "jhonsnow@eamil.com");
hash.put("Tyrion", "tyrion@eamil.com");

// 分离链接方法, 在每个位置创建链表
function HashTable2() {
  var table = [];
  var ValuePair = function (key, value) {
    this.key = key;
    this.valaue = value;

    this.toString = function () {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  this.get = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }

      if (current.element.key === key) {
        return current.element.value;
      }
    }

    return undefined;
  };

  this.remove = function (key) {
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }

          return true;
        }

        current = current.next;
      }

      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }

      return false;
    }
  };
}

function HashTable3() {
  var table = [];
  var ValuePair = function (key, value) {
    this.key = key;
    this.valaue = value;

    this.toString = function () {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function (key, value) {
    var position = loseloseHashCode(key);

    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };

  this.get = function (key) {
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          return table[position].value;
        }
      }
    }

    return undefined;
  };

  this.remove = function(key) {
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
            table[index] = undefined
        }
      }
    }

    return undefined;
  };
  }
}
