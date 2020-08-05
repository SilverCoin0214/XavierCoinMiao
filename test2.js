var figlet = require("figlet");

var bigHelloWorld = figlet.text(
  "hello World",
  { font: "3-D" },
  (err, result) => {
    console.log(result);
  }
);
