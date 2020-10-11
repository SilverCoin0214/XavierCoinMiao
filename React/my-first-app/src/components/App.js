import React, { Component } from "react";
import propTypes from "prop-types";

/// 组件化开发---组件通信.
function Header(props) {
  const { names } = props;

  return (
    <h2>
      我是header
      <ul>
        {names.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ul>
    </h2>
  );
}
// 属性验证
Header.propTypes = {
  names: propTypes.array,
};

class Main extends Component {
  render() {
    return <div>我是main---{this.props.yahaha}</div>;
  }
}

function Footer(props) {
  return <h2>我是footer---{props.nohaha}</h2>;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yahaha: "yahaha",
    };
  }

  render() {
    return (
      <div>
        <Header names={["sce", "zaj"]} />
        <Main yahaha={this.state.yahaha} />
        <Main yahaha={"第二个参数"} />
        <Footer nohaha={"func传递参数只用props, 不用this.props"} />
      </div>
    );
  }
}
