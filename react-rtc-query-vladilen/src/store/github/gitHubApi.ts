import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IGithubServerResponse,
  IGithubUser,
  IUserRepo,
} from '../../models/models';

export const gitHubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    // в дженерике указываем:
    // 1. тип возвращаемых данных
    // 2. строковый параметр на вход
    searchUsers: build.query<IGithubUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: IGithubServerResponse) => response.items,
    }),
    getUserRepos: build.query<IUserRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
    // mutation
    // createUser: build.mutation<any, void>({
    //   query: () => ''
    // })
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = gitHubApi;
