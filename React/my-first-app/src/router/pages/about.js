import React, { PureComponent } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

function History() {
  return (
    <div>
      <h2>垃圾历史</h2>
    </div>
  );
}

function Culture() {
  return (
    <div>
      <h2>没有文化</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>联系:123124566</h2>
    </div>
  );
}

function Join() {
  return (
    <div>
      <h2>不加入</h2>
    </div>
  );
}

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <NavLink exact to="/about">
          企业历史
        </NavLink>
        <NavLink to="/about/culture">企业文化</NavLink>
        <NavLink to="/about/contact">联系我们</NavLink>
        <button
          onClick={() => {
            this.joinUs();
          }}
        >
          加入我们
        </button>

        <Switch>
          <Route exact path="/about" component={History} />
          <Route path="/about/culture" component={Culture} />
          <Route path="/about/contact" component={Contact} />
          <Route path="/about/join" component={Join} />
        </Switch>
      </div>
    );
  }

  joinUs() {
    this.props.history.push("/about/join");
  }
}
