import Link from "next/link";

export default function PostItem({ post }) {
  return (
    <>
      <article className="shadow p-4 rounded-md">
        <h2>
          <Link href={post.url}>{post.title}</Link>
        </h2>
        <time className="text-sm text-slate-600 align-content: center">
          {new Date(post.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </article>
    </>
  );
}
