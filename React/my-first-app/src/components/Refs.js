import React, { createRef, PureComponent } from "react";

class Count extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <div>计算计数: {this.state.counter}</div>
        <button
          onClick={() => {
            this.add();
          }}
        >
          +1
        </button>
      </div>
    );
  }

  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default class Refs extends PureComponent {
  constructor(props) {
    super(props);

    this.titleR = createRef();
    this.countRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref="titleRef">hello react</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <h2 ref={this.titleR}>虚假</h2>
        <button onClick={() => this.change2()}> 改变2 </button>

        <hr />
        <Count ref={this.countRef} />
        <button
          onClick={() => {
            this.appButton();
          }}
        >
          点击组件按钮
        </button>
      </div>
    );
  }

  changeText() {
    this.refs.titleRef.innerHTML = "Hello code";
  }

  change2() {
    this.titleR.current.innerHTML = "ddd";
  }

  appButton() {
    this.countRef.current.add();
  }
}
