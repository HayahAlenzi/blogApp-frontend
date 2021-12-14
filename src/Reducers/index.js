import { createStore, combineReducers } from "redux";

import tokenX from "./actions";

const reducers = combineReducers({ tokenX });
const store = createStore(reducers);

export default store;