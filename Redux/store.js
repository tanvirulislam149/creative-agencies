import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/Auth/userSlice'
import adminReducer from "./features/Auth/adminSlice"
import { getCoursesApi } from './Services/courses'
import { orderApi } from './Services/orders'
import { reviewsApi } from './Services/Review'

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    [getCoursesApi.reducerPath]: getCoursesApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([getCoursesApi.middleware, orderApi.middleware, reviewsApi.middleware])
})