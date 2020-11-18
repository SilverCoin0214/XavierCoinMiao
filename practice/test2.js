function map(ary, fn) {
  let result = [];

  for (let i = 0; i < ary.length; i++) {
    let value = ary[i];
    let index = i;
    let collection = ary;
    result.push(fn(value, index, collection));
  }

  return result;
}

let arr = [1, 2, 3, 4];

function ab(x) {
  return x * x;
}

function compare(aryX, aryY) {
  let result = [];

  let len = aryX.length > aryY.length ? aryX.length : aryY.length;

  for (let i = 0; i < len; i++) {
    if (len === aryX.length) {
      if (aryY.find((e) => e == aryX[i])) {
        result.push(aryX[i]);
      }
    }
  }

  return [...new Set(result)];
}

console.log(compare([1, 2, 3, 4, 3, 4], [3, 4, 5]));


function getName(user){
  let name = user.name
  if(name === null) {
    name = perform 'ask_name'
  }

  return name
}


function makeFriends(user1, user2) {
  user1.friendName.add(getName(user2))
  user2.friendName.add(getName(user1))
}


const sce = {name: null}
const zaj = {name: "zaj"}

try{
  makeFriends(sce, zaj)
} handle(effect) {
  if(effect === 'ask_name') {
    resume with 'sce'
  }
}
