import { createReducer } from "@reduxjs/toolkit";
import { setQrCode , setFcm } from "../actions/actions";

const initialState = {
  qrCode: "",
  fcm: "",
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(setQrCode, (state, action) => {
    state.qrCode = action.payload;
  });
  builder.addCase(setFcm, (state, action) => {
    state.fcm = action.payload;
  });
});

export default authReducer;
