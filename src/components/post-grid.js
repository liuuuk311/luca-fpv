import React from "react"
import { Link } from "gatsby" ;
import { GatsbyImage } from "gatsby-plugin-image"
import Tags from "../components/tags"

export const PostCard = ({ post }) => {
    return (
        <Link to="/"> 
            <article className="dark:bg-gray-800 rounded-lg border shadow-md pb-4">
                {post.frontmatter.featuredImage ? (
                    <GatsbyImage
                        image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                        alt={post.frontmatter.title + " - Featured image"}
                        className="h-48 md:h-64 w-full object-cover rounded-t-lg"
                    />

                ) : (
                    ""
                )}
                <div className="p-4">
                    <h4 className="font-semibold text-xl md:h-14">
                        {post.frontmatter.title}
                    </h4>
                    <p className="text-base text-gray-600 md:h-24">
                        {post.excerpt}
                    </p>
                    <Tags tags={post.frontmatter.tags} />
                </div>
            </article>
         </Link>
    )
}

const PostGrid = ({ title, posts, cta_link, cta_label }) => {
  if (posts.length === 0) return ""

  return (
    <section className="my-6 mb-24">
      <h2 className="font-bold text-4xl text-left">{title}</h2>

      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-4 md:my-8">
        {posts.map(post => <PostCard post={post.node} />)}
      </div>
      {cta_link && cta_label &&
      <div className="flex flex-row justify-end">
        <Link
          className="bg-sky-700 text-white rounded-lg p-4 text-base uppercase font-semibold hover:bg-sky-600"
          to={cta_link}>
          {cta_label}
        </Link>
      </div>
      }
    </section>
  )
}


export default PostGrid

