/***
 * 最简化状态管理器
 */

const createStore = function (initState) {
  let state = initState
  let listeners = []

  // 订阅
  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(newState) {
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
    dispatch,
    getState
  }
}

//-------------------------------------------------
/**
 *  增加了 reducer 的 自增自减状态管理器
 */

function reducer(state, action) {
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

const createStore = function (reducer, initState) {
  let state = initState
  let listeners = []

  // 订阅
  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  function getState() {
    return state
  }

  // 用一个不匹配任何计划的type来获取初始值
  dispatch({ type: Symbol() })

  return {
    subscribe,
    dispatch,
    getState
  }
}

/**
 * 拆分和合并 reducer
 */

// 合并 reducer, 编写 combineReducer
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

// ------------------------------------------

// 实现 applyMiddleware

const applyMiddleware = function (...middlewares) {
  // 返回一个重写的 createStore 方法
  return function rewriteCreateStore(oldCreateStore) {
    // 返回一个新的 CreateStore
    return function newCreateStore(reducer, initState) {
      // 生成 store
      const store = oldCreateStore(reducer, initState)
      // 给每个middleware 传入 store
      const simpleStore = { getState: store.getState }
      const chain = middlewares.map((middleware) => middleware(simpleStore))
      let dispatch = store.dispatch

      chain.reverse().map((middleware) => {
        dispatch = middleware(dispatch)
      })

      // 重写 dispatch
      store.disptach = dispatch
      return store
    }
  }
}

/**
 * 重写 createStore
 *
 */

const createStore = function (reducer, initState, rewriteCreateStore) {
  if (typeof initState === 'function') {
    rewriteCreateStore = initState
    initState = undefined
  }

  if (rewriteCreateStore) {
    const newCreateStore = rewriteCreateStore(createStore)
    return newCreateStore(reducer, initState)
  }

  let state = initState
  let listeners = []

  // 订阅
  function subscribe(listener) {
    listeners.push(listener)
    // 退订
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  function getState() {
    return state
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer
    dispatch({ type: Symbol() })
  }

  // 用一个不匹配任何计划的type来获取初始值
  dispatch({ type: Symbol() })

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer
  }
}
