import { createSlice } from "@reduxjs/toolkit";
let bookingDetails = createSlice({
  name: "bookingDetails",
  initialState: null,
  reducers: {
    addToDetails: (state, action) => {
      return action.payload;
    },
  },
});

export default bookingDetails.reducer;
export const bookingDetailsActions = bookingDetails.actions;
