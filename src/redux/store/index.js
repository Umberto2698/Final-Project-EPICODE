import { combineReducers } from "redux";
import loadingReducer from "../reducers/loadingReducer";
import { configureStore } from "@reduxjs/toolkit";
const finalReducer = combineReducers({
  loading: loadingReducer,
});

const store = configureStore({
  reducer: finalReducer,
});

export default store;
