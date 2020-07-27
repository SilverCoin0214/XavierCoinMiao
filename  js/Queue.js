// 队列
function Queue() {
  let items = [];

  this.enqueue = function (...element) {
    items.push(...element);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.IsEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };
}

// ES6改写队列部分实现
let Queue2 = (function () {
  const items = new WeakMap();

  class Queue2 {
    constructor() {
      items.set(this, []);
    }

    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }

    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }
  }

  return Queue2;
})();

// 优先队列部分实现
function PriorityQueue() {
  let items = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push(queueElement);
    }
  };

  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  };
}

//循环队列部分实现
function hotPotato(nameList, num) {
  let queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminated = queue.dequeue();
    console.log(eliminated + "在击鼓传花中被淘汰");
  }

  return queue.dequeue();
}

let names = ["john", "jack", "camila", "ingrid", "carl"];
let winner = hotPotato(names, 7);
console.log(winner);

class Queue3 {
  constructor() {
    this.items = [];
  }

  next() {
    return this.items[0];
  }

  push(element) {
    return this.items.push(element);
  }

  length() {
    return this.items.length;
  }
}

var q = new Queue3();

q.push(1);
q.push(2);
q.push(3);
