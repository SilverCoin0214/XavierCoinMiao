import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messsage: "你好 ",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.messsage}</h2>
      </div>
    );
  }
}

/**
 * 函数式组件的特点:
 * 1. 没有 this对象
 * 2. 没有内部状态(hooks生成状态)
 *
 */
export function App2() {
  return <div>我是函数组件</div>;
}
