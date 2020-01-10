/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 1. 去除nums1多余空间
  for (let i = 0; i < n; i++) {
    nums1.pop();
  }

  // 2. nums1和nums2合并
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  // 3. 进行排序,因为Js排序有问题,所以比大小函数需要自己写
  nums1.sort(function(x, y) {
    return x - y;
  });

  return nums1;
};

console.log(merge([-1, 0, 0, 2, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
