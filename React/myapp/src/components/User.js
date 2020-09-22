import React, { Component } from "react";
import { store } from "../redux/store";
import * as action from "../redux/action";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: store.getState(),
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    store.subscribe(() => {
      this.setState({
        num: store.getState(),
      });
    });
  }

  render() {
    return (
      <div>
        我是User---{this.state.num}
        <button
          onClick={() => {
            store.dispatch(action.add(1));
          }}
        >
          点我+1
        </button>
        <button
          onClick={() => {
            store.dispatch(action.del(1));
          }}
        >
          点我-1
        </button>
      </div>
    );
  }
}
