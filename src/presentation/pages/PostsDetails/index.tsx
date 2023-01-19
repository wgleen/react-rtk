import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../../application/useGetPostById";
import { ROUTES } from "../../Routes";

function PostsDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetPostByIdQuery(id as string);

  if (isLoading) return (
    <>Loading</>
  );

  if (isError) return (
    <>Something is wrong</>
  )

  return (
    <>
      <h1>Posts Details</h1>

      <h2>{data?.title}</h2>

      <p>{data?.content}</p>

      <Link to={`${ROUTES.POSTS_LIST}/${id}/edit`}>Edit post</Link>

      <Link to={ROUTES.POSTS_LIST}>Back to Posts List</Link>
    </>
  )
};

export default PostsDetails;
