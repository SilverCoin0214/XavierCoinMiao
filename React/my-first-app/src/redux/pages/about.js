import React, { PureComponent } from "react";

import store from "../store/index.js";

import { subAction } from "../store/actionCreators";

export default class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <hr />
        <h2>Home</h2>
        <h2>计数:{this.state.counter}</h2>
        <button
          onClick={(e) => {
            this.decrement();
          }}
        >
          -1
        </button>
        <button
          onClick={(e) => {
            this.dec_num(5);
          }}
        >
          -5
        </button>
      </div>
    );
  }

  decrement() {
    store.dispatch(subAction(1));
  }

  dec_num(num) {
    store.dispatch(subAction(5));
  }
}
