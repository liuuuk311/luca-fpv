import React from "react"
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Tags from "../components/tags"

export const PostCard = ({ post }) => {
    return (
        <Link to={post.fields.slug}>
            <article className="rounded-lg border dark:border-gray-800 shadow-md flex flex-col md:flex-row pb-2 md:p-5 my-2">
                {post.frontmatter.featuredImage ? (
                    <GatsbyImage
                        image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                        alt={post.frontmatter.title + " - Featured image"}
                        className="w-full h-64 object-cover rounded-lg"
                    />

                ) : (
                    ""
                )}
                <div className="px-5">
                    <h4 className="font-semibold text-2xl my-2">
                        {post.frontmatter.title}
                    </h4>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                    </p>
                    <Tags tags={post.frontmatter.tags} />
                </div>
            </article>
         </Link>
    )
}

const PostList = ({ title, posts, titleCss }) => {
  return (
    <section className="my-6 mb-24">
      <h1 className={`font-bold text-4xl text-left ${titleCss ? titleCss : ""}`}>{title}</h1>

      <div className="flex flex-col my-4 md:my-8">
        {posts && posts.map(post => <PostCard post={post.node} />)}
      </div>
    </section>
  )
}


export default PostList

