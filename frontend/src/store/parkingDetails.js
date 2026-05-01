import { createSlice } from "@reduxjs/toolkit";
let parkingDetails = createSlice({
  name: "parkingDetails",
  initialState: null,
  reducers: {
    addToDetails: (state, action) => {
      return action.payload;
    },
  },
});

export default parkingDetails.reducer;
export const parkingDetailsActions = parkingDetails.actions;
