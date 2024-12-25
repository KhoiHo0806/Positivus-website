import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface pageState {
  [page: string]: number;
}

export interface counterState {
  pageCount: pageState;
  currentPage: string;
}

const initialState: counterState = {
  pageCount: {
    Home: 0,
    "About us": 0,
    Services: 0,
  },
  currentPage: "Home",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increasement: (state, action: PayloadAction<string>) => {
      const page = action.payload;
      state.pageCount[page] += 1;
      state.currentPage = page;
    },
  },
});

export const { increasement } = counterSlice.actions;
export default counterSlice.reducer;
