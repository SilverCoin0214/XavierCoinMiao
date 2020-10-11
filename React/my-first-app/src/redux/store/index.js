import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.js";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 1. 创建saga中间件
const SagaMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(thunkMiddleware, SagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

// 2. 跑起来saga
SagaMiddleware.run(saga);

export default store;
