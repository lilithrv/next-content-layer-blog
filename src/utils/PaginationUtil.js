import { allPosts } from "contentlayer/generated"

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length
const postsPerPage = 2
export const totalPage = Math.ceil(totalPosts / postsPerPage)

export const getPostPagination = (currentPage = 1) => {

    if (currentPage > totalPage) {
        throw new Error(`Page${currentPage} does not exist`)
    }

    const offset = (currentPage - 1) * postsPerPage
    const currentPosts = posts.slice(offset, offset + postsPerPage)

    return {
        currentPosts
    }
}