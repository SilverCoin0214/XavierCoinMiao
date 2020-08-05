// 一个Promise代表一个异步操作的结果

var p = new Promise(function (resolve, reject) {
  var xhr = XMLHttpRequestUpload();
  xhr.onload = function (e) {
    if (xhr.status < 400) {
      resolve(xhr.responseText);
    } else {
      reject({
        errno: xhr.status,
        response: xhr,
        responseText,
      });
    }
  };

  xhr.onerror = function (e) {
    reject(e);
  };

  xhr.send();
});

var p2 = p.then(
  (value) => {},
  (reason) => {}
);

// promise版get
function getJSON(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onload = () => {
      if (xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(JSON.parse(xhr.responseText));
      }
    };

    xhr.onerror = (e) => {
      reject(e);
    };

    xhr.send;
  });
}

getJSON("a.json").then(
  (data) => {},
  (reason) => {}
);

// 面试题
function sleep(time) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

sleep(5000).then( () => {
  console.log(1)
})


// 自己实现 Promise.all()
function all(promises) {
  return new Promise( (resolve, reject) => {
    var result = new Array(promises.length)
    var count = 0

    if(promises.length) {
      for(let i = 0; i < promises.length; i++) {
        var promise = promises[i]
        Promise.resolve(promise).then( value => {
          result[i] = value

          if(count == promises.length) {
            resolve(result)
          }
        }, reason => {
          reject(reason)
        } )
      }
    } else {
      resolve([])
    }
  })
}

// 自己实现Promise.race()

function race(promises) {
  return new Promise( (resolve, reject) => {

    for(let i = 0; i < promises.length; i++) {
      let promise = promises[i]
      promise.then( value => {
          resolve(value)
      }, reason => {
          reject(reason)
      })
    }
  })
}



//------------------------------ES6书本内容---------------------------------------

// 1. Promise对象的特点有两个.
//     1.1 对象的状态不受外界影响, 只有异步操作的结果就可以决定当前是哪一种状态.
//     1.2 一旦状态确定就不会再改变, 任何时候都是得到这个结果.

// 2. Promise对象的缺点.
//    2.1 无法取消Promise, 一旦新建它就会立即执行, 无法中途取消
//    2.2 如果不设置回调函数, Promise内部抛出的错误不会反应到外部.
//    2.3 当处于pending状态时, 无法得知目前进展到哪一个阶段.

// 基本用法---------------------

var promise = new Promise(function( resolve, reject) {
    if(/* 异步操作成功 */) {
        resolve(value)
    } else {
        reject(value)
    }
})

// promise实例生成后, 使用then方法指定reesolved状态和rejected状态的回调函数.
promise.then(function(value) {
    // success
}, function(error){
    // failure
})

//----- 例子
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
    })
}

timeout(100).then((value) => {
    console.log(value)
})


// Promise对象新建后会立即执行. 所以会首先输出Promise. 然后then方法会在所有函数运行完后才会执行,所以会在最后
let promise = new Promise(function(resolve, reject) {
    console.log('Promise')
    resolve()
})

promise.then(function(){
    console.log('Resolved')
})

console.log('Hi!')
/* 输出结果:
            Promise
            Hi!
            Resolved
*/

// ----- 例子2, 异步加载图片,  成功就加载图片, 失败就把错误打出来
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image()
        image.onoload = function() {
            resolve(image)
        }

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url))
        }

        image.src = url
    }
    )

}

// ----- 例子3, Promise对象实现AJAX操作
var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest()
        client.open('GET', url)

        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader("Accept", 'application/json')
        client.send()

        // 自己写的版本, 可以把上面四行去掉运行.
        // client.onload = function() {
        //   if(client.status < 400) {
        //     resolve(client.responseText)
        //   } else {
        //     reject(new Error(this.statusText))
        //   }
        // }

        // client.onerror = function(e) {
        //   reject(e)
        // }

        // client.send()

        function handler(){
            if(this.readyState !== 4) {
                return
            }
            if(this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
    })


    return promise
}


getJSON("https://xieranmaya.github.io/images/cats/cats.json").then(function(json) {
    console.log('Contents:' + json)
}, function(error) {
    console.error('出错了', error)
})



// 一个异步操作的结果返回可以是另一个异步操作, 如果p2的resolve是p1,那么p1的状态会传递给p2

var p1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

var p2 = new Promise(function(resolve, reject) {
  setTimeout( () => resolve(p1), 1000)
})

p2.then(result => console.log(result)).catch(error => console.log(error))

/* 3秒后输出  Error: fail, 因为p1,p2立即执行, 所以p2的1秒包含在p1里了. p2.then获取了p1状态是错误, 所以catch获得错误输出了p1 */


// 调用resolve或reject不会终结Promise的参数函数继续执行, 但一般来说, 调用了resolve或reject后, Promise的使命就完成了, 后面的操作应该放到then里执行, 所以一般在 resolve和reject前写return, 防止后面继续操作.

new Promise((resolve, reject) => {
  resolve(1)
  console.log(2)
}).then(r => {
  console.log(r)
})

/** 输出结果:  2
 *           1
 */


//------------------- --------方法相关函数------------------------------------------


// Promise.then 方法 --------------

// 1. then方法的作用是为Promise实例添加改变状态的回调函数.
// 2. then方法返回的是一个新的Promise实例.

// Promise.catch 方法 ------------
// 1. Promise.catch 是  then(null, reject)的别名
// 2. 一般来说, 不要在then方法中定义reject状态的回调函数, 而总是应该使用catch.

//bad
promise.then(function(data) {
  // success
}, function(err) {
  // error
})

// good
promise.then(function(data){
  // success
}).catch(function(err){
  //error
})


// Promise.all 方法 -----------
// Promise.all 方法用于将多个Promise实例包装成一个新的Promise实例
var p = Promise.all([p1, p2, p3]) // p的状态由p1,p2,p3决定, 如果p123都是resolve,则组成一个数组传递给p的回调函数. 如果p123有一个为reject, 则把第一个reject的值传递给p

// ----- 实例
var promises = [2,3,5,7,11,13].map(function(id) {
  return getJSON('/post'+ id + '.json')
})

Promise.all(promises).then(function(posts) {
  // ....
}).catch(function(reason) {
  // ...
})


// Promise.race 方法 -----------
// Promise.race方法同样是将多个Promise实例包装封成一个新的Promise实例
var p = Promise.race([p1, p2, p3]) // 只要p1,p2,p3里一个实例率先改变状态, P就跟着改变状态.

const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function( resolve, reject) {
    setTimeout( () => reject(new Error('request timeout')), 5000)
  })
])

p.then(response => console.log(response))
p.catch(error => console.log(error))

//  上面代码表示, 如果5秒内没有获取fetch方法返回的结果, 那么p就变成reject, 触发catch方法指定的回调函数


// Promise.resolve() ------------
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

// Promise.resolve参数分四种情况
// 1. 参数是一个promise实例, 那么promise.resolve将不做任何修改,直接返回这个实例
// 2. 参数是一个thenable对象
let thenable = {
  then: function(resolve, reject) {
    resolve(42)
  }
}

let p1 = Promise.resolve(thenable)
p1.then(function(value) {
  console.log(value)
})

/** Promise.resolve方法会把thenable对象转为Promise对象, 然后立即执行thenable对象里的then方法 */

// 3. 参数是不具有then方法的对象或者根本不是对象
var p = Promise.resolve('Hello')
p.then(function (s) {
  console.log(s)
})
/** 输出结果: Hello */

// 4. 不带有任何参数
setTimeout(function() {
  console.log('three')
}, 0)

Promise.resolve().then(function() {
  console.log('two')
})

console.log('one')

/** 输出结果:  one , two , three */

// Promise.reject方法 -------------
var p = Promise.reject('出错')
// 等价于
var p = new Promise((resolve, reject) => reject('出错'))

p.then(null, function(s){
  console.log(s)
})

// Promise.reject()方法的参数会原封不动的作为reject的理由变成后续方法的参数, 所以出错不会把错误信息抛出, 而是整个对象抛出.


// Promise.done()方法,
Promise.prototype.done = function(onFullfilled, onRejected) {
  this.then(onFullfilled, onRejected).catch(function(reason) {
    setTimeout( () => { throw reason}, 0)
  })
}

// Promise.finally()
// Promise.finally方法用于指定不管Promise对象最后状态如何都会执行的操作. 它与done方法的最大区别在于, 它接受一个普通的回调函数作为参数, 该函数不管怎样都必须执行.

Promise.prototype.finally = function(callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then( () => value),
    reason => P.resolve(callback()).then( () => {throw reason})
  )
}


// Promise.allSetted()
Promise.allSetted = function(promises) {
  return new Promise( (resolve, reject) => {
    var result = []
    var count = 0

    if(promises.length) {
      for(let i = 0; i < promises.length; i++) {
        let promise = promises[i]
        promise.then( value => {
          result[i] = {
            status: 'fullfilled',
            value
          }

          count++
          if(count == promises,length) {
            resolve(result)
          }
        }, reason => {
          result[i] = {
            status: 'rejected',
            reason
          }

          count++
          if(count == promises,length) {
            resolve(result)
          }
        })
      }
    } else {
      resolve(result)
    }

  })
}
