import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import PostGrid from "../components/post-grid"
import Pagination from "../components/pagination"
import { Layout } from "../components/layout"

const BlogCategoryList = ({ data, pageContext }) => {

  const { currentPage, numPages, category, categorySlug } = pageContext

  return (
    <Layout>
      <section>
        <PostGrid
          title={category}
          posts={data.recent_posts.edges}
        />
        <Pagination currentPage={currentPage} numPages={numPages} customSlug={categorySlug} />
      </section>
    </Layout>
  )
}

export default BlogCategoryList

export const Head = () => (
  <Seo />
)

export const pageQuery = graphql`
  query BlogCategoryQuery($skip: Int!, $limit: Int!, $categoryRegex: String!) {
    recent_posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: {regex: $categoryRegex} } }
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
          }
        }
      }
    }
  }
`