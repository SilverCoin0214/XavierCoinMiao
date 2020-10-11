// import { PureComponent } from "react";
import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_RECOMMEND,
  CHANGE_BANNER,
} from "./constants.js";

const defaultState = {
  counter: 0,
  banners: [],
  recommends: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNER:
      return { ...state, banners: action.banner };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommend };
    default:
      return state;
  }
}

export default reducer;
