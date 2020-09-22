// import * as action from

// 1. 数据创建

var obj = [{ name: "xixi", age: 18 }];

export function data(state = obj[0].age, action) {
  switch (action.type) {
    case "ADD":
      return state + action.data;
      break;

    case "DEL":
      return state - action.data;
      break;

    default:
      return state;
      break;
  }
}
