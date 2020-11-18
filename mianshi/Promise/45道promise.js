// https://juejin.im/post/6844904077537574919#heading-14 地址

/**
 *   promise基础题 ---- 全对
 *
 */

// 题目1:

const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
});
console.log("1", promise1);

// 结果:
// promise1
// "1" Promise{<pending>}

// -------------------------------------------------------------

// 题目2:

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve("success");
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);

// 结果:
// 1
// 2
// 4
// 3

// -------------------------------------------------------------

// 题目3:

const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);

// 结果:
// 1
// 2
// 4
// 解答: 3永远不会输出, 因为promise一直是pending

// -------------------------------------------------------------

// 题目4:

const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
  resolve("resolve1");
});
const promise2 = promise1.then((res) => {
  console.log(res);
});
console.log("1", promise1);
console.log("2", promise2);

// 结果:
// promise1
// "1" Promise{<fufilled>: 'resolve1'}
// "2" Promise{<pending>}
// resolve1

// --------------------------------------------------------------

// 题目5:

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
fn().then((res) => {
  console.log(res);
});
console.log("start");

// 结果:
// 1
// "start"
// "success"

// -------------------------------------------------------------

// 题目6

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("start");
fn().then((res) => {
  console.log(res);
});

// 结果:
// "start"
// 1
// "success"

// -------------------------------------------------------------

/******
 *
 *    promise + setTimeout ------------------  全对
 */

// 题目1

console.log("start");
setTimeout(() => {
  console.log("time");
});
Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");

// 结果:
// 'start'
// 'end'
// 'resolve'
// 'time'

// ------------------------------------------------------------------

// 题目2:

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

// 结果:

// 1
// 2
// 4
// "timeStart"
// "timeEnd"
// "success"

// --------------------------------------------------------------------

// 题目3.1 :

setTimeout(() => {
  console.log("timer1");
  setTimeout(() => {
    console.log("timer3");
  }, 0);
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");

// 结果

// 'start'
// 'timer1'
// 'timer2'
// 'timer3'

// 题目3.2

setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");

// 结果:

// 'start'
// 'timer1'
// 'promise'
// 'timer2'

// ------------------------------------------------------------------

// 题目4:

Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");

// 结果:

// 'start'
// 'promsie1'
// 'timer1'
// 'promise2'
// 'timer2'

// -------------------------------------------------------------------------

// 题目5:

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

// 结果:

// 'promise1' Promise{<pending>}
// 'promise2' Promise{<pending>}
// 抛出错误 error!!!
// 'promise1' Promise{<fufilled>: 'success'}
// 'promise2' Prmisee{<rejected>: Error: error!!!}

// -------------------------------------------------------------------------

// 题目6:

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    console.log("timer1");
  }, 1000);
  console.log("promise1里的内容");
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("timer2");
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

// 结果:

// "promise1里的内容"
// "promise1" Promise{<pending>}
// "promise2" Promise{<pending>}
// "timer1"
// 抛出错误  Error: error!!!
// "timer2"
// "promise1" Promise{<fufilled>: "success"}
// "promise2" Promise{<rejected>: Error: error!!!}

// ---------------------------------------------------------------------------

/***
 *
 *     Promise里的then, catch, finally        ---------------- 错了2和10
 */

// 题目1:

const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

// 结果:

// "then: success1"

// -----------------------------------------------------------------------------

// 题目2: --- 这题没答对

const promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("success2");
});
promise
  .then((res) => {
    console.log("then1: ", res);
  })
  .then((res) => {
    console.log("then2: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  })
  .then((res) => {
    console.log("then3: ", res);
  });

// 结果:

// "catch: error"
// "then3: " undefined

// catch也会返回promise, 但是没有值, 所以是undefined

// --------------------------------------------------------------------

// 题目3:

Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// 结果:

// 1
// 2

// -----------------------------------------------------------------------

// 题目4:

Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// 结果:

// 1
// 3

// -----------------------------------------------------------------------

// 题目5:

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("timer");
    resolve("success");
  }, 1000);
});
const start = Date.now();
promise.then((res) => {
  console.log(res, Date.now() - start);
});
promise.then((res) => {
  console.log(res, Date.now() - start);
});

// 结果:

// 'timer'
// 'success' 1001
// 'success' 1002

// ----------------------------------------------------------------------

// 题目6:

Promise.resolve()
  .then(() => {
    return new Error("error!!!");
  })
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

// 结果:

// "then: " "Error: error!!!"

// ---------------------------------------------------------------------

// 题目7:
const promise = Promise.resolve().then(() => {
  return promise;
});
promise.catch(console.err);

// 结果:

// 报错, 死循环. then或者catch里不能递归自身promise

// ----------------------------------------------------------------

// 题目8:

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 结果:

// 1
// 值穿透

// -----------------------------------------------------------------

// 题目9:

Promise.reject("err!!!")
  .then(
    (res) => {
      console.log("success", res);
    },
    (err) => {
      console.log("error", err);
    }
  )
  .catch((err) => {
    console.log("catch", err);
  });

// 结果:

// 'error err!!!'

// --------------------------------------------------------------------

// 题目10:  ---- 这题错了, 微任务的微任务是会排队在后面

Promise.resolve("1")
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("finally");
  });
Promise.resolve("2")
  .finally(() => {
    console.log("finally2");
    return "我是finally2返回的值";
  })
  .then((res) => {
    console.log("finally2后面的then函数", res);
  });

// 结果:

// '1'
// 'finally2'
// 'finally'
// 'finally2后面的then函数  2'

// 题目10.2

Promise.resolve("1")
  .finally(() => {
    console.log("finally1");
    throw new Error("我是finally中抛出的异常");
  })
  .then((res) => {
    console.log("finally后面的then函数", res);
  })
  .catch((err) => {
    console.log("捕获错误", err);
  });

// 结果:

// 'finally1'
//  '捕获错误  我是finally中抛出的异常'

// 题目10.3

function promise1() {
  let p = new Promise((resolve) => {
    console.log("promise1");
    resolve("1");
  });
  return p;
}
function promise2() {
  return new Promise((resolve, reject) => {
    reject("error");
  });
}
promise1()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally1"));

promise2()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally2"));

// 结果:

// 'promise1'
// '1'
// 'error'
// 'finally1'
// 'finally2'

// ----------------------------------------------------------------------

/**
 *   promise里的race 和 all ---------------------  错了题目2, 3
 *
 */

// 题目1:

function runAsync(x) {
  const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
  return p;
}
Promise.all([runAsync(1), runAsync(2), runAsync(3)]).then((res) =>
  console.log(res)
);

// 结果:

// 1
// 2
// 3
// [1,2,3]

// --------------------------------------------------------------------

// 题目2:  ------ 这题答错了 ,  all只要有一个是reject, 就会返回第一个Reject的内容

function runAsync(x) {
  const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
  return p;
}
function runReject(x) {
  const p = new Promise((res, rej) =>
    setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
  );
  return p;
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 结果:

// 1s后输出
// 1
// 3
// 2s后输出
// 2
// Error: 2
// 4s后输出
// 4

// --------------------------------------------------------------------

// 题目3:   ---- 也错了, 忘了写后面的2和3

function runAsync(x) {
  const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
  return p;
}
Promise.race([runAsync(1), runAsync(2), runAsync(3)])
  .then((res) => console.log("result: ", res))
  .catch((err) => console.log(err));

// 结果:
// 1
// 'result: 1'
// 2
// 3

// ----------------------------------------------------------------------

// 题目4:

function runAsync(x) {
  const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
  return p;
}
function runReject(x) {
  const p = new Promise((res, rej) =>
    setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
  );
  return p;
}
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
  .then((res) => console.log("result: ", res))
  .catch((err) => console.log(err));

// 结果:

// 0
// 'Error 0'
// 1
// 2
// 3

// -----------------------------------------------------------------------

/****
 *    async/await相关
 *
 */

// 题目1:

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
async1();
console.log("start");

// 结果:

// "async1 start"
// "async2"
// "start"
// "async1 end"

// 题目1.2

async function async1() {
  console.log("async1 start");
  new Promise((resolve) => {
    console.log("promise");
  });
  console.log("async1 end");
}
async1();
console.log("start");

// 结果:

// "async1 start"
// 'promise'
// "async1 end"
// "start"

// ------------------------------------------------------------------------------

// 题目2:

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  setTimeout(() => {
    console.log("timer");
  }, 0);
  console.log("async2");
}
async1();
console.log("start");

// 结果:

// "async1 start"
// "async2"
// "start"
// "async1 end"
// "timer"

// -------------------------------------------------------------------------------

// 题目3:

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  setTimeout(() => {
    console.log("timer1");
  }, 0);
}
async function async2() {
  setTimeout(() => {
    console.log("timer2");
  }, 0);
  console.log("async2");
}
async1();
setTimeout(() => {
  console.log("timer3");
}, 0);
console.log("start");

// 结果:

// "async1 start"
// "async2"
// "start"
// "async1 end"
// "timer2"
// "timer3"
// "timer1"

// ----------------------------------------------------------------------------------

// 正常情况下，async中的await命令是一个Promise对象，返回该对象的结果。
// 但如果不是Promise对象的话，就会直接返回对应的值，相当于Promise.resolve()

// 题目4:
async function fn() {
  // return await 1234
  // 等同于
  return 123;
}
fn().then((res) => console.log(res));

// 结果:
// 123

// ---------------------------------------------------------------------------------

// 题目5: ---- 题目里promise没有决议,所以一直处于Pending!!! await之后就会一直等待

async function async1() {
  console.log("async1 start");
  await new Promise((resolve) => {
    console.log("promise1");
  });
  console.log("async1 success");
  return "async1 end";
}
console.log("srcipt start");
async1().then((res) => console.log(res));
console.log("srcipt end");

// 结果:

// 'script start'
// 'async1 start'
// 'promise1'
// 'script end'

// 以下不会执行
// 'async1 sucess'
// 'async1 end'

// --------------------------------------------------------------------------

// 题目6:

async function async1() {
  console.log("async1 start");
  await new Promise((resolve) => {
    console.log("promise1");
    resolve("promise1 resolve");
  }).then((res) => console.log(res));
  console.log("async1 success");
  return "async1 end";
}
console.log("script start");
async1().then((res) => console.log(res));
console.log("script end");

// 结果:

// 'script start'
// 'async1 start'
// 'promise1'
// 'script end'
// 'promise1 resolve'
// 'async1 success'
// 'async1 end'

// -----------------------------------------------------------------------------

// 题目7:

async function async1() {
  console.log("async1 start");
  await new Promise((resolve) => {
    console.log("promise1");
    resolve("promise resolve");
  });
  console.log("async1 success");
  return "async1 end";
}
console.log("srcipt start");
async1().then((res) => {
  console.log(res);
});
new Promise((resolve) => {
  console.log("promise2");
  setTimeout(() => {
    console.log("timer");
  });
});

// 结果:

// 'script start'
// 'async1 start'
// 'promise1'
// 'promise2'
// 'async1 success'
// 'async1 end'
// 'timer'

// -----------------------------------------------------------------------------

// 题目8:

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

// 结果:

// "script start"
// "async1 start"
// "async2"
// "promise1"
// "script end"
// "async1 end"
// "promise2"
// "setTimeout"

// --------------------------------------------------------------------------------

// 题目9
async function testSometing() {
  console.log("执行testSometing");
  return "testSometing";
}

async function testAsync() {
  console.log("执行testAsync");
  return Promise.resolve("hello async");
}

async function test() {
  console.log("test start...");
  const v1 = await testSometing();
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
}

test();

var promise = new Promise((resolve) => {
  console.log("promise start...");
  resolve("promise");
});
promise.then((val) => console.log(val));

console.log("test end...");

// 结果:

// "test start..."
// "执行testSomething"
// "promise start..."
// "test end..."
// "testSomething"
// "执行testAsync"
// "promise"
// "hello async"
// "testSomething" "hello async"

// ----------------------------------------------------------------------------------

/***
 *
 *   async处理错误
 */

// 题目1 ---------- 这题答错了, await后面跟着的是一个状态为rejected的promise。
//                 如果在async函数中抛出了错误，则终止错误结果，不会继续向下执行。
async function async1() {
  await async2();
  console.log("async1");
  return "async1 success";
}
async function async2() {
  return new Promise((resolve, reject) => {
    console.log("async2");
    reject("error");
  });
}
async1().then((res) => console.log(res));

// 结果:

// 'async2'
// 报错 error

// ---------------------------------------------------------------------------

// 题目2: ------------ await即使在try---catch里, 只要是await以下的都是异步执行, catch也是之后才执行

async function async1() {
  try {
    await Promise.reject("error!!!");
  } catch (e) {
    console.log(e);
  }
  console.log("async1");
  return Promise.resolve("async1 success");
}
async1().then((res) => console.log(res));
console.log("script start");

// 结果:

// "script start"
// "error!!!"
// "async1"
// "async1  success"

// -------------------------------------------------------------------------

/***
 *
 *     综合题
 */

// 题目1:

const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
        console.log(p);
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg);
    });
  });

first().then((arg) => {
  console.log(arg);
});

console.log(4);

// 结果:

// 3
// 7
// 4
// 1
// 2
// 5
// Promise{<fufilled>: 1}

// ---------------------------------------------------------------------------

// 题目2:      -- 这题又错了, 又没看到 await里的promise没有决议, 所以后面不会执行

const async1 = async () => {
  console.log("async1");
  setTimeout(() => {
    console.log("timer1");
  }, 2000);
  await new Promise((resolve) => {
    console.log("promise1");
  });
  console.log("async1 end");
  return "async1 success";
};
console.log("script start");
async1().then((res) => console.log(res));
console.log("script end");
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then((res) => console.log(res));
setTimeout(() => {
  console.log("timer2");
}, 1000);

// 结果:

// 'script start'
// 'async1'
// 'promise1'
// 'script end'
// 1
// 'timer2'
// 'timer1'

// --------------------------------------------------

// 题目3

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolve3");
    console.log("timer1");
  }, 0);
  resolve("resovle1");
  resolve("resolve2");
})
  .then((res) => {
    console.log(res);
    setTimeout(() => {
      console.log(p1);
    }, 1000);
  })
  .finally((res) => {
    console.log("finally", res);
  });

// 结果:

// 'resolve1'
// 'finally' undefined
// 'timer1'
// Promise{<fufilled>: undefined}
