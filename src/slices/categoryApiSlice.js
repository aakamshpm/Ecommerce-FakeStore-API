import { apiSlice } from "./apiSlice";

const CATEGORY_URL = "/categories";

const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get products by clothes category
    getClothProducts: builder.query({
      query: () => ({
        url: `${CATEGORY_URL}/1/products`,
        method: "GET",
      }),
    }),

    // get products by furniture category
    getFurnitureProducts: builder.query({
      query: () => ({
        url: `${CATEGORY_URL}/3/products`,
        method: "GET",
      }),
    }),

    // get products by Electronics category
    getElectronicsProducts: builder.query({
      query: () => ({
        url: `${CATEGORY_URL}/2/products`,
        method: "GET",
      }),
    }),

    // get products by Shoes category
    getShoesProducts: builder.query({
      query: () => ({
        url: `${CATEGORY_URL}/4/products`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetClothProductsQuery,
  useGetFurnitureProductsQuery,
  useGetElectronicsProductsQuery,
  useGetShoesProductsQuery,
} = categoryApiSlice;
