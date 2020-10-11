import React, { Component } from "react";

export default class RenderReturn extends Component {
  render() {
    //  1. 可以返回jsx
    // 2. 可以返回数组和fragments
    // 3. portals
    // 4. 字符串和数值类型
    // 5. 布尔型和null
    return <div></div>;
  }
}
