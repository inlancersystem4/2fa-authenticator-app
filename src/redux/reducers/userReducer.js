import { createReducer } from "@reduxjs/toolkit";
import { setUserID, setUserEmail } from "../actions/actions";

const initialState = {
  userID: "",
  email: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserID, (state, action) => {
    state.userID = action.payload;
  });
  builder.addCase(setUserEmail, (state, action) => {
    state.email = action.payload;
  });
});

export default userReducer;
