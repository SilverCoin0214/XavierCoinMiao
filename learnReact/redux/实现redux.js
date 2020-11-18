// 设置一个 plan 函数, 相当于 reducer
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// }

const createStore = function (reducer, initState) {
  let state = initState;
  let listeners = [];

  // 订阅
  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    // 按照 Plan 计划修改 state
    state = reducer(state, action);

    // 通知
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  // 用一个不匹配任何计划的type, 来获取初始值
  dispatch({ type: Symbol() });

  function replaceReducer(nextReducer) {
    reducer = nextReducer;

    dispatch({ type: Symbol() });
  }

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer,
  };
};

// ---------------------------------------------

// let initState = {
//   counter: {
//     count: 0,
//   },
//   info: {
//     name: "",
//     description: "",
//   },
// };

// let store = createStore(initState);

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(`${state.info.name}: ${state.info.description}`);
// });

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(state.counter.count);
// });

// store.changeState({
//   ...store.getState(),
//   info: {
//     name: "redux",
//     description: "前端学习",
//   },
// });

// store.changeState({
//   ...store.getState(),
//   counter: {
//     count: 1,
//   },
// });

// ----------------------------------------

// state会被任意修改
// let initState = {
//   count: 0,
// };

// let store = createStore(initState);

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(state.count);
// });

// store.changeState({
//   count: store.getState().count + 1,
// });

// store.changeState({
//   count: store.getState().count - 1,
// });

// store.changeState({
//   count: "abc",
// });

// store.changeState({
//   count: store.getState().count - 1,
// });

// ------------------------------------------

// 实现了 state 控制输入
// let initState = {
//   count: 0,
// };

// let store = createStore(reducer, initState);

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(state.count);
// });

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   count: "abc",
// });

// ------------------------------------------

// 拆分reducer

const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer,
});

// function counterReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// }

function InfoReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    default:
      return state;
  }
}

// 合成整体reducer
function combineReducers(reducers) {
  // 获得每一个reducer ['counter', 'info']
  const reducerKeys = Object.keys(reducers);

  // 返回一个新的合成后 reducer
  return function combination(state = {}, action) {
    // 生成一个新的state
    const nextState = {};

    // 遍历执行所有的reducers, 整合成一个新的state
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];

      // 之前的Key的state
      const previousStateForKey = state[key];

      // 执行 分 reducer, 获得新的state
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState[key] = nextStateForKey;
    }

    return nextState;
  };
}

// let initState = {
//   counter: {
//     count: 0,
//   },
//   info: {
//     name: "sce",
//     description: "学习",
//   },
// };

// let store = createStore(reducer, initState);

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(state.counter.count, state.info.name, state.info.description);
// });

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "SET_NAME",
//   name: "测试",
// });

// --------------------------------------------------
// state的拆分和合并

let initState = {
  count: 0,
};

function counterReducer(state, action) {
  if (!state) {
    state = initState;
  }

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}

// -------------------------------------------
// 中间件

const store = createStore(reducer);
const next = store.dispatch;

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("this state", store.getState());
  console.log("action", action);
  next(action);
  console.log("next state", store.getState());
};

const exceptionMiddleware = (store) => (next) => (action) => {
  try {
    next(action);
    console.log("中间件穿过");
  } catch (err) {
    console.log("错误报告: ", err);
  }
};

const timeMiddleware = (store) => (next) => (acton) => {
  console.log("time", new Date().getTime());
  next(acton);
};

const time = timeMiddleware(store);
const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);

store.dispatch = exception(time(logger(next)));

store.dispatch({
  type: "INCREMENT",
});

// ----------------------------------------------

// 实现 applyMiddleware

const applyMiddleware = function (...middlewares) {
  // 返回一个重写的 createStore方法
  return function rewriteCreateStoreFunc(oldCreateSotre) {
    // 返回重写后新的 createStore
    return function newCreateStore(reducer, initState) {
      // 1. 生成store
      const store = oldCreateSotre(reducer, initState);
      // 给每个 middleware 传下 store, 相当于 const logger = loggerMiddleware(store)
      // const chain = [exception, time, logger]
      // const chain = middlewares.map((middleware) => middleware(store)); 修改为
      const simpleStore = { getState: store.getState };
      const chain = middlewares.map((middleware) => middleware(simpleStore));
      let dispatch = store.dispatch;

      // 实现 exception(time(logger(dispatch)))
      chain.reverse().map((middleware) => {
        dispatch = middleware(dispatch);
      });

      // 2. 重写 dispatch
      store.dispatch = dispatch;
      return store;
    };
  };
};
