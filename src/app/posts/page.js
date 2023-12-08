import PostsList from "@/components/PostsList";
import { allPosts } from "contentlayer/generated"

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length
const postsPerPage = 2
const totalPage = Math.ceil(totalPosts / postsPerPage)
console.log(totalPage)

export default function Posts() {
    return (
        <div>
            <h1 className="text-center my-4 text-3xl">Posts</h1>
            <div className="grid gap-4">
                <PostsList posts={posts} />
            </div>
        </div>
    )
}