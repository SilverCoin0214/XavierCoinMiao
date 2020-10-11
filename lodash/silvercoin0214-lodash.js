var silvercoin0214 = {
  /**
   ** Array
   */

  /**
   **  将一个数组分为N个指定长度的数组,如果剩余的元素个数不够,就把剩下的组成一个组.
   **  @param ary{Array}  需要拆分的数组
   **  @param size{Number}  指定的长度
   **  @returns {Array[][]}  返回二维数组
   */

  chunk: function (ary, size) {
    let newAry = [];
    let copyAry = [...ary];
    while (copyAry.length !== 0) {
      let childAry = copyAry.slice(0, size);
      newAry.push(childAry);
      copyAry.splice(0, size);
    }

    return newAry;
  },
};

const ary = silvercoin0214.chunk(["a", "b", "c", "d"], 3);
console.log(ary);
