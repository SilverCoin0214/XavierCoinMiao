import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { FETCH_ABOUT_DATA } from "./constants";
import { changeBannerAction, changeRecommendAction } from "./actionCreators";

function* fetchAboutMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  const data = res.data.data;
  const banners = data.banner.list;
  const recommends = data.recommend.list;

  yield all([
    yield put(changeBannerAction(banners)),

    yield put(changeRecommendAction(recommends)),
  ]);
}

function* MySaga() {
  yield takeEvery(FETCH_ABOUT_DATA, fetchAboutMultidata);
}

export default MySaga;
