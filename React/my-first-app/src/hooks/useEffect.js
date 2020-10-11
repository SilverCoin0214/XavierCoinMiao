import React, { useState, useEffect } from "react";

export default function TestUseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("开始订阅");

    return () => {
      console.log("结束订阅");
    };
  }, []);

  return (
    <div>
      <h2>计数:{counter}</h2>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}
