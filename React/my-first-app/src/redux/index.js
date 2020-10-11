// import store from "./store/index.js";
// import { addAction, subAction } from "./store/actionCreators.js";

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addAction(10));
// store.dispatch(subAction(5));
// store.dispatch(subAction(213));

import Home from "./pages/home2";
import About from "./pages/about4-react-saga";

import store from "./store";

import { Provider } from "react-redux";

import React, { PureComponent } from "react";

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Home />
        <About />
      </Provider>
    );
  }
}
