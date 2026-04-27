import { createSlice } from "@reduxjs/toolkit";

let currPage = createSlice({
  name: "currPage",
  initialState: "home",
  reducers: {
    setCurrPage: (state, action) => {
      return action.payload;
    },
  },
});
export default currPage.reducer;
export let currPageActions = currPage.actions;
