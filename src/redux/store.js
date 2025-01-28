import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import socketReducer from "./reducers/socketReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    socket: socketReducer,
  },
});

export default store;
