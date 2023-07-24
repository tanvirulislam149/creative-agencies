import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  admin: null
}

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getAdmin: (state, action) => {
      state.admin = action.payload;
    }
  }
})

export const { getAdmin } = adminSlice.actions;
export default adminSlice.reducer;