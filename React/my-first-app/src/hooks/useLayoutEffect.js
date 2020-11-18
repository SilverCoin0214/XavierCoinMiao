import React, { useEffect, useState, useLayoutEffect } from "react";

export default function UseLayoutEffect() {
  const [counter, setCounter] = useState(10);

  // 如果使用useEffect, 会导致点击按钮后先渲染为0然后在执行useEffect渲染成其他值, 渲染了两次.
  // useEffect(() => {
  //   if (counter == 0) {
  //     setCounter(Math.random() * 100);
  //   }
  // }, [counter]);

  // 因为是在渲染前执行, 所以点击后先执行useLayoutEffect, 导致只会渲染一次
  useLayoutEffect(() => {
    if (counter == 0) {
      setCounter(Math.random() * 100);
    }
  }, [counter]);

  return (
    <div>
      <h2>显示当前值: {counter}</h2>
      <button onClick={() => setCounter(0)}>+10</button>
    </div>
  );
}
