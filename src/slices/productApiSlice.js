import { apiSlice } from "./apiSlice";

const PRODUCT_URl = "/products";

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //get all products
    getAllProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URl}`,
        method: "GET",
      }),
    }),

    //get one product with id
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URl}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = adminApiSlice;
