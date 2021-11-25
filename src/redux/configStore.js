import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import dictionary from "./modules/dictionary";

const middlewares = [thunk];
const rootReducer = combineReducers({dictionary});//리듀서들끼리 묶어서 root리듀서(combineReducers)
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;