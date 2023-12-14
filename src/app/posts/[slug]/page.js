import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation";


//generar páginas dinámicas al momento de la compilación `npm run build`
export const generateStaticParams = () => {
    return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export async function generateMetadata({ params }) {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
    return {
        title: post?.title,
        description: post?.description,
    };
}

export default function PostLayout({ params }) {

    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
    let MDXContent

    if (!post) {
        return (
            notFound()
        )
    } else {
        MDXContent = useMDXComponent(post.body.code)
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <time className="text-center ">
                {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </time>
            <MDXContent />
        </div>
    )
}