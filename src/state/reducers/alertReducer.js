import { createSlice } from "@reduxjs/toolkit";

export const changeAlertSlice = createSlice({
  name: "changeAlert",
  initialState: null,
  reducers: {
    setAlert: (state, action) => {
      if (action.payload) {
        return {
          message: action.payload.message,
          type: action.payload.type,
        };
      } else {
        return null;
      }
    },
  },
});

export const { setAlert } = changeAlertSlice.actions;
export default changeAlertSlice.reducer;
