import { createReducer } from "@reduxjs/toolkit";
import { setSocketID } from "../actions/actions";

const initialState = {
  id: "",
};

const socketReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSocketID, (state, action) => {
    state.id = action.payload;
  });
});

export default socketReducer;
