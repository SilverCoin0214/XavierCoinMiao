import * as actionTypes from "./constant";
import {
  UP_RANKING_LIST,
  NEW_RANKING_LIST,
  ORIGIN_RANKING_LIST,
} from "@/common/contants";

import {
  getTopbanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from "@/services/recommend";

// ----

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

// -----

const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };
};

// -----

const changeNewAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});

export const getNewAlbumsAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumsAction(res));
      // console.log(res);
    });
  };
};

// ----

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res,
});

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res,
});

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res,
});

export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopList(id)
      .then((res) => {
        // let obj = {};
        // let playlist = res.playlist;
        // if (playlist) {
        //   for (let key of Object.keys(playlist)) {
        //     if (key === "name" || key === "coverImgUrl" || key === "tracks") {
        //       obj[key] = playlist[key];
        //     }
        //   }
        // }
        // console.log(obj);

        switch (id) {
          case UP_RANKING_LIST:
            dispatch(changeUpRankingAction(res.playlist));
            break;
          case NEW_RANKING_LIST:
            dispatch(changeNewRankingAction(res.playlist));
            break;
          case ORIGIN_RANKING_LIST:
            dispatch(changeOriginRankingAction(res.playlist));
            break;
          default:
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // getTopList(id).then((res) => {
    //   console.log(res.playlist.tracks.slice(0, 20));
    // });
  };
};
