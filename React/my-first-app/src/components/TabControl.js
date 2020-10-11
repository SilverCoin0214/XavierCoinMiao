import React, { Component } from "react";

export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <div className="tabControl">
        {this.props.title.map((item, index) => {
          return (
            <div
              key={item}
              className={"tabItem " + (currentIndex === index ? "active" : "")}
              onClick={() => {
                this.change(index);
              }}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }

  change(index) {
    this.setState({
      currentIndex: index,
    });

    this.props.itemClick(index);
  }
}
