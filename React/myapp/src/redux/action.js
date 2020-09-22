// 增加
export const add = (num) => {
  return { type: "ADD", data: num };
};

// 减少
export const del = (num) => {
  return { type: "DEL", data: num };
};
