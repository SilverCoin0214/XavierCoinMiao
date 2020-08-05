//async文档
//https://caolan.github.io/async/v3/docs.html#series

// 函数同步运行.
function parallel(task, cb) {
  var completedCount = 0;
  for (var i = 0; i < task.length; i++) {
    var task = task[i];
    task(() => {
      completedCount++;
      if (completedCount == task.length) {
        cb();
      }
    });
  }
}

// 函数一个接一个运行
function series(tasks, cb) {
  var i = 0;

  starOneTask();

  function starOneTask() {
    if (i < tasks.length) {
      tasks[i++](() => {
        starOneTask();
      });
    } else {
      cb();
    }
  }
}

// 控制多少个同时运行
function parallelLimit(tasks, limit, cb) {
  var i = 0;
  var completedCount = 0;

  for (var j = 0; j < limit; j++) {
    one();
  }

  function one() {
    if (i < tasks.length) {
      tasks[i++](() => {
        completedCount++;
        if (completedCount == tasks.length) {
          cb();
        } else {
          one();
        }
      });
    }
  }
}

series(
  [
    function (cb) {
      console.log(1);
      cb();
    },
    function (cb) {
      console.log(2);
      setTimeout(() => {
        cb();
      }, 2000);
    },

    function (cb) {
      console.log(3);
      setTimeout(() => {
        cb();
      }, 3000);
    },
  ],
  function () {
    console.log("done");
  }
);

// ---------------------------------------------------

// 基于回调方式实现map

function asyncMap(ary, mapper, cb) {
  //   var result = [];

  //   for (let i = 0; i < ary.length; i++) {
  //     mapper(ary[i], (it) => {
  //       result.push(it);
  //     });
  //   }

  //   return cb(null, result);

  var result = [];
  var count = 0;

  for (let i = 0; i < ary.length; i++) {
    mapper(ary[i], function (err, value) {
      result[i] = value;
      count++;

      if (count == ary.length) {
        cb(null, result);
      }
    });
  }
}

asyncMap(
  [1, 2, 3, 4],
  function mapper(it, cb) {
    setTimeout(() => {
      cb(null, it * it);
    });
  },
  function (err, mapped) {
    console.log(mapped);
  }
);

// 基于回调方式是实现filtter
function asyncFilter(ary, test, cb) {
  var result = new Array(ary.length).fill(false);
  var count = 0;

  for (let i = 0; i < ary.length; i++) {
    test(ary[i], (err, pass) => {
      if (pass) {
        result[i] = true;
      }
      count++;

      if (count == ary.length) {
        var filtered = ary.filter((it, idx) => {
          return result[idx];
        });
        cb(null, filtered);
      }
    });
  }
}

asyncFilter(
  [1, 2, 3, 4],
  function mapper(it, cb) {
    setTimeout(() => {
      cb(null, it % 2 == 0);
    });
  },
  function (err, mapped) {
    console.log(mapped);
  }
);
