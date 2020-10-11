import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routes from "@/router";
import store from "@/store";

import SceAppHeader from "@/components/app-header";
import SceAppFooter from "@/components/app-footer";
import { HashRouter } from "react-router-dom";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SceAppHeader />
        {renderRoutes(routes)}
        <SceAppFooter />
      </HashRouter>
    </Provider>
  );
});
