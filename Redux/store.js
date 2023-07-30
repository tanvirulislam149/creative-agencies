import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/Auth/userSlice'
import adminReducer from "./features/Auth/adminSlice"
import { getCoursesApi } from './Services/courses'
import { orderApi } from './Services/orders'

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    [getCoursesApi.reducerPath]: getCoursesApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([getCoursesApi.middleware, orderApi.middleware]),
})