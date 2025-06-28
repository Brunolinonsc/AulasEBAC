import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'SUA_URL_DA_API' }), // Substitua pela URL base da sua API
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => 'produtos', // Exemplo de endpoint, ajuste conforme sua API
    }),
    getProdutoById: builder.query({
      query: (id) => `produtos/${id}`, // Exemplo de endpoint
    }),
    // Adicione outros endpoints conforme necessário
  }),
});

export const { useGetProdutosQuery, useGetProdutoByIdQuery } = api;
