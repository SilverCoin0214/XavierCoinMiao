/**
 * generator函数可以不用yield语句, 这时就是一个单纯的暂缓执行函数,
 * 需要等到有Next()时才会执行.
 */

const { request } = require("http");

function* f() {
  console.log("执行了");
}

var generator = f();

generator.next();

/**
 * yield表达式只能放在generator函数里, 放在其他任何地方都会报错
 *  */
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  //    自己写的
  //   for (let i = 0; i < a.length; i++) {
  //     if (typeof a[i] === "number") {
  //       yield a[i];
  //     } else {
  //       yield* flat(a[i]);
  //     }
  //   }

  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== "number") {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}


/**
 *  yield表达式如果放在另一个表达式之中, 必须放在圆括号里
 */

function * demo() {
    console.log('hello' + yield) // error
    console.log('hello' + yield 123) // error

    console.log('hello' + (yield))  // ok
    console.log('hello' + (yield 123))  //ok
}

/***
 * yield表达式用作函数参数或者放在赋值表达式的右边, 可以不加括号
 */

 function * demo() {
    foo(yield 'a', yield 'b') // ok
    let input = yield  // ok
 }



 /***
  * generator函数就是遍历器生成函数, 所以可以直接把generator赋值给[Symbol.iterator]
  */
 var myIterable = {}
 myIterable[Symbol.iterator] = function * () {
     yield 1
     yield 2
     yield 3
 }


[...myIterable] // [1,2,3]

/***
 * yield本身并没有返回值, 但next()里可以带参数作为yield的返回值
 */

// reset由net()里的参数决定, 而不是i的值
function * f() {
    for(var i = 0; true; i++) {
        var reset = yield i
        if(reset) {
            i = -1
        }
    }
}

var g = f()

g.next() //{value: 0, done: false}
g.next() //{value: 1, done: false}
g.next(true) //{value: 0, done: false}


/***
 * 可以通过next()方法的参数有办法向generator函数开始运行后继续向函数内部注入值, 从而改变函数运行
 * next方法的参数表示上一条yield语句的返回值
 */

function * foo(x) {
    var y = 2 * (yield (x + 1))
    var z = yield ( y / 3)
    return ( x + y + z)
}

var a = foo(5)
a.next() // {value: 6, done: false}
a.next() // {value: NaN, done: false}
a.next() // {value: NaN, done: true}

var b = foo(5)
b.next() // {value: 6, done: false}
b.next(12) // {value: 8, done: false}
b.next(13) // {value: 42, done: true}


// --------lg2

function * dataConsumer() {
    console.log('Started')
    console.log(`1. ${yield}`)
    console.log(`2. ${yield}`)
    return 'result'
}

let genObj = dataConsumer()
genObj.next() // Started
genObj.next('a') // 1. a
genObj.next('b') // 2. b


/** for..of循环可以自动遍历generator函数生成的iterator对象
 *
 */

 function * foo() {
     yield 1
     yield 2
     yield 3
     yield 4
     yield 5
     return 6
 }

 for(let v of foo()) {
     console.log(v)
 }

 // 1,2,3,4,5   6是return, 不会被遍历

 function * fib() {
     let [prev, curr] = [0, 1]
     for(;;) {
         [prev, curr] = [curr, curr + prev]
         yield curr
     }
 }

 for(let n of fib()) {
     if(n > 1000){
         break
     }
     console.log(n)
 }


 /**
  *
  *  generator函数返回的遍历器对象都有一个throw方法, 可以在函数体外抛出错误
  *
  * */

var g = function* () {
    try {
        yield
    } catch(e) {
        console.log('内部捕获', e)
    }
}

var i = g()
i.next()

try{
    i.throw('a')
    i.throw('b')
} catch(e) {
    console.log('外部捕获', e)
}

// 内部捕获 a
// 外部捕获 b


// throw方法被捕获以后会附带执行下一条yield表达式, 即附带执行一次next方法
var gen = function * gen() {
    try {
        yield console.log('a')
    } catch(e) {
        //....
    }
    yield console.log('b')
    yield console.log('c')
}

var g = gen()
g.next()  // a
g.throw() // b
g.next()  // c

/** generator函数返回的遍历器对象还有一个return方法, 可以返回给定的值, 并终结遍历 */
c

g.next() // {value: 1, done: false}
g.return('foo')  // {value: foo, done: true}
g.next() // {value: undefined, done: true}


/**
 *  yield*后面的generator函数等同于在generator函数内部部署一个for...of循环
 *
*/

function * concat(iter1, iter2) {
    yield* iter1
    yield* iter2
}

// 等同于

function * concat(iter1, iter2) {
    for(var value of iter1) {
        yield value
    }
    for(var value of iter2) {
        yield value
    }
}

// 任何数据结构只要有Iterator接口, 就可以被yield*遍历
let read = (function * () {
    yield 'hello'
    yield* 'hello'
})()

read.next() // {value: "hello", done: false}
read.next() // {value: "h", done: false}


//下面这个例子里, 存在两次遍历, 第一次是 logReturrned返回的遍历器对象,
// 第二次是yield*语句遍历函数genFunWithReturn返回的遍历器对象

function * genFunWithReturn() {
    yield 'a'
    yield 'b'
    return 'The result'
}

function * logReturned(genObj) {
    let result = yield * genObj
    console.log(result)
}

[...logReturned(genFunWithReturn())]


/// 使用yield*语句遍历完全二叉树

// 下面是一个二叉树的构造函数, 3个节点分别是左树, 当前节点, 右树
function Tree(left, label, right) {
    this.left = left
    this.label = label
    this.right = right
}

// 下面是中序遍历函数
// 由于返回的是一个遍历器, 所以要用generator函数
// 函数体内采用递归算法, 所以左树和右树要用yield*遍历
function * inorder(t) {
    if(t) {
        yield * inorder(t.left)
        yield t.label
        yield * inorder(t.right)
    }
}

// 生成二叉树
function make(array) {
    //判断是否为叶节点
    if(array.length == 1) {
        return new Tree(null, array[0], null)
    }
    return new Tree(make(array[0]), array[1], make(array[2]))
}

let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]])

// 遍历二叉树
var result = []

for(let node of inorder(tree)) {
    result.push(node)
}





/// 使用 yield方法改写ajax

function * main() {
    var result = yield request('http://some.url')
    var resp = JSON.parse(result)
    console.log(resp.value)
}

function request(url) {
    makeAjaxCall(url, function(response){
        it.next(response)
    })
}

var it = main()
it.next()

