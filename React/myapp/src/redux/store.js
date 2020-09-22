import { createStore } from "redux";
import { data } from "./reducer";
export var store = createStore(data);
