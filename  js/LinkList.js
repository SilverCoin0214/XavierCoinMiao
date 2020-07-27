function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function (element) {
    let node = new Node(element);
    let current;

    // 列表中第一个节点如果为空, 就直接添加, 否则循环到最后
    if (head === null) {
      head = node;
    } else {
      current = head;

      // 找到最后一项
      while (current.next) {
        current = current.next;
      }

      // 将最后一项的next连接到Node上
      current.next = node;
    }

    length++;
  };

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let privious;
      let index = 0;

      // 在第一个位置添加
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        // 循环找到位置处
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // 把要插入的节点的next指向当前, 把之前的节点的next节点指向节点.
        node.next = current;
        privious.next = node;
      }

      // 更新列表长度
      length++;

      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let currnet = head;
      let previous;
      let index = 0;

      if (position === 0) {
        head = currnet.next;
      } else {
        while (index++ < position) {
          previous = currnet;
          currnet = currnet.next;
        }

        previous.next = currnet.next;
      }

      length--;

      return currnet.element;
    } else {
      return null;
    }
  };

  this.indexOf = function (element) {
    let current = head;
    let index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }

      index++;

      current = current.next;
    }

    return -1;
  };
  this.isEmpty = function () {
    return length === 0;
  };
  this.size = function () {
    return length;
  };
  this.getHead = function () {
    return head;
  };
  this.toString = function () {
    let current = head;
    string = "";
    while (current) {
      string += current.element + (current.next ? "->" : "");
      current = current.next;
    }

    return string;
  };

  this.print = function () {};
}

this.remove = function (element) {
  let index = this.indexOf(element);
  return this.removeAt(index);
};

var list = new LinkedList();

list.append(15);
list.append(10);

// 数组转链表
function ary2List(ary) {
  if (ary.length === 0) {
    return null;
  }

  var list = [];

  for (let i = 0; i < ary.length; i++) {
    var node = {
      val: ary[i],
      next: null,
    };

    list.push(node);
  }

  for (let i = 0; i < ary.length - 1; i++) {
    list[i].next = list[i + 1];
  }

  return list[0];
}

function ary2List2(ary) {
  if (ary.length === 0) {
    return null;
  }

  var dummy = {};
  var prev = dummy;

  for (let i = 0; i < ary.length; i++) {
    var node = {
      val: ary[i],
      next: null,
    };

    prev.next = node;
    prev = node;
  }

  return dummy.next;
}

function ary2List3(ary) {
  if (ary.length === 0) {
    return null;
  }

  var head = {
    val: ary[0],
    next: null,
  };

  head.next = ary2List3(ary.slice(1));

  return head;
}

function ary2List4(ary, start = 0) {
  if (start == ary.length) {
    return null;
  }

  var head = {
    val: ary[start],
    next: ary2List4(ary, start + 1),
  };

  return head;
}

function list2Ary(head) {
  var ary = [];

  if (head == null) {
    return ary;
  }

  while (head) {
    ary.push(head.val);
    head = head.next;
  }

  return ary;
}

function list2Ary2(head) {
  if (head === null) {
    return [];
  }

  return [head.val].concat(list2Ary2(head.next));
}

// 在头部增加节点
function prepend(val, head) {
  var node = {
    val: val,
    next: head,
  };

  return node;
}


// 末尾加节点
function append(val, head) {
  if(head === null) {
    return {
      val:val,
      next:null
    }
  }

  var current = head

  while(current.next) {
    current = current.next
  }

  current.next = {
    val : val,
    next = null
  }

  return head
}

function apend2(val, head) {
  if(head === null) {
    return {
      val: val,
      next:null
    }
  }

  head.next = append2(val, head.next)
  return head
}

// 找到索引下的值
function nth(head, idx)  {
  if(head == null || idx < 0) {
    return undefined
  }

  var i = 0
  var p = head

  while(p.next && i < idx) {
    p = p.next
    i++
  }

  if(i ==  idx) {
    return p.val
  } else {
    return undefined
  }
}


function nth2(head, idx) {
  if(head == null || idx < 0) {
    return undefined
  }

  if(idx === 0) {
    return head.val
  }

  return nth2(head.next, idx - 1)
}
