// 实现 (5).add(3).minus(2)功能

Number.prototype.add = function (n) {
  if (typeof n !== "number") {
    throw "this is not a number";
  }
  return this + n;
};

Number.prototype.minus = function (n) {
  if (typeof n !== "number") {
    throw "this is not a number";
  }
  return this - n;
};

console.log((5).add(3).minus(2));
