let idDone: boolean = true

let age: number = 123

let binaryNumber: number = 0b1111
let firstName: string = 'hello'

let u: undefined = undefined
let n: null = null

// undefined和null都是其他的子类型, 不会提示错误
let num: number = undefined
let str: string = null

// 声明为any之后就相当于没定义类型, 跟JS中一样
let notSure: any = 4
notSure = 'string'
notSure = true
notSure.myName

// 联合类型, 只需要在定义类型的位置加 | 标识
let numOrString: number | string = 'lalala'
numOrString = 123
numOrString = '字符串和数字都不会提示错误, 但其他类型会'

//-----------------------------------------------------------------------------


// 定义数组就是在定义位置加类型然后在加上[]标识
let arrOfNumbers: number[] = [1,2,3,4]
let arrOfString: string[] = ['2', 'lalala']

// 元组 -- 是限定了数据类型的数组, 并且定义了每个元素是什么类型
let tuple: [string, number, number] = ['只能是字符串', 124, 2123]


//-----------------------------------------------------------------------------

// 可以使用interface来定义一个对象的属性类型, 在属性后加?表示是可选属性, 在前面加关键字readonly就是只读
interface Person {
    readonly id: number;
    name: string;
    age: number;
    sex?: string;
}

let silver: Person = {
    id: 123981942,
    name: 'sce',
    age: 12,
    sex: 'male',
}

//-----------------------------------------------------------------------------

// 函数声明 : 函数的类型定义就是加载参数后面, 返回是加在括号后面, 可选参数只能放在最后
function add(x: number, y: number, z?: number): number{
    if(typeof z === 'number'){
        return x + y + z
    }

    return x + y
}

// 参数添加默认值
function add2(x: number, y: number, z: number = 10): number{
        return x + y + z
}

let result = add(4,3)
let r2 = add2(23,123)

// 函数表达式:

const add3 = function(x: number, y: number, z: number = 10): number{
    if(typeof z === 'number'){
        return x + y + z
    }else {
        return x + y
    }
}

const add4: (x:number, y: number, z?: number) => number = add3


//-----------------------------------------------------------------------------


// 类, 使用到的属性需要提前定义, 修饰符定义后可以让类有公有,私有,子类可以继承,或者readonly的属性和方法
class Animal {
    public name: string;  // 公有,都可以访问,修改
    private age: number = 2; // 私有,只有自己访问的到
    protected sex: string;  // 只有自己和子类可以访问
    readonly life: number = 20; // 可以在实例上访问到, 但不能修改

    static categoies: string[] = ['bird', 'mammal'] // static静态属性,是类自己属性,实例不可访问

    constructor(name: string){
        this.name = name
    }

    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal('lily')
console.log(snake.name)
console.log(snake.run())

// 继承
class Dog extends Animal {
    bark(){
        return `${this.name} is barking`
    }
}

const ddg = new Dog('nemo')
console.log(ddg.bark())
console.log(ddg.run())


// 多态, 覆盖父类方法
class Cat extends Animal {
    constructor(name){
        super(name)
    }

    run(){
        return 'gogogo!' + super.run()
    }
}

const mew = new Cat('mao')
console.log(mew.run())



//-----------------------------------------------------------------------------

// 类和接口, 如果要在类中完成某些特性, 可以把特性提取成接口,然后在类里实现, 就是等于是抽象类的方法和属性.
// 实现确实在类里自己实现, 不同的类可以实现不同,

interface Radio{
    switchRadio()
}

interface Battery{
    checkBatteryStatus()
}

interface RadioWithBattery extends Radio {
    checkBatteryStatus()
}

class Car implements Radio {
    switchRadio(){}
}

class Cellphone  implements RadioWithBattery {
    switchRadio(){}

    checkBatteryStatus(){}
}


//-----------------------------------------------------------------------------

// 枚举 --- 相同类型的一群元素组成的集合, 可以看成类似一个数组
// 枚举有两种类型, 常量枚举和计算枚举

const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

console.log(Direction.Down)

const value12: string = 'UP'
if(value12 === Direction.Up){
    console.log('gogogo')
}

//-----------------------------------------------------------------------------

// 泛型 --- 可以理解为因为类型一定需要定义, 但很很多方法传入的类型不一致,通过传入的类型来定义函数参数的类型.
//          所以叫做泛型, 可以通过自己先预设的标志符, 然后占位, 在使用时动态的传入类型值把占位给填补上.

function echo<T>(arg: T): T{
    return arg
}

const res = echo('123')
const num3 = echo(123)
const bool = echo(true)


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result3 = swap(['string', 123])
console.log(result3)


// 约束泛型 --- 可以指定泛型继承接口, 接口里定义了某些属性, 泛型里需要存在这些属性才能正常访问函数
function echoWithArr<T>(arg: T[]): T[]{
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1,2,3])

// 以下就是约束泛型
interface IWithLength {
    length: number
}

function echoWitLength<T extends IWithLength>(arg: T): T{
    console.log(arg.length)
    return arg
}

const arrs2 = echoWitLength('1234453245')
const arrs3 = echoWitLength([1,2,3,4,45,5])

// 在类中使用泛型 --- 只要在new时指定好类型, 就会传入到泛型上把整个类指定成某种类型.

class Queue<T> {
    private data = []
    push(item: T){
        return this.data.push(item)
    }

    pop(): T{
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)


// 在接口中使用泛型 --- 就是当声明变量时用什么类型指定, 指定接口里的定义的属性就是什么类型

interface KeyPair<T, U>{
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = {key: 123, value: 'interface'}
let kp2: KeyPair<string, number> = {key: 'key', value: 321}

let arr: number[] = [1,2,3]
let arrt: Array<number> = [3,2,1]

interface IPlus<T> {
    (a: T, b: T): T
}

function plus(a: number, b: number): number{
    return a + b
}

function connect(a: string, b: string): string{
    return a + b
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect


//-----------------------------------------------------------------------------
// type 类型别名, 就是把类型定义抽取出来用一个名称替代

type PlusType = (x: number, y: number) => number

function sum(x: number, y: number): number {
    return x + y
}

const sum2: PlusType = sum

// type先定义一个函数, 且返回值是string, 然后定义一个类型 可以是string或者函数
type NameReslolver = () => string
type NameOrResolver = string | NameReslolver

// getName直接使用类型别名, 表示n接收的可能是string也可能是function. 返回一个string
function getName(n: NameOrResolver): string{
    if(typeof n === 'string'){
        return n
    }else {
        return n()
    }
}


// 类型断言 --- 通过 as 直接指定类型是什么类型, 不需要系统做类型推断, 这样就可以直接使用类型里的方法

function getLength(input: string | number): number{
    // const str = input as String
    // if(str.length){
    //     return str.length
    // }else {
    //     const number = input as Number
    //     return number.toString().length
    // }

    // 这是简写的一种方式, 直接尖括号里写类型,就是断言这个参数是什么类型
    if((<string>input).length){
        return (<string>input).length
    }else {
        return input.toString().length
    }
}


//-----------------------------------------------------------------------------

