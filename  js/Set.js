function Set() {
  let items = {};

  this.has = function (value) {
    return items.hasOwnProperty(value);
  };

  // 添加元素
  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  // 移除元素
  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function () {
    items = {};
  };

  // 集合长度
  this.size = function () {
    return Object.keys(items).length;
  };

  this.sizeLegacy = function () {
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        ++count;
      }
    }

    return count;
  };

  // 输出数值
  this.values = function () {
    let values = [];
    let keys = Object.keys(items);
    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }

    return values;
  };

  // 并集
  this.union = function (otherSet) {
    let unionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  // 交集
  this.intersection = function (otherSet) {
    let intersectionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  };

  // 差集
  this.difference = function (otherSet) {
    let differenceSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  };

  // 子集
  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
    }

    return true;
  };
}

let set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());

set.remove(1);
console.log(set.values());
set.remove(2);
console.log(set.values());

// 并集操作
let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
unionAB.values();

// 交集操作
let setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);

let setD = new Set();
setD.add(2);
setD.add(3);
setD.add(4);

let intersectionCD = setC.intersection(setD);
intersectionCD.values();

// 差集
let differenceCD = setC.difference(setD);
differenceCD.values();

// 子集

let setE = new Set();
setE.add(2);
setE.add(1);

let setF = new Set();
setF.add(1);
setF.add(2);
setF.add(3);

let setG = new Set();
setG.add(2);
setG.add(3);
setG.add(4);

setE.subset(setF);
setE.subset(setG);
