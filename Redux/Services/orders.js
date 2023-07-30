import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/order" }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getMyCourses: builder.query({
      query: (data) => `/getMyCourses?email=${data}`,
      providesTags: ['Orders'],
    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/addOrder",
        method: "POST",
        body: data
      }),
      invalidatesTags: ['Orders'],
    })
  })
})

export const { useAddOrderMutation, useGetMyCoursesQuery } = orderApi