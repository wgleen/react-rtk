import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsApi } from "../infrastructure/posts/postsApi";
import { PostsFilters, setPage } from "../infrastructure/posts/postsFilters";
import { Posts } from "../types";

export type UseGetPostsQuery = (params: { page?: number; limit?: number }) => {
  page: number;
  setNext: () => void;
  setPrev: () => void;
  limit: number;
  isLoading: boolean;
  isError: boolean;
  data: Posts | undefined;
};

export const useGetPostsQuery: UseGetPostsQuery = () => {
  const dispatch = useDispatch();
  const { page, limit } = useSelector<
    { postsFilters: PostsFilters },
    PostsFilters
  >(({ postsFilters }) => postsFilters);

  const setNext = useCallback(
    () => dispatch(setPage(page + 1)),
    [page, dispatch]
  );

  const setPrev = useCallback(
    () => dispatch(setPage(page - 1)),
    [page, dispatch]
  );

  const { isLoading, isError, data } = postsApi.useGetPostsQuery({
    page,
    limit,
  });

  return {
    page,
    setNext,
    setPrev,
    limit,
    isLoading,
    isError,
    data,
  };
};

export const { useGetPostByIdQuery, useUpdatePostMutation } = postsApi;
