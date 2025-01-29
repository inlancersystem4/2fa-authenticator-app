import { createReducer } from "@reduxjs/toolkit";
import { setToken } from "../actions/actions";

const initialState = {
  token: "",
};

const sessionReducer = createReducer(initialState, (builder) => {
  builder.addCase(setToken, (state, action) => {
    state.token = action.payload;
  });
});

export default sessionReducer;
