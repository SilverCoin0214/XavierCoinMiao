/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let c = 0;
  let z = x ^ y;

  // 在二进制上对z做与运算,
  // 100010000 是 z
  // 100001111 是 z - 1
  // 进行一次与运算可以消1
  while (z) {
    z = z & (z - 1);
    c++;
  }

  return c;

  //     解法2
  let c = 0;
  let z = x ^ y;

  // 对z和1做或运算, 能在最后一位算值是否为1
  // 10000111 是 z
  // 00000001 是 1
  // 进行一次与运算后z移位,就可以算出1的个数
  while (z) {
    c += z & 1;
    z >>= 1;
  }

  return c;
};
