import { Link, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { Post, PostBody } from "../../../types";
import { useGetPostByIdQuery, useUpdatePostMutation } from "../../../application/posts";
import { ROUTES } from "../../Routes";

function PostEdit() {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, isError } = useGetPostByIdQuery(id as string); 

  const [updatePost, response] = useUpdatePostMutation();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<PostBody>();

  const onSubmit: SubmitHandler<PostBody> = async (data) => {
    await updatePost({
      id: id as string,
      body: data
    });

    console.log("response", response)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue={post?.title} {...register("title", { required: true })} />
        
        <input type="text" defaultValue={post?.content} {...register("content", { required: true })} />

        <input type="text" defaultValue={post?.author} {...register("author", { required: true })} />
        
        <input type="submit" />
      </form>

      <Link to={`${ROUTES.POSTS_LIST}/${id}`}>Back to Posts List</Link>
    </>
  )
};

export default PostEdit;
