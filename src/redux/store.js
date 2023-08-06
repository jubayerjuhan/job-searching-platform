import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import userReducer from "./reducers/userReducer";

//persist config for persistor
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

// conbine reducers here
const reducers = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) => gDM().concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
