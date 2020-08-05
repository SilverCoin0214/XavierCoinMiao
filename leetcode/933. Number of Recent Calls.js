//t代表这个员工的工号，每次新员工t加入q公司前先把工号小于t -3000的老家伙都辞退，
//然后再让t入职，统计q公司现有几个员工

var RecentCounter = function () {
  this.items = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.items.push(t);
  while (this.items[0] < t - 3000) {
    this.items.shift();
  }

  return this.items.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
