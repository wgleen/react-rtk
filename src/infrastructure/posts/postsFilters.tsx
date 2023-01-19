import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PostsFilters = {
  page: number;
  limit: number;
}

const initialState = {
  page: 1,
  limit: 5,
} as PostsFilters;

const postsFiltersSlice = createSlice({
  name: "postsFilters",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
  },
});

export const { setPage, setLimit } = postsFiltersSlice.actions;
export default postsFiltersSlice;