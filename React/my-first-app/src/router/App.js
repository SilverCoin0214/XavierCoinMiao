import React, { PureComponent } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import List from "./pages/list";
import Profile from "./pages/profile";
import Detail from "./pages/detail";
import "./pages/style.css";

import { Route, NavLink, Switch, withRouter } from "react-router-dom";

class App extends PureComponent {
  render() {
    const id = "123";
    return (
      <div>
        <NavLink to="/" exact>
          主页
        </NavLink>
        <NavLink to="/about">关于</NavLink>
        <NavLink to="/profile">我的</NavLink>
        <NavLink to={`/detail/${id}`}>详情</NavLink>
        <button
          onClick={() => {
            this.showList();
          }}
        >
          列表
        </button>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/list" component={List} />
        </Switch>
      </div>
    );
  }

  showList() {
    this.props.history.push("/list");
  }
}

export default withRouter(App);
