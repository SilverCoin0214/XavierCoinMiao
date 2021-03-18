import { ADD_NUMBER, SUB_NUMBER } from './constans.js'

const initalState = {
  counter: 0
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }

    default:
      return state
  }
}

export default reducer
