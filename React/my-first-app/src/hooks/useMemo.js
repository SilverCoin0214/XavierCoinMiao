import React, { useState, useMemo } from "react";

function totalNum(count) {
  console.log("数字刷新");
  let total = 0;
  for (let i = 0; i <= count; i++) {
    total += i;
  }

  return total;
}

export default function UseMemo() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  const total = useMemo(() => {
    return totalNum(count);
  }, [count]);
  //   const total = totalNum(count);

  return (
    <div>
      <h2>计算数字的和: {total}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setShow(!show)}>刷新组件</button>
    </div>
  );
}
