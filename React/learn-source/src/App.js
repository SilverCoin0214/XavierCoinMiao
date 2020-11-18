import React, { useState } from "react";

function App() {
  const [num, updateNum] = useState(0);

  return <div onClick={() => updateNum((num) => num + 1)}>{num}</div>;
}

export default App;
