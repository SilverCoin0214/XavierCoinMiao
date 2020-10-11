import React, { useState } from "react";

export default function UseState() {
  const [counter, SetCounter] = useState(() => 10);

  return (
    <div>
      <h2>计数:{counter}</h2>
      <button
        onClick={(e) => {
          SetCounter(counter + 1);
        }}
      >
        +1
      </button>
      <button onClick={(e) => SetCounter((prev) => prev + 10)}>+10</button>
      <button
        onClick={(e) => {
          SetCounter(counter - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}
