// 下列代码在什么情况下a会打印为1?

var a;

// 隐式转换会调用 本类型的toString()或者valueOf方法
a = {
  i: 1,
  toString() {
    return a.i++;
  },
};

a = { num: 0 };
a.valueOf = function () {
  return ++a.num;
};

if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}
