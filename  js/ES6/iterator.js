// 1. 为什么会需要Iterator?
//    因为JS现在有四种数据集合, Aarry, Object, Map, Set. 所以需要一个统一的接口机制来处理所有不同的数据结构.
//    任何数据结构, 只要部署Iterator接口, 就可以完成遍历操作.

// 2. Iterator的作用有哪些?
//    1. 为各数据结构提供了统一的简便的访问接口.
//    2. 使得数据结构可以按照某种次序排列
//    3. Iterator主要是为了for of循环使用.

3.


/* -------------------------------------------------------------------------- */


/* -------------------------------------------- */

// 自己定义个生成器函数, 模拟next方法返回.
function makeIterator(array) {
    var nextIndex = 0
    return {
        next: function() {
            return nextIndex < array.length ?
            {value: array[nextIndex++], done:false} :
            {value: undefined, done: true}
        }
    }
}


var it = makeIterator(['a', 'b'])

it.next()
it.next()
it.next()


/* -------------------------------------------- */


// 遍历器与所遍历的数据结构实际上是分开的, 完全可以写出没有对应数据结构的遍历器对象. 或者说用遍历器对象模拟出数据结构

var it = idMarker()

function idMarker() {
    var index = 0

    return {
        next: function (){
            return {value: index++, done: false}
        }
    }
}

it.next()


/* -------------------------------------------- */

// 一个数据结构只要有Symbol.iterator属性, 就可以认为是可遍历的.

const obj = {
    [Symbol.iterator]: function () {
        return {
            next: function() {
                return {
                    value: 1,
                    done: true,
                }
            }
        }
    }
}

var s = obj[Symbol.iterator]()
s.next()   // {value: 1, done: true}


/* -------------------------------------------- */

//  原生具备Iterator接口的数据结构有:
//  Array
//  Map
//  Set
//  String
//  TypedArray
//  NodeList对象
//  函数的argument对象

let arr = ['a', 'b', 'c']
let iter = arr[Symbol.iterator]()

iter.next() // {value: "a", done: false}
iter.next() // {value: "b", done: false}
iter.next() // {value: "c", done: false}
iter.next() // {value: undefined, done: true}

/* -------------------------------------------- */

// 类数组对象本身就可以遍历, 但需要部署Iterator接口, 最简单的方式就是直接使用Array.iterator方法
// 对普通对象部署数组的Symbol.iterator无效, 需要自己实现

let iterable = {
    0 : 'a',
    1 : 'b',
    2 : 'c',
    length: 3,
    [Symbol.iterator] : Array.prototype[Symbol.iterator]
}

for( let item of iterable) {
    console.log(item)    // a, b, c
}


/* 调用Iterator接口的场合 -------------------------------------------- */

// 对数组进行结构赋值时, 会默认调用

let set = new Set().add('a').add('b').add('c')

let [x, y] = set   // x = 'a', y = 'b'

let [first, ...rest] = set  // first = 'a', rest = ['b', 'c']

// ...扩展运算符会默认调用

var str = 'hello'
[...str]  //  ["h", "e", "l", "l", "o"]

// 只要任何部署了Iterator接口的数据结构都可以转为数据
let arr = [...iterable]


// yield *, 在yield如果后面跟的是可迭代的结构, 那么加上*后也会变成迭代器

let generator = function * () {
    yield 1
    yield * [2,3,4]
    yield 5
}

var iter = generator()

iter.next()
iter.next()
iter.next()
iter.next()
iter.next()

/* -------------------------------------------- */


/* 字符串的Iterator接口 -------------------------------------------- */

var someString = 'hi'
var iterator = someString[Symbol.iterator]()

iterator.next() // {value: "h", done: false}
iterator.next() // {value: "i", done: false}
iterator.next() // {value: undefined, done: false}



/* Iterator接口与 Generator 函数-------------------------------------------- */

let obj = {
    * [Symbol.iterator] () {
        yield 'hello'
        yield 'world'
    }
}

for(let x of obj) {
    console.log(x) //hello, world
}



/* 数组与Iterator-------------------------------------------- */

const arr = ['red', 'green', 'blue']

for(let v of arr) {
    console.log(v)
}

const obj = {}

obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
for(let v of obj) {
    console.log(v)
}

// for in 循环只能取到键, 而for of可以取到键值
var arr = ['a', 'b', 'c']

for(let x in arr) {
    console.log(x) // 0, 1, 2
}

for(let x of arr) {
    console.log(x) // a, b, c
}


// 数组的遍历器只返回具有数字索引的属性,
let arr = [3, 5, 7]
arr.foo = 'hello'

for(let x in arr) {
    console.log(x)  // 0, 1, 2, foo
}

for(let x of arr) {
    console.log(x)  // 3, 5, 7
}
