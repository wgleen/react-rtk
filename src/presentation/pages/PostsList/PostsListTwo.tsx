import { NavLink } from "react-router-dom";
import { useGetPostsQuery } from "../../../application/posts";

function PostsListTwo() {
  const { setPrev, setNext, data, isLoading, isError } = useGetPostsQuery({});

  if (isLoading) return (
    <>Loading</>
  );

  if (isError) return (
    <>Something is wrong</>
  )

  return (
    <div>
      <h2>Posts Two</h2>

      {data?.map(post => (
        <div>
          <NavLink key={post.id} to={`/posts/${post.id}`}>{post.title}</NavLink>
        </div>
      ))}

      <div>
        <button onClick={() => setPrev()}>Prev</button>
        <button onClick={() => setNext()}>Next</button>
      </div>
    </div>
  )
};

export default PostsListTwo;
