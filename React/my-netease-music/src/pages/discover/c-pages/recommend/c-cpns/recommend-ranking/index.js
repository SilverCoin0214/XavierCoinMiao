import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { RankingWrapper } from "./style";

import SceTopRanking from "@/components/top-ranking";

import {
  UP_RANKING_LIST,
  NEW_RANKING_LIST,
  ORIGIN_RANKING_LIST,
} from "@/common/contants";

import SceThemeHeaderRCM from "@/components/theme-header-rcm";
import { getTopListAction } from "../../store/actionCreators";

export default memo(function SceRecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(UP_RANKING_LIST));
    dispatch(getTopListAction(NEW_RANKING_LIST));
    dispatch(getTopListAction(ORIGIN_RANKING_LIST));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <SceThemeHeaderRCM title="榜单"> </SceThemeHeaderRCM>
      <div className="tops">
        <SceTopRanking info={upRanking}></SceTopRanking>
        <SceTopRanking info={newRanking}></SceTopRanking>
        <SceTopRanking info={originRanking}></SceTopRanking>
      </div>
    </RankingWrapper>
  );
});
