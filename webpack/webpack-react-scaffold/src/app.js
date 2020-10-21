import React from "react";

import "./css/app.less";
import background from "./img/test.jpg";

function App() {
  return (
    <div className="app">
      {" "}
      没法时时更新啊!!!!!
      <h2>加加加</h2>
      <h2>加加加</h2>
      <h2>加加加</h2>
      <h2>加加加</h2>
      <h2>加加加</h2>
      <img className="background" src={background} alt="" />
    </div>
  );
}

export default App;
