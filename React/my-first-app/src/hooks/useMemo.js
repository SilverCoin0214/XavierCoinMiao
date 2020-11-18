import React, { useState, useMemo } from "react";

function totalNum(count) {
  console.log("数字刷新, 组件渲染" + count);
  let total = 0;
  for (let i = 0; i <= count; i++) {
    total += i;
  }

  return total;
}

export default function UseMemo() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  // 用useMemo包裹后, 如果发现返回的值没有发生改变, 整个回调函数就不会再执行.
  const total = useMemo(() => {
    console.log("useMemo包裹的函数重新执行");
    return totalNum(count);
  }, [count]);

  // 在不使用memo时, 即使是刷新组件与计算函数无关, 计算函数也会重新执行一次,返回相同的值
  // const total = totalNum(count);

  return (
    <div>
      <h2>计算数字的和: {total}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setShow(!show)}>刷新组件</button>
      {show && <h2>组件渲染 </h2>}
    </div>
  );
}
