import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/Auth/userSlice'
import adminReducer from "./features/Auth/adminSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})