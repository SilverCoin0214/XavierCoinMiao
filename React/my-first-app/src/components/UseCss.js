import React, { PureComponent } from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  h2 {
    font-size: 50px;
    color: red;
  }

  span {
    color: orange;

    &.active {
      color: blue;
    }

    &:hover {
      color: green;
    }
  }
`;

export default class UseCss extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <h2>测试</h2>
        <div>
          <span>轮播图</span>
          <span className={"active"}>轮播图</span>
          <span>轮播图</span>
          <span>轮播图</span>
        </div>
      </HomeWrapper>
    );
  }
}
