function report(str) {
  return console.log(str);
}

function assert(x) {
  return console.assert(x);
}

//
//
//

function add(x, y, f) {
  return f(x) + f(y);
}

console.log(add(4, 6, Math.abs));
