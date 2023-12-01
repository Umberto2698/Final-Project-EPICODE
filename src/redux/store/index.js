import { combineReducers } from "redux";
import stateReducer from "../reducers/stateReducer";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import profileReducer from "../reducers/profileReducer";
const finalReducer = combineReducers({
  state: stateReducer,
  login: loginReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: finalReducer,
});

export default store;
