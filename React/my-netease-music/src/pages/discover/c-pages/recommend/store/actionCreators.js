import * as actionTypes from "./constant";

import { getTopbanners, getHotRecommends } from "@/services/recommend";

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopbanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

export const getHotRecommendsAction = () => {
  return (dispatch) => {
    getHotRecommends(8).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };
};
