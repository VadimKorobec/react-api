import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    deleteProducts: builder.mutation({
      query: id => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useDeleteProductsMutation } = productsApi;
