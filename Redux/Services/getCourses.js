import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getCoursesApi = createApi({
  reducerPath: "getCourses",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/course" }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/getCourses",
    })
  })
})

export const { useGetCoursesQuery } = getCoursesApi;