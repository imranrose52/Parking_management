import { combineReducers } from "redux";
import parkingSlice from "./slice/parking-slice";
import userSlice from "./slice/login-slice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const parkingConfig = {
  key: "parking",
  version: 1,
  storage,

  blacklist: ["error_message", "is_loading", "parkings", "parking"],
};
const userConfig = {
  key: "user",
  version: 1,
  storage,
  keyPrefix: "",
  blacklist: ["errorMessage"],
};

const rootReducer = combineReducers({
  parking: persistReducer(parkingConfig, parkingSlice),
  user: persistReducer(userConfig, userSlice),
});

export default persistReducer(persistConfig, rootReducer);
