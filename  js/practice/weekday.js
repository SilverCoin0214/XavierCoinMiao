var test = require("./test.js");
var test2 = require("./test2.js");

var names = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday",
];

exports.name = function (number) {
  return names[number];
};
exports.number = function (name) {
  return names.indexOf(name);
};
