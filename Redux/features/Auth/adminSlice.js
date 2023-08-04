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
    },
    removeAdmin: (state, action) => {
      state.admin = null
    }
  }
})

export const { getAdmin, removeAdmin } = adminSlice.actions;
export default adminSlice.reducer;