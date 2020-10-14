import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import routes from "@/router";
import store from "@/store";

import SceAppHeader from "@/components/app-header";
import SceAppFooter from "@/components/app-footer";
import SceAppPlayerBar from "@/pages/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SceAppHeader />
        {renderRoutes(routes)}
        <SceAppFooter />
        <SceAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
