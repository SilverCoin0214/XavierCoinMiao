var isEven = function (x) {
  //console.log(x);
  return x % 2 == 0;
};

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// every会迭代每个元素, 直到返回false,所以只有都符合才会返回true, 有一个错就是false
number.every(isEven);
console.log(number.every(isEven));

// some是只要碰到一个符合条件就返回true, 所以在碰到第一个偶数2时就返回true
number.some(isEven);
console.log(number.some(isEven));

// foreach跟for类似, 会遍历每一个值, foreach没有返回值
var result = number.forEach(function (x) {
  console.log(x % 2 == 0);
  // x % 2 == 0;
});

// map是映射, 会返回一个新的数组
var myMap = number.map(isEven);
console.log(myMap);

// 过滤filter
var evenNumbers = number.filter(isEven);
console.log(evenNumbers);

// es6增加了一个@@iterator属性,需要通过[Symbol.iterator]来访问
let iterator = number[Symbol.iterator]();
console.log(iterator.next().value);

// entries返回包含键值对的迭代器
let aEntries = number.entries();
console.log(aEntries.next().value);

// copyWithin 第一个是开始位置, 第二个是复制的值开始位置, 0,3表示的就是从0处开始覆盖, 从3后开始复制, 所以是
// 把1,2,3覆盖为4,5,6
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3);
