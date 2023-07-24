import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: (state, action) => {
      state.user = null
    }
  }
})

export const { getUser, removeUser } = userSlice.actions
export default userSlice.reducer