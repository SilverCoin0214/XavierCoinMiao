import React from "react";

import "./css/app.less";
import background from "./img/test.jpg";

function App() {
  return (
    <div className="app">
      <h2>Webpack配置React脚手架</h2>
      <img className="background" src={background} alt="" />
    </div>
  );
}

export default App;
