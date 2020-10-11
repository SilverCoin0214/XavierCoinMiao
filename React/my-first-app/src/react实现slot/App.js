import React, { Component } from "react";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar
          leftSlot={<div>aaa</div>}
          centerSlot={<div>bbb</div>}
          rightSlot={<div>ccc</div>}
        />
      </div>
    );
  }
}
