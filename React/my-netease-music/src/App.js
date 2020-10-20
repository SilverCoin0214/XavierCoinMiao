import React, { memo, Suspense } from "react";
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
        {/* Suspense是为了防止懒加载崩溃, 或者说是Js读取缓慢导致页面显示空白 */}
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <SceAppFooter />
        <SceAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
