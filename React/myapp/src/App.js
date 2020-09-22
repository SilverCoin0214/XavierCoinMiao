import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

import Home from "./components/Home";
import User from "./components/User";
function App(props) {
  // withRouter 高阶组件(参数是一个组件, 同时返回的也是一个组件 称为高阶组件) 就是让不是路由切换的组件也具有路由切换组件的三个属性(location match history)

  // 监控路由变化   history.listen((link) => {
  // Link.pathname  切换路径
  // })

  // 编程式导航
  // props.history.push('/xxx')

  // 路由传参
  // params方式进行传参
  // 1. 需要在路由规则设置传递的接收参数  :xxx
  // 2. 发送参数 直接在跳转路径后编写
  // 3. 接收 props.match.params.参数名
  // 优点: 刷新地址, 参数依旧存在
  // 缺点: 只能传递字符串, 并且参数过多时url会变得丑陋

  // qurey方式
  // 1. 不需要在路由规则中进行传递参数的配置
  // 2. 直接发送数据
  // 3. 使用this.props.location.query.xxx

  props.history.listen((link) => {
    console.log(link);
  });

  // 使用useState
  let [val, setVal] = useState(0);

  // 如果有多个状态
  // 1.声明对象类型的状态
  // 2.多次声明
  let [obj, setObj] = useState({
    num: 1,
    str: "ccd",
    obj: 3,
  });

  // console.log(props);
  return (
    <div className="App">
      你好---使用数据:{val}
      <button
        onClick={() => {
          setVal(val + 1);
        }}
      >
        点我修改useState数据
      </button>
      <div>
        <NavLink to="/home">点我去home</NavLink>
        <br />
        <NavLink to="/user/我是参数">点我去user</NavLink>

        <button
          onClick={() => {
            props.history.push("/home");
          }}
        >
          点home
        </button>
        <button
          onClick={() => {
            props.history.push("/user/:id");
          }}
        >
          点user
        </button>
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user/:id" component={User} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

// class App extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: '我是状态组件'
//     }

//     render(){
//       return(
//         <div>
//           helloo --- {this.state.text}

//         </div>
//       )
//     }
//   }
// }

export default withRouter(App);
