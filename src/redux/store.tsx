import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import  testReducer  from "./slice/testSlice";

export const store = configureStore({
  reducer: {
    pageCounter: counterReducer,
    test: testReducer,
  },
});
