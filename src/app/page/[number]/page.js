import PostPagination from "@/components/PostPagination";
import PostsList from "@/components/PostsList";
import { getPostPagination, totalPage } from "@/utils/PaginationUtil"
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
    return Array.from({ length: totalPage }).map((_, index) => ({
        number: `${index + 1}`
    }))
}

export default function LayoutPage({ params }) {

    let arrayCurrentPosts;

    try {
        //expresión regular
        if (!/^\d+$/.test(params.number)) {
            throw new Error("Invalid page number")
        }
        const currentPage = parseInt(params.number)
        arrayCurrentPosts = getPostPagination(currentPage).currentPosts
    } catch (error) {
        notFound()
    }

    return (
        <div>
            <h1 className="text-center my-4 text-3xl">Posts</h1>
            <div className="grid gap-4">
                <PostsList posts={arrayCurrentPosts} />
                <PostPagination totalPage={totalPage} currentPage={parseInt(params.number)} />
            </div>
        </div>
    )
}