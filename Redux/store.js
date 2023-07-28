import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/Auth/userSlice'
import adminReducer from "./features/Auth/adminSlice"
import { getCoursesApi } from './Services/courses'

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    [getCoursesApi.reducerPath]: getCoursesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(getCoursesApi.middleware),
})