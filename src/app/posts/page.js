import { allPosts } from "contentlayer/generated"
import Link from "next/link";

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

export default function Posts() {
    return (
        <div>
            <h1 className="text-center my-4 text-3xl">Posts</h1>
            <div className="grid gap-4">
                {posts.map((post) => (
                    <article key={post._id}>
                        <h2>
                            <Link href={post.url}>{post.title}</Link>
                        </h2>
                        <time>
                            {new Date(post.date).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}
                        </time>
                    </article>
                ))}
            </div>
        </div>
    )
}