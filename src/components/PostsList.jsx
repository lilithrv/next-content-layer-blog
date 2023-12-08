import PostItem from "./PostItem";

export default function PostsList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}
    </>
  );
}
