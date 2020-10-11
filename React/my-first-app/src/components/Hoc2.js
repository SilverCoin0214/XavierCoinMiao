import React, { Component } from "react";

function withAuth(WrappedComponent) {
  const NewCpn = (props) => {
    const { isLogin } = props;
    if (isLogin) {
      return <WrappedComponent {...props} />;
    } else {
      return <Login />;
    }
  };

  NewCpn.displayName = "Auth";

  return NewCpn;
}

class Login extends Component {
  render() {
    return <h2>请登录</h2>;
  }
}

class Gouwuche extends Component {
  render() {
    return <h2>我是购物车</h2>;
  }
}

const AuthGouwuche = withAuth(Gouwuche);

export default class Hoc2 extends Component {
  render() {
    return (
      <div>
        <AuthGouwuche isLogin={true} />
      </div>
    );
  }
}
