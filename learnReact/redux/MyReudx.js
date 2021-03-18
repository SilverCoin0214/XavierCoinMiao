// https://github.com/brickspert/blog/issues/22#state

/** 发布订阅模式 */

let state = {
  count: 1
}

let listeners = []

/** 订阅 */
function subscribe(listener) {
  listeners.push(listener)
}

function changeCount(count) {
  state.count = count
  for (let i = 0; i < listeners.length; i++) {
    let listener = listeners[i]
    listener()
  }
}

subscribe(() => {
  console.log(state.count)
})

changeCount(2)
changeCount(3)
changeCount(4)

// --------------------------------

/**
 * 把公共代码封装起来
 */

const createStore = function (initState) {
  let state = initState
  let listeners = []

  // 订阅
  function subscribe(listener) {
    listeners.push(listener)
  }

  function changeState(newState) {
    state = newState

    for (let i = 0; i < listeners.length; i++) {
      let listener = listeners[i]
      listener()
    }
  }

  function getState() {
    return state
  }

  return {
    subscribe,
    changeState,
    getState
  }
}

/***
 * 尝试使用 creatStore 管理多个状态
 */

let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '',
    description: ''
  }
}

let store = createStore(initState)

store.subscribe(() => {
  let state = store.getState()
  console.log(`${state.info.name}: ${state.info.description}`)
})

store.subscribe(() => {
  let state = store.getState()
  console.log(state.counter.count)
})

store.changeState({
  ...store.getState(),
  info: {
    name: '测试',
    description: '更新内容'
  }
})

store.changeState({
  ...store.getState(),
  counter: {
    count: 1
  }
})

/***
 * 尝试实现一个自增自减计数器
 */

let initState2 = {
  count: 0
}

let store2 = createStore(initState2)

store2.subscribe(() => {
  let state = store2.getState()
  console.log(state.count)
})

store2.changeState({
  count: store2.getState().count + 1
})

store2.changeState({
  count: store2.getState().count - 1
})

store2.changeState({
  count: 'abc'
})

/**
 * 制定一个state修改计划, 限制state被任意修改
 */

function plan(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const createStore2 = function (plan, initState) {
  let state = initState
  let listeners = []

  // 订阅
  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = plan(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  function getState() {
    return state
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}

let initState3 = {
  count: 0
}

let store3 = createStore2(plan, initState3)

store3.subscribe(() => {
  let state = store3.getState()
  console.log(state.count)
})

store3.dispatch({
  type: 'INCREMENT'
})

store3.dispatch({
  type: 'DECREMENT'
})

store3.dispatch({
  count: 'abc'
})

// -------------------------------------------------------

/**
 *  reducer 的拆分和合并
 */

let state4 = {
  counter: {
    count: 0
  },
  info: {
    name: '前端',
    description: '介绍'
  }
}

// 拆分的reduer
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

function infoReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state
  }
}

function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers)

  return function combination(state = {}, action) {
    const nextState = {}

    for (let i = 0; i < reducerKeys.length; i++) {
      // key就是每一个 子reducer 的名称
      const key = reducerKeys[i]
      const reducer = reducers[key]

      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
    }

    return nextState
  }
}

const reducer = combineReducer({
  counter: counterReducer,
  info: infoReducer
})

let initState4 = {
  counter: {
    count: 0
  },
  info: {
    name: '二测',
    description: '二测介绍'
  }
}

let store5 = createStore2(reducer, initState4)

store5.subscribe(() => {
  let state = store5.getState()
  console.log(state.counter.count, state.info.name, state.info.description)
})

store5.dispatch({
  type: 'INCREMENT'
})

store5.dispatch({
  type: 'SET_NAME',
  name: '三册'
})
