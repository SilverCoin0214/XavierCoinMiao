/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

// 只要查询时间在开始和结束之间就加一,
var busyStudent = function (startTime, endTime, queryTime) {
  var result = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      result++;
    }
  }

  return result;
};

var startTime = [9, 8, 7, 6, 5, 4, 3, 2, 1];
var endTime = [10, 10, 10, 10, 10, 10, 10, 10, 10];
var queryTime = 5;
console.log(busyStudent(startTime, endTime, queryTime));
