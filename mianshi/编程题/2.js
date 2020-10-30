// 2. 将数组扁平化并去除其中重复数据, 最终得到一个升序且不重复的数组

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9], [11, 12, [12, 13, [14]]], 10];

const flat = function (arr) {
  let ary = [];

  function fla(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        fla(item);
      } else {
        ary.push(item);
      }
    }
  }

  fla(arr);

  let setAry = new Set(ary);

  ary = Array.from(setAry);

  return ary.sort((a, b) => a - b);
};

console.log(flat(arr));

// 方法二, 调用API
let res = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b);

console.log(res);
