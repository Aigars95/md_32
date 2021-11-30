import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type JokesCategoriesType = {
  'error': boolean,
  'categories': string[],
}

type JokesByCategoryType = {
  'error': boolean;
  'message': string;
  'jokes': jokeType[];
}
type jokeType = {
  error: boolean;
  'category': string,
  'type': string,
  'joke': string,
  'flags': {
    'nsfw': boolean,
    'religious': boolean,
    'political': boolean,
    'racist': boolean,
    'sexist': boolean,
    'explicit': boolean
  },
  'id': number,
  'safe': boolean,
  'lang': string
}

// Define a service using a base URL and expected endpoints
export const jokesApi = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/' }),
  endpoints: (builder) => ({
    getJokesCategories: builder.query<JokesCategoriesType, undefined >({
      query: () => '/categories',
    }),
    getJokesByCategories: builder.query<JokesByCategoryType, string | undefined >({
      query: (category) => `/joke/${category}?type=single&amount=10`,
    }),
    getJokeByID: builder.query<jokeType, string | undefined >({
      query: (id) => `/joke/Any?type=single&idRange=${id}`,
    }),
  }),
});

export const { reducer } = jokesApi;
// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetJokesCategoriesQuery, useGetJokesByCategoriesQuery, useGetJokeByIDQuery } = jokesApi;
