function foo() {
  var a = "hello world";
  function bar() {
    console.log(a);
  }

  return bar;
}

var baz = foo();
baz();
