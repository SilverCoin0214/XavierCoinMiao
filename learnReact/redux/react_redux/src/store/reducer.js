import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENTD
} from './constans.js'

const initalState = {
  counter: 0,
  banners: [],
  recommends: []
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    case CHANGE_RECOMMENTD:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default reducer
