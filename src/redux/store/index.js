import { combineReducers } from "redux";
import stateReducer from "../reducers/stateReducer";
import { configureStore } from "@reduxjs/toolkit";
const finalReducer = combineReducers({
  state: stateReducer,
});

const store = configureStore({
  reducer: finalReducer,
});

export default store;
