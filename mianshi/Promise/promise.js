// 题目1:  以下的运行结果是什么?
const promise = new Promise((resolve, reject) => {
  console.log(1); // 1
  resolve();
  console.log(2); // 2
});
promise.then(() => {
  console.log(3); // 4
});
console.log(4); // 3

//解答: 1 ---> 2 ---> 4 ----> 3

//------------------------------------

// 题目2:  以下运行结果是什么?
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

const promise2 = promise1.then(() => {
  throw new Error("error!");
});

console.log("promise1", promise1);
console.log("promise2", promise2);

setTimeout(() => {
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

// 解答:
// promise1 Promise{<pending>}
// promise2 Promise{<pending>}
// error!
// promise1 Promise{'success'}
// promise2 Promise{
//    <rejectd> Error: error!
// }

// 这题没答对

// ---------------------------------------

// 题目3
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

// 结果:  then: success1
// 解答:  Promise只会执行一次决议

// -------------------------------------------

// 题目4:

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

// 结果:  1 ---> 2
// 解答:  第一个then的return返回的是resolve, 所以不会被catch接到, 穿透到下一个then

// -----------------------------------------------

//  题目5:

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("once");
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
// once
// success 1003
// success 1004

// 这题错了, 为什么promise里包了异步, then还是会等异步获取值?
// 虽然同步代码执行完, 就会执行promise.then. 但由于promise是pending状态, 会把Then丢到队列里去保存, 等到Promise返回了结果再执行.
// 相当于promise里的异步里的resolve决议完才会再调用promise.then

// ----------------------------------------------------

// 题目6:

Promise.resolve()
  .then(() => {
    return new Error("error!");
  })
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

// 结果: catch: error!
// 因为是报错, 所以会被catch接住

// ---------------------------------------------------

// 题目7:

const promise = Promise.resolve().then(() => {
  return promise;
});

promise.catch(console.error);

// 结果: 死循环

// ------------------------------------------------

// 题目8:

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 结果: 1
// 解答:  .then或者.catch的参数期望是函数, 传入费函数则会发生值穿透

// -------------------------------------------------

// 题目9:

Promise.resolve()
  .then(
    function success(res) {
      throw new Error("error");
    },
    function fail(e) {
      console.error("fail1: ", e);
    }
  )
  .catch(function fail2(e) {
    console.error("fail2: ", e);
  });

// 结果: fail2: error

// 解答:  因为promise.reolve()说明下一个then执行的是成功, 所以是第一个, 但第一个丢出了错误, 被catch接住

// ------------------------------------------------------

// 题目10:

process.nextTick(() => {
  console.log("nextTick");
});
Promise.resolve().then(() => {
  console.log("then");
});
setImmediate(() => {
  console.log("setImmediate");
});
console.log("end");

// 结果:  end --->  nextTick ---> then ---> setImmediate

// --------------------------------------------------------

// 题目11:

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});

promise.then(() => {
  console.log(3);
});

console.log(4);

// 结果:  1 ---> 2 ---> 4 ----> 3

//----------------------------------------------------------

// 题目12:

const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
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

// 结果:  3 --> 7 --->  4 -->  1 --> 2 -->  5

// -------------------------------------------------------

// 题目13:

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

const promise2 = promise1.then(() => {
  throw new Error("error!!");
});

console.log("promise1", promise1);
console.log("promise2", promise2);

setTimeout(() => {
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

// 结果:
// promise1  Promise{<pending>}
// promise2  Promise{<pending>}
// error!!!
// promise1  Promise{<fufilled>: "success"}
// promise2  Promise{<rejected>: Error: error!!}

// ----------------------------------------------------------

// 题目14:

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

// 结果:  then: success1

// ------------------------------------------------------------

// 题目15:

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

// 结果:  1 ----> 2

// -----------------------------------------------------------

// 题目16:

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("once");
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
// once
// success 1003
// success 1007

// -------------------------------------------------------------

// 题目17:

Promise.resolve()
  .then(() => {
    return new Error("error!!");
  })
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

// 结果:
// then: error!!

// 这题做错了, return 一个错误并不会变成reject, 而是被第二个then接收到, 依旧属于resolve.
// 除非改成 return Promise.reject(Error('error!!!'))

// ----------------------------------------------------------------

// 题目18:

const promise = Promise.resolve().then(() => {
  return promise;
});

promise.catch(console.error);

// 结果:
// 会报错, 死循环. then里不能递归循环自己

// -------------------------------------------------------------

// 题目19:

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 结果:
// 值穿透 1

// -------------------------------------------------------=-------

// 题目20 :
Promise.resolve()
  .then(
    function success(res) {
      throw new Error("error");
    },
    function fail(e) {
      console.error("fail1: ", e);
    }
  )
  .catch(function fail2(e) {
    console.error("fail2: ", e);
  });

// 结果:  fail2: Error: error

// ----------------------------------------------------------------

// 题目21:

process.nextTick(() => {
  console.log("nextTick");
});
Promise.resolve().then(() => {
  console.log("then");
});
setImmediate(() => {
  console.log("setImmediate");
});
console.log("end");

// 结果:  end -------> nextTick --->  then ---> setImmediate
