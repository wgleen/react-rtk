import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
import PostsListOne from "./PostsListOne";
import PostsListTwo from "./PostsListTwo";

function PostsList() {
  
  return (
    <>
      <h1>Posts list</h1>

      <PostsListOne />

      <PostsListTwo />

      <div>
       <Link to={ROUTES.HOME}>Go to Home</Link>
      </div>
    </>
  )
};

export default PostsList;
