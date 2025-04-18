import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_SERVER_URL,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Ecommerce"],
  endpoints: (builder) => ({}),
});
