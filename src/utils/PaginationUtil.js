import { allPosts } from "contentlayer/generated"

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length
const postsPerPage = 2
export const totalPage = Math.ceil(totalPosts / postsPerPage)

export const getPostPagination = (currentPage = 1) => {
    const offset = (currentPage - 1) * postsPerPage
    const currentPosts = posts.slice(offset, offset + postsPerPage)

    return {
        currentPosts
    }
}