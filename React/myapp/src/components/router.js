// 路由   --根据 url 的不同来切换对应的组件   实现spa(单页面应用) 在页面之间切换时不会刷新

const { default: App } = require("../App");

// 下载 npm install --save react-router-dom

// react-router 只提供了一些核心的API
// react-router-dom 更多的一些选项

// 路由模式:
// hash HashRouter (hash 模式 带#号 刷新的时候页面不会丢失)
// browser BroserRouter 历史记录模式  没有#号 通过历史记录api来进行路由切换  刷新会丢失 本地模式不会

// 2. index.js 引用路由模块

// 3. 路由模式包裹根组件
// ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );

// 4. 在 App.js中引用  import { Route } from "react-router-dom";

// 5. 配置  <Route>

// 路由导航  Link to="去哪里"
// NavLink 比Link额外多配置一个class为active, 可以为属性设置样式
