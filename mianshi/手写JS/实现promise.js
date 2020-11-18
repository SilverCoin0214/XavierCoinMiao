const PENDING = "PENGDING"; //进行中
const FULFILLED = "FULFILLED"; // 已成功
const REJECTED = "REJECTED"; // 已失败

class Promise {
  constructor(exector) {
    // 初始化
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    // 成功状态回调函数队列
    this.onFulfilledCallbacks = [];
    // 失败状态回调函数队列
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      // 只有进行中状态才能改变状态
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;

        // 成功状态函数依次进行
        this.onFulfilledCallbacks.forEach((fn) => fn(this.value));
      }
    };

    const reject = (reason) => {
      // 只有进行中状态才能改变状态
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }

      this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
    };

    // 立即执行exector, 把内部的reslove, reject传入executor, 用户可调用resolve和reject
    // exector(resolve, reject)

    // exector可能执行出错, 所以包裹一层try...catch()
    try {
      exector(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    // // then是微任务异步调用, 用setTimeout模拟
    // setTimeout(() => {
    //   if (this.status === PENDING) {
    //     // 在pending下执行, 说明promise内部有异步执行的代码, 所有状态没有改变,添加到成功和失败队列中
    //     this.onFulfilledCallbacks.push(onFulfilled);
    //     this.onRejectedCallbacks.push(onRejected);
    //   } else if (this.status === FULFILLED) {
    //     onFulfilled(this.value);
    //   } else if (this.status === REJECTED) {
    //     onRejected(this.reason);
    //   }
    // });

    // 值穿透
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw new Error(reason instanceof Error ? reason.message : reason);
          };

    const self = this;
    return new Promise((resolve, reject) => {
      if (self.status === PENDING) {
        self.onFulfilledCallbacks.push(() => {
          // try捕获错误
          try {
            // 模拟微任务
            setTimeout(() => {
              const result = onFulfilled(self.value);

              // 分两种情况:
              // 1. 回调函数的返回值是Promise, 执行then
              // 2. 回调函数不是Promise, 调用新Promise的resolve函数
              result instanceof Promise
                ? result.then(resolve, reject)
                : resolve(result);
            });
          } catch (e) {
            reject(e);
          }
        });

        self.onRejectedCallbacks.push(() => {
          try {
            setTimeout(() => {
              const result = onRejected(self.reason);

              result instanceof Promise
                ? result.then(resolve, reject)
                : reject(result);
            });
          } catch (e) {
            reject(e);
          }
        });
      } else if (self.status === FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFulfilled(self.value);
            result instanceof Promise
              ? result.then(resolve, reject)
              : resolve(result);
          } catch (e) {
            reject(e);
          }
        });
      } else if (self.status === REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(self.reason);
            result instanceof Promise
              ? result.then(resolve, reject)
              : reject(result);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  // Promise.resolve()方法, 一定返回一个成功的promise
  static resolve(value) {
    if (value instanceof Promise) {
      // 如果是promise实例, 直接返回
      return value;
    } else {
      // 如果不是promise实例, 返回一个新的promise对象, 状态为FULLFILLED
      return new Promise((resolve, reject) => resolve(value));
    }
  }

  // Promise.reject()方法, 一定返回一个失败的promise
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(promiseArr) {
    const len = promiseArr.length;
    const values = new Array(len);

    // 记录已经成功执行的promise个数
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        // Promise.resolve()处理,确保每一个都是Promise实例
        Promise.resolve(promiseArr[i]).then(
          (val) => {
            values[i] = val;
            count++;

            if (count === len) {
              return resolve(values);
            }
          },
          (err) => reject(err)
        );
      }
    });
  }

  static race(promiseArr) {
    return new Promise((resolve, reject) => {
      promiseArr.forEach((p) => {
        Promise.resolve(p).then(
          (val) => resolve(val),
          (err) => reject(err)
        );
      });
    });
  }
}

Promise.prototype.finally = function (callback) {
  return this.then(
    (value) => {
      return Promise.resolve(callback()).then(() => value);
    },
    (reason) => {
      return Promise.resolve(callback()).then(() => {
        throw reason;
      });
    }
  );
};

// let promsie = new Promise((resolve, reject) => {
//   resolve(5);
// })
//   .then(2)
//   .then(3)
//   .then((value) => {
//     console.log(value);
//   });

// -----

// class Promise {
//   constructor(executor) {
//     this.status = PENDING;
//     this.value = undefined;
//     this.reason = undefined;

//     this.onFulfilledCallback = [];
//     this.onRejectedCallback = [];

//     const resolve = (value) => {
//       if (this.status === PENDING) {
//         this.status = FULFILLED;
//         this.value = value;
//       }

//       this.onFulfilledCallback.forEach((fn) => fn(this.value));
//     };

//     const reject = (reason) => {
//       if (this.status === PENDING) {
//         this.status = REJECTED;
//         this.reason = reason;
//       }

//       this.onRejectedCallback.forEach((fn) => fn(this.reason));
//     };

//     try {
//       executor(resolve, reject);
//     } catch (e) {
//       reject(e);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     // 如果参数不是函数, 那说明这个then是无效的, 所以直接返回上一次的值
//     onFulfilled =
//       typeof onFulfilled === "function" ? onFulfilled : (value) => value;
//     onRejected =
//       typeof onRejected === "function"
//         ? onRejected
//         : (reason) => {
//             throw new Error(reason instanceof Error ? reason.message : reason);
//           };

//     const self = this;
//     return new Promise((resolve, reject) => {
//       if (self.status === PENDING) {
//         self.onFulfilledCallback.push(() => {
//           try {
//             setTimeout(() => {
//               const result = onFulfilled(self.value);
//               result instanceof Promise
//                 ? result.then(resolve, reject)
//                 : resolve(result);
//             });
//           } catch (e) {
//             reject(e);
//           }
//         });

//         self.onRejectedCallback.push(() => {
//           try {
//             setTimeout(() => {
//               const result = onRejected(self.reason);
//               result instanceof Promise
//                 ? result.then(resolve, reject)
//                 : reject(result);
//             });
//           } catch (e) {
//             reject(e);
//           }
//         });
//       } else if (self.status === FULFILLED) {
//         try {
//           setTimeout(() => {
//             const result = onFulfilled(self.value);
//             result instanceof Promise
//               ? result.then(resolve, reject)
//               : resolve(result);
//           });
//         } catch (e) {
//           reject(e);
//         }
//       } else if (self.status === REJECTED) {
//         try {
//           setTimeout(() => {
//             const result = onRejected(self.reason);
//             result instanceof Promise
//               ? result.then(resolve, reject)
//               : reject(result);
//           });
//         } catch (e) {
//           reject(e);
//         }
//       }
//     });
//   }

//   catch(onRejected) {
//     return this.then(null, onRejected);
//   }

//   // 是promise直接返回, 不是就包装一个promise
//   static resolve(value) {
//     if (value instanceof Promise) {
//       return value;
//     } else {
//       return new Promise((resolve, reject) => resolve(value));
//     }
//   }

//   static reject(reason) {
//     return new Promise((resolve, reject) => {
//       reject(reason);
//     });
//   }

//   static all(promiseArr) {
//     return new Promise((resolve, reject) => {
//       let len = promiseArr.length;
//       let count = 0;
//       let values = new Array(len);

//       for (let i = 0; i < len; i++) {
//         Promise.resolve(promiseArr[i]).then(
//           (val) => {
//             values[i] = val;
//             count++;

//             if (count == len) {
//               return resolve(values);
//             }
//           },
//           (err) => {
//             return reject(err);
//           }
//         );
//       }
//     });
//   }

//   static race(promiseArr) {
//     return new Promise((reslove, reject) => {
//       promiseArr.forEach((p) => {
//         Promise.resolve(p).then(
//           (val) => resolve(val),
//           (err) => reject(err)
//         );
//       });
//     });
//   }
// }

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("ok2");
  }, 1000);
});

Promise.all([1, 2, 3, p1, p2]).then(
  (data) => {
    console.log("resolve", data);
  },
  (err) => {
    console.log("reject", err);
  }
);
