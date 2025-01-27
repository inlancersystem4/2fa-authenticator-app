import { createReducer } from "@reduxjs/toolkit";
import { setQrCode, setFcm, setCode } from "../actions/actions";

const initialState = {
  qrCode: "",
  fcm: "",
  verified_code: "",
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(setQrCode, (state, action) => {
    state.qrCode = action.payload;
  });
  builder.addCase(setFcm, (state, action) => {
    state.fcm = action.payload;
  });
  builder.addCase(setCode, (state, action) => {
    state.verified_code = action.payload;
  });
});

export default authReducer;
