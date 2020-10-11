import React, { PureComponent } from "react";
import store from "../store/index.js";

import { addAction } from "../store/actionCreators";

export default class Home extends PureComponent {
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
        <h2>Home</h2>
        <h2>计数:{this.state.counter}</h2>
        <button
          onClick={(e) => {
            this.add();
          }}
        >
          +1
        </button>
        <button
          onClick={(e) => {
            this.add_num(5);
          }}
        >
          +5
        </button>
      </div>
    );
  }

  add() {
    store.dispatch(addAction(1));
  }

  add_num(num) {
    store.dispatch(addAction(5));
  }
}
