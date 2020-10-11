import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      fruit: "",
    };
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.addlisten(e);
          }}
        >
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />

          <select
            onChange={(e) => {
              this.selectChange(e);
            }}
            value={this.state.fruit}
          >
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>

          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  // addlisten(event) {
  //   event.preventDefault();
  //   console.log(this.state.username);
  //   console.log(this.state.fruit);
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  selectChange(event) {
    this.setState({
      fruit: event.target.value,
    });
  }
}
