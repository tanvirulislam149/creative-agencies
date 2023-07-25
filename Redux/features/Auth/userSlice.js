import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  loading: true
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload
      state.loading = false
    },
    removeUser: (state, action) => {
      state.user = null
      // state.loading = true
    }
  }
})

export const { getUser, removeUser } = userSlice.actions
export default userSlice.reducer