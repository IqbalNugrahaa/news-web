import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, BASE_URL_API } from "../../constant";
import type { NewsResponseBody } from "../../types/newsTypes";

export const newsApi = createApi({
    reducerPath: "newsApi",
    tagTypes: ["News"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_API,
    }),
    endpoints: (builder) => ({
        getNewsEverything: builder.query<NewsResponseBody.NewsResponse, { query: string, page: number, pageSize: number, startDate: string, endDate: string }>({
            query: ({ query, page, pageSize, startDate, endDate }) => ({
                url: `/everything?domains=${query}&from=${startDate}&to=${endDate}&sortBy=popularity&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`,
                method: "GET",
            }),
            transformResponse: (response: NewsResponseBody.NewsResponse) => response,
            providesTags: ["News"],
        }),
        getNewsTopHeadline: builder.query<NewsResponseBody.NewsResponse, { page: number, pageSize: number }>({
            query: ({ page, pageSize }) => ({
                url: `/top-headlines?country=us&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`,
                method: "GET",
            }),
            transformResponse: (response: NewsResponseBody.NewsResponse) => response,
            providesTags: ["News"],
        }),
    })
})