import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/reviews" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => `/getReviews`,
      providesTags: ['Reviews'],
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: "/addReview",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Reviews"]
    })
  })
})

export const { useAddReviewMutation, useGetReviewsQuery } = reviewsApi