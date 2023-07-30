import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/order" }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    // getCourses: builder.query({
    //   query: () => "/getCourses",
    //   providesTags: ['Course'],
    // }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/addOrder",
        method: "POST",
        body: data
      }),
      // invalidatesTags: ['Course'],
    })
  })
})

export const { useAddOrderMutation } = orderApi