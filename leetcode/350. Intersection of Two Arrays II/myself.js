/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
 *  实现思路:  使用对象对一个数组的元素分类,将元素保存成key, 这样可以避免重复元素
 *            然后在另一个数组中判断其中元素是否能在对象中找到, 能就添加到结果数组里, 对象里元素的值-1
 */
var intersect = function (nums1, nums2) {
  let obj = {};
  let res = [];

  for (let i of nums1) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }

  for (let i of nums2) {
    if (obj[i]) {
      obj[i]--;
      res.push(i);
    }
  }

  return res;
};
