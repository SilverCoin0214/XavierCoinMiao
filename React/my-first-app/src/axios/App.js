import React, { PureComponent } from "react";
import axios from "axios";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    // axios
    //   .get("https://httpbin.org/get", {
    //     params: {
    //       name: "sss",
    //       age: 18,
    //     },
    //   })
    //   .then(console.log);

    // axios
    //   .post("https://httpbin.org/post", {
    //     data: {
    //       name: "zaj",
    //       age: 20,
    //     },
    //   })
    //   .then(console.log);

    axios({
      url: "https://httpbin.org/get",
      params: {
        name: "why",
        age: 123,
      },
    }).then(console.log);

    axios({
      url: "https://httpbin.org/post",
      data: {
        name: "sss",
        age: 23,
      },
      method: "post",
    }).then(console.log);
  }

  render() {
    return <div>app</div>;
  }
}
