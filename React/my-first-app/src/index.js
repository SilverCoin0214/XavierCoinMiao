import React, { memo, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
// import Home, { App2 } from "./components/Home";
// import Tab from "./components/Tab";
// import "./components/style.css";

// import App from "./react实现slot/App";
// import "./react实现slot/style.css";

// import MyContext from "./components/MyContext";

// import MysetState from "./components/MysetState";
// import Refs from "./components/Refs";

// import Form from "./components/Form";

// import UseCss from "./components/UseCss";

// import UseAntd from "./components/UseAntd";

// import App from "./comment/App";

// import App from "./axios/App";
// import App from "./router/App.js";
// import { BrowserRouter } from "react-router-dom";

// import UseEffect from "./hooks/useEffect";

import App from "./hooks/App";

class App2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={(e) => this.Change()}>点击修改</button>
      </div>
    );
  }

  Change() {
    // this.setState((prev) => console.log(prev.count));
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  }
}

ReactDOM.render(<App2 />, document.getElementById("root"));
