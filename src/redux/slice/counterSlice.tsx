import { createSlice } from "@reduxjs/toolkit";

export interface counterState {
  value: number;
  page: "Home" | "About us" | "Services";
}

const initialState: counterState = {
  value: 0,
  page: "Home",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increasement: state =>{
        state.value += 1
    },
    decreasement: state =>{
        state.value -= 1
    }
  }
});

export const{increasement, decreasement} = counterSlice.actions
export default counterSlice.reducer
