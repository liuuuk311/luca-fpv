import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "../components/seo"
import ReadNext from "../components/read-next"
import Share from "../components/share"
import Categories from "../components/categories"
import Tags from "../components/tags"


const Post = ( {data} ) => {
  const { post, recommendations } = data
  const { frontmatter, body, excerpt } = post

  // const Image = frontmatter.featuredImage
  //   ? frontmatter.featuredImage.publicURL
  //   : ""

  return (
    <>
      <Seo
        title={frontmatter.title}
        description={frontmatter.excerpt ? frontmatter.excerpt : excerpt}
        image={undefined}
        isArticle={true}
      />
      <div className="flex flex-row">
          
          <article className="blog-post md:w-4/6">
            <header className="my-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{frontmatter.title}</h1>
              <Tags tags={frontmatter.tags}/>
            </header>
            <div className="my-8 mb-0 leading-loose text-xl">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
            <div class="flex-grow border-t border-gray-200 dark:border-gray-600 mb-2"></div>
            <Categories categories={frontmatter.categories} />
          </article>
        <div className="hidden md:flex flex-col pl-8 justify-start">
          <Share image={Image}/>
        </div>
      </div>
      <div className="w-full">
        <ReadNext posts={recommendations.edges} currentTags={frontmatter.tags} currentCategories={frontmatter.categories} />
      </div>
      
    </>
  )
}


export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    post: mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 150)
      frontmatter {
        title
        excerpt
        categories
        tags
      }
    }
  recommendations: allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: { id: {ne: $id} }
  )
  {
    edges {
      node {
        excerpt(pruneLength: 150)
        fields {
          slug
        }
        frontmatter {
          title
          tags
          categories
        }
      }
    }
  }
}
`
