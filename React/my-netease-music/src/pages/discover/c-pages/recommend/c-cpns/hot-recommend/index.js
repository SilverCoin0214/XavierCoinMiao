import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/contants";

import SceThemeHeaderRCM from "@/components/theme-header-rcm";
import SceSongsCover from "@/components/songs-cover";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendsAction } from "../../store/actionCreators";

export default memo(function SceHotRecommend() {
  // redux hooks
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <SceThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SceSongsCover key={item.id} info={item}></SceSongsCover>;
        })}
      </div>
      <div className="music-ad"></div>
    </HotRecommendWrapper>
  );
});
