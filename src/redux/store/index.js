import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import stateReducer from "../reducers/stateReducer";
import storage from "redux-persist/lib/storage";
import loginReducer from "../reducers/loginReducer";
import profileReducer from "../reducers/profileReducer";
import donationCenterReducer from "../reducers/donationCenterReducer";
import donationReducer from "../reducers/donationReducer";
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_REACT_APP_PERSIST_KEY,
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
  whitelist: ["login"],
};

const finalReducer = combineReducers({
  state: stateReducer,
  login: loginReducer,
  profile: profileReducer,
  centers: donationCenterReducer,
  donations: donationReducer,
});

const persistedReducer = persistReducer(persistConfig, finalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
