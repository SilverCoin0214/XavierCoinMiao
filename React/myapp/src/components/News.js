import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 123,
      child: "子组件的数据",
    };
  }

  pubsub() {
    PubSub.publish("evt", this.state.num);
  }

  render() {
    return (
      <div>
        News组件
        <h1>子组件---{this.props.text}</h1>
        <h2>子组件自身state--{this.state.num}</h2>
        <button onClick={this.props.fufun.bind(this, this.state.child)}>
          子组件向父组件传递数据
        </button>
        <button onClick={this.pubsub.bind(this)}>点击进行同级传值</button>
      </div>
    );
  }
}
