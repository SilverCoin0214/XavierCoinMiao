import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState(["apple", "orange"]);

  return (
    <div>
      {count}地方
      <button onClick={() => setFruit([...fruit, "banana"])}>水果</button>
      {fruit.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
}
