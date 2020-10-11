import React, { Component } from "react";
import TabControl from "./TabControl";

export default class Tab extends Component {
  constructor(props) {
    super(props);

    this.titles = ["流行", "新款", "精选"];

    this.state = {
      currentIndex: 0,
    };
  }
  render() {
    const { currentIndex } = this.state;

    return (
      <div>
        <TabControl
          itemClick={(index) => this.itemClick(index)}
          title={this.titles}
        />
        <h2>{this.titles[currentIndex]}</h2>
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    });
  }
}
