import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/order" }),
  tagTypes: ["Orders", "AllOrders"],
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
    }),
    getAllOrders: builder.query({
      query: () => `/getAllOrders`,
      providesTags: ["AllOrders"]
    }),
    updateOrderStatus: builder.mutation({
      query: (data) => ({
        url: "/updateOrderStatus",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["AllOrders"]
    })
  })
})

export const { useAddOrderMutation, useGetMyCoursesQuery, useGetAllOrdersQuery, useUpdateOrderStatusMutation } = orderApi