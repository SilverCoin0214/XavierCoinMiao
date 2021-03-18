const redux = require('redux')

const initalState = {
  counter: 0
}

function reducer(state = initalState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'ADD':
      return { ...state, counter: state.counter + action.add }
    case 'DEC':
      return { ...state, counter: state.counter - action.dec }
    default:
      return state
  }
}

const store = redux.createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD', add: 5 }
const action4 = { type: 'DEC', dec: 10 }

store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
