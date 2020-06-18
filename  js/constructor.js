function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype = {
  constructor: Vector,
  plus(vec) {
    return new Vector(this.x + vec.x, this.y + vec.y);
  },

  minus(vec) {
    return new Vector(this.x - vec.x, this.y - vec.y);
  },
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
};

// 放在原型上是给实例使用的,
Vector.prototype.plus = function (vec) {
  return new Vector(this.x + vec.x, this.y + vec.y);
};

Vector.prototype.minus = function (vec) {
  return new Vector(this.x - vec.x, this.y - vec.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
});

// 直接放在类上的方法是通用的.
Vector.from = function (str) {
  var x = 3;
  var y = 3;

  return new Vector(x, y);
};

v1 = new Vector(2, 3);
v2 = new Vector(3, -5);
v3 = v1.plus(v2);
v4 = v1.minus(v2);

//
//
//
//
//
function Complex(real, imag) {
  this.real = real;
  this.imag = imag;
}

Complex.prototype.plus = function (com) {
  var newReal = this.real + com.real;
  var newImag = this.imag + com.imag;
  return new Complex(newReal, newImag);
};

Complex.prototype.minus = function (com) {
  var newReal = this.real - com.real;
  var newImag = this.imag - com.imag;
  return new Complex(newReal, newImag);
};

Complex.prototype.multiple = function (com) {
  var newReal = this.real * com.real - this.imag * com.imag;
  var newImag = this.real * com.imag + this.imag * com.real;

  if (newImag == 0) {
    return new Complex(newReal, null);
  } else {
    return new Complex(newReal, newImag);
  }
};

Complex.prototype.div = function (com) {
  var Helper = new Complex(com.real, -com.imag);
  var down = com.multiple(Helper);
  var up = this.multiple(Helper);
  var real = up.real / down.real;
  var imag = up.imag / down.real;
  return new Complex(real, imag);
};

Complex.prototype = {
  toString() {
    return this.real + "+" + this.imag + "i";
  },
};

Complex.fromString = function (str) {};

var c1 = new Complex(1, 2);
var c2 = new Complex(-3, 5);
var c3 = new Complex(-1, 2);

//
//
//
//
//
function MySet(initial) {
  this.elements = [];
  for (var i = 0; i < initial.length; i++) {
    this.add(initial[i]);
  }
}

MySet.prototype = {
  add(value) {
    if (!this.has(value)) {
      this.elements.push(value);
    }

    return this;
  },
  delete(value) {
    var idx = this.elements.indexOf(value);
    if (idx >= 0) {
      this.elements.splice(idx, 1);
    }

    return this;
  },
  has(value) {
    var elements = this.elements;

    if (value !== value) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i] !== elements[i]) {
          return true;
        }
      }
    }

    for (var i = 0; i < elements.length; i++) {
      if (value === elements[i]) {
        return true;
      }
    }

    return false;
  },
  clear() {
    this.elements.length = 0;
    return this;
  },
  get size() {
    return this.elements.length;
  },

  toString() {
    return "Set {" + this.element.join(", ") + "}";
  },
};

///
///
//
//
//
function MyMap(initials) {
  this._keys = [];
  this._values = [];

  for (var i = 0; i < initials.length; i++) {
    this.set(...initials[i]);
  }
}

MyMap.prototype = {
  keys() {},
  values() {},
  forEach(action) {},

  _indexOfKey(k) {
    if (k !== k) {
      // k is NaN
      for (var i = 0; i < this._keys.length; i++) {
        if (this.key[i] !== this.key[i]) {
          return i;
        }
      }
      return -1;
    } else {
      return this._keys.indexOf(k);
    }
  },

  set(k, v) {
    if (!this.has(k)) {
      this._keys.push(k);
      this._values.push(v);
    } else {
      var idx = this._indexOfKey(k);
      this._values[idx] = v;
    }

    return this;
  },
  get(k) {
    var idx = this._indexOfKey(k);
    return this._values[idx];
  },
  delete(k) {
    var idx = this._indexOfKey(k);
    if (k >= 0) {
      this._keys.splice(idx, 1);
      this._values.splice(idx, 1);
    }
    return this;
  },
  has(k) {
    var idx = this._indexOfKey(k);
    if (idx >= 0) {
      return true;
    } else {
      return false;
    }
  },
  clear() {
    this._keys.length = 0;
    this._values.length = 0;
  },
  get size() {
    return this._keys.length;
  },
};
