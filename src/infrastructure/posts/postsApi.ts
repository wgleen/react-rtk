import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, PostBody, Posts } from "../../types";

type GetPostParams = {
  limit?: number;
  page?: number;
};

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ["Posts", "Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Posts, GetPostParams>({
      query: ({ limit = 5, page = 1 } = {}) =>
        `posts?_limit=${limit}&_page=${page}`,
      providesTags: ["Posts"],
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
      providesTags: (result) =>
        result ? [{ type: "Post" as const, id: result.id }] : ["Post"],
    }),
    updatePost: builder.mutation<Post, { id: string; body: PostBody }>({
      query: ({ id, body }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: (result, error, arg) =>
        result ? [{ type: "Post", id: arg.id }] : ["Post"],
    }),
  }),
});
