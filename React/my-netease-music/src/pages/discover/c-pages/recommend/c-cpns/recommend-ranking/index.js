import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  UP_RANKING_LIST,
  NEW_RANKING_LIST,
  ORIGIN_RANKING_LIST,
} from "@/common/contants";

import SceThemeHeaderRCM from "@/components/theme-header-rcm";
import { getTopListAction } from "../../store/actionCreators";

export default memo(function SceRecommendRanking() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(UP_RANKING_LIST));
    dispatch(getTopListAction(NEW_RANKING_LIST));
    dispatch(getTopListAction(ORIGIN_RANKING_LIST));
  }, [dispatch]);

  return <SceThemeHeaderRCM title="榜单"> </SceThemeHeaderRCM>;
});
