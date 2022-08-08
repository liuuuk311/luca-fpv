import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import PostList from "../components/post-list"
import NewsletterBlock from "../components/marketing/newsletter"
import Pagination from "../components/pagination"
import TelegramBlock from "../components/marketing/telegram"

const BlogCategoryList = ({ data, pageContext }) => {

    const { currentPage, numPages, category, categorySlug } = pageContext

    return (
        <>
            <Seo />
            <div className="flex flex-row">
                <section className="md:w-4/6 ">
                    <PostList
                        title={category}
                        posts={data.recent_posts.edges}
                    />
                    <Pagination currentPage={currentPage} numPages={numPages} customSlug={categorySlug} />
                </section>
                <div className="hidden md:flex flex-col pl-8 w-2/6 py-24">
                    <TelegramBlock />
                    <NewsletterBlock />
                </div>
            </div>
        </>
    )
}

export default BlogCategoryList

export const pageQuery = graphql`
  query BlogCategoryQuery($skip: Int!, $limit: Int!, $categoryRegex: String!, $language: String!) {
    recent_posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: {eq: false}, categories: {regex: $categoryRegex} } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 450
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  )
              }
            }
          }
        }
      }
    }
  }
`