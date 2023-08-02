import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/reviews" }),
  tagTypes: ["", ""],
  endpoints: (builder) => ({
    // getMyCourses: builder.query({
    //   query: (data) => `/getMyCourses?email=${data}`,
    // }),
    addReview: builder.mutation({
      query: (data) => ({
        url: "/addReview",
        method: "POST",
        body: data
      }),
    })
  })
})

export const { useAddReviewMutation } = reviewsApi