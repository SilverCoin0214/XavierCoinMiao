import React, { Component } from "react";

class Hoc extends Component {
  render() {
    return <div>app--{this.props.name}</div>;
  }
}

const EnhanceComponent = function higherOrederComponent(WarppedComponent) {
  class NewComponent extends Component {
    render() {
      return <WarppedComponent {...this.props} />;
    }
  }

  NewComponent.displayName = "Code";

  return NewComponent;
};

const EC = EnhanceComponent(Hoc);

export default EC;
