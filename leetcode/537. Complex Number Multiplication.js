/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  var aryA = a.split("+");
  var aryB = b.split("+");

  var realA = aryA[0];
  var realB = aryB[0];
  var imagA = aryA[1].slice(0, -1);
  var imagB = aryB[1].slice(0, -1);

  var real = realA * realB - imagA * imagB;
  var imag = realA * imagB + realB * imagA;

  return real + "+" + imag + "i";
};

var a = "1+1i";
var b = "1+1i";
console.log(complexNumberMultiply(a, b));
