import * as actionTypes from "./constant";

import { getTopbanners } from "@/services/recommend";

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
