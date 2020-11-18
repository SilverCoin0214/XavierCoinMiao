const light = function (num, color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${color}--${num}`);
      resolve();
    }, 1000);
  });
};

let color = ["绿", "红", "黄"];
let num = [3, 2, 1];
let index = 0;
let indey = 0;

const step = function (num, color, index, indey) {
  Promise.resolve()
    .then(() => {
      if (index > 2) {
        index = 0;
        indey++;
        if (indey == 1) {
          index += 1;
        }
        if (indey == 2) {
          index += 2;
        }
      }
      if (indey > 2) {
        indey = 0;
        index = 0;
      }
      return light(num[index++], color[indey]);
    })
    .then(() => {
      return step(num, color, index, indey);
    });
};

step(num, color, index, indey);
