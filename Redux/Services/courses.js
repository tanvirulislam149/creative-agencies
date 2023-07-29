import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getCoursesApi = createApi({
  reducerPath: "getCourses",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/course" }),
  tagTypes: ["Course"],
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/getCourses",
      providesTags: ['Course'],
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/addCourse",
        method: "POST",
        body: data
      }),
      invalidatesTags: ['Course'],
    })
  })
})

export const { useGetCoursesQuery, useAddCourseMutation } = getCoursesApi;