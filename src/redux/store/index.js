import { combineReducers } from "redux";
import stateReducer from "../reducers/stateReducer";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
const finalReducer = combineReducers({
  state: stateReducer,
  login: loginReducer,
});

const store = configureStore({
  reducer: finalReducer,
});

export default store;
