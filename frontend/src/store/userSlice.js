import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "userSlice",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
