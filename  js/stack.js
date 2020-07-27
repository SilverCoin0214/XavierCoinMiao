function Stack() {
  let items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    console.log(items.toString());
  };
}

// es6 类的写法
// const items = new WeakMap();

// class Stack {
//   constructor() {
//     items.set(this, []);
//   }

//   push(element) {
//     let s = items.get(this);
//     s.push(element);
//   }

//   pop() {
//     let s = items.get(this);
//     let r = s.pop();
//     return r;
//   }
// }

function divideBy2(decNumber) {
  var remStack = new Stack();
  var rem;
  var binaryString = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}
