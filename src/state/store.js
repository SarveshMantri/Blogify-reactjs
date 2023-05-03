import { configureStore } from "@reduxjs/toolkit";
import changeAlertRuducers from "./reducers/alertReducer";
import storageSlice from "./reducers/storageReducer";

export default configureStore({
  reducer: {
    alertState: changeAlertRuducers,
    blogsState: storageSlice,
  },
});
