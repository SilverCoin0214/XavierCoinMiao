import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import SceTopBanner from "./c-cpns/top-banner";
import SceHotRecommend from "./c-cpns/hot-recommend";
import SceNewAlbum from "./c-cpns/new-album";
import SceRecommendRanking from "./c-cpns/recommend-ranking";
import SceUserLogin from "./c-cpns/user-login";
import SceSettleSinger from "./c-cpns/settle-singer";
import SceHotRadio from "./c-cpns/hot-radio";

function SceRecommend(props) {
  return (
    <RecommendWrapper>
      <SceTopBanner />
      <Content className="warp-v2">
        <RecommendLeft>
          <SceHotRecommend />
          <SceNewAlbum />
          <SceRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <SceUserLogin></SceUserLogin>
          <SceSettleSinger></SceSettleSinger>
          <SceHotRadio></SceHotRadio>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(SceRecommend);
