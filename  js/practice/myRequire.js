function readfile(filename) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", filename, false);
  xhr.send();
  return xhr.responseText;
}

function require(filename) {
  var content = readfile(filename);
  var modFunc = new Function(content);

  return modFunc();
}

(function () {
  var jQuery = require("./myJquery.js");
});
