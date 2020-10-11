import React, { PureComponent } from "react";

export default class MysetState extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: "lala", age: 18 },
        { name: "cici", age: 29 },
        { name: "bobo", age: 30 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li>
                {item.name}----{item.age}
                <button
                  onClick={() => {
                    this.add(index);
                  }}
                >
                  +1
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  add(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    });
  }
}
