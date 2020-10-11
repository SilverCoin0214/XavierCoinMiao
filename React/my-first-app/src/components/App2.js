import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    const { add } = this.props;
    return <button onClick={add}> +1 </button>;
  }
}

// 子组件传递给父组件,
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.des();
          }}
        >
          -
        </button>

        <h2>当前计数 : {this.state.counter}</h2>

        <button
          onClick={() => {
            this.add();
          }}
        >
          +
        </button>
        <CounterButton
          add={() => {
            this.add();
          }}
        />
      </div>
    );
  }

  des() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
