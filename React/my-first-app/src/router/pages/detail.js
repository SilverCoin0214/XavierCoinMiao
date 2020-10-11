import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    const match = this.props.match;

    return <div>id:{match.params.id}</div>;
  }
}
