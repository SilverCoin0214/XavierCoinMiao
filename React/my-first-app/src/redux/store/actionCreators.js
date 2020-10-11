import axios from "axios";

import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
  FETCH_ABOUT_DATA,
} from "./constants.js";

// export function addAction(num) {
//   return {
//     type: "ADD_NUMBER",
//     num,
//   };
// }

// export const addAction = (num) => {
//   return {
//     type: "ADD_NUMBER",
//     num,
//   };
// };

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const changeBannerAction = (banner) => ({
  type: CHANGE_BANNER,
  banner,
});

export const changeRecommendAction = (recommend) => ({
  type: CHANGE_RECOMMEND,
  recommend,
});

// react-thunk

// thunk4. 把网络请求放到这个函数里, 然后再调用回正常的action
export const getAboutMultidataAction = (dispatch) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
    const data = res.data.data;

    dispatch(changeBannerAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  });
};

// react-saga拦截的action

export const FetchAboutMultidataAction = {
  type: FETCH_ABOUT_DATA,
};
