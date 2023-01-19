import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import PostsDetails from "./pages/PostsDetails";
import PostEdit from "./pages/PostsEdit";
import PostsList from "./pages/PostsList";

export const ROUTES = {
  HOME: "/",
  POSTS_LIST: "/posts",
  POSTS_DETAILS: "/posts/:id",
  POSTS_EDIT: "/posts/:id/edit"
}

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.POSTS_LIST,
    element: <PostsList />,
  },
  {
    path: ROUTES.POSTS_DETAILS,
    element: <PostsDetails />
  },
  {
    path: ROUTES.POSTS_EDIT,
    element: <PostEdit />
  }
]);

function Routes() {
  return (
    <RouterProvider router={router} />
  );
};

export default Routes;
