import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "./posts/postsApi";
import postsFilters from "./posts/postsFilters";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postsFilters.name]: postsFilters.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
