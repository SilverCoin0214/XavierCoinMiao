import React, { Component } from "react";

const UserContext = React.createContext({
  name: "天才",
  age: 18,
});

class Three extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        你是--{this.context.name}--{this.context.age}
      </div>
    );
  }
}

class Second extends Component {
  render() {
    return <Three />;
  }
}

export default class MyContext extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ name: "白痴" }}>
          <Second />
        </UserContext.Provider>
      </div>
    );
  }
}
