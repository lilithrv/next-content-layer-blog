import PostPagination from "@/components/PostPagination";
import PostsList from "@/components/PostsList";
import { allPosts } from "contentlayer/generated"

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length
const postsPerPage = 2
const totalPage = Math.ceil(totalPosts / postsPerPage)
console.log(totalPage)

export default function LayoutPage({ params }) {

    const currentPage = parseInt(params.number)
    const offset = (currentPage - 1) * postsPerPage
    const currentPosts = posts.slice(offset, offset + postsPerPage)

    return (
        <div>
            <h1 className="text-center my-4 text-3xl">Posts</h1>
            <div className="grid gap-4">
                <PostsList posts={currentPosts} />
                <PostPagination totalPage={totalPage} currentPage={currentPage} />
            </div>
        </div>
    )
}