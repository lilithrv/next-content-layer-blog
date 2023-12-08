import PostPagination from "@/components/PostPagination";
import PostsList from "@/components/PostsList";
import { getPostPagination, totalPage } from "@/utils/PaginationUtil"

export default function LayoutPage({ params }) {

    const currentPage = parseInt(params.number)
    const { currentPosts } = getPostPagination(currentPage)

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