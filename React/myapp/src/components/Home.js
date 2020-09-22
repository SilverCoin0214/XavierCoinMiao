import React, { Component, Fragment } from "react";
import News from "./News";
import Phone from "./Phone";
import axios from "axios";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: "父组件里的状态",
      child: "默认值",
      arr: [],
    };
  }

  componentDidMount() {
    // JSON通过axios获取数据后把数据绑定到 this.state里的参数上, 就可以在页面中使用.
    axios.get("/api/101010100.html").then((ok) => {
      console.log(ok);

      // 需要把获取的对象转为数组才能使用.
      let data = ok.data.weatherinfo;
      let newarr = [];
      Object.keys(data).forEach((element) => {
        let o = {};
        o[element] = data[element];
        newarr.push(o);
      });

      this.setState({
        arr: newarr,
      });
    });
  }

  dataFun = (text) => {
    console.log(text);
    this.setState({
      child: text,
    });
  };

  render() {
    return (
      <Fragment>
        <div>我是组件1</div>
        <div>
          我是组件2--
          {this.state.arr.map((item, index) => {
            return (
              <p key={index}>
                {Object.keys(item)}----{Object.values(item)}
              </p>
            );
          })}
        </div>
        <img src={require("../assets/IMG39.jpeg")} />
        home ----- {this.state.child}
        <News text={this.state.parent} fufun={this.dataFun} />
        <Phone />
      </Fragment>
    );
  }
}
