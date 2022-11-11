import disenyreducer from "./disenyreducer";
import { combineReducers } from "redux";
import moviesReducers from "./movieReducer";

const rootReducer = combineReducers({ disenyreducer, moviesReducers });

export default rootReducer;
