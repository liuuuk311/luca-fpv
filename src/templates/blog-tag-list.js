import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import PostGrid from "../components/post-grid"
import Pagination from "../components/pagination"
import { Layout } from "../components/layout"

const BlogCategoryList = ({ data, pageContext }) => {

    const { currentPage, numPages, tag, tagSlug } = pageContext

    return (
      <Layout>
          <section>
              <PostGrid
                  title={`#${tag}`}
                  titleCss={"uppercase"}
                  posts={data.recent_posts.edges}
              />
              <Pagination currentPage={currentPage} numPages={numPages} customSlug={tagSlug} />
          </section>
      </Layout>
    )
}

export default BlogCategoryList

export const Head = () => (
  <Seo />
)

export const pageQuery = graphql`
  query BlogTagQuery($skip: Int!, $limit: Int!, $tagRegex: String!) {
    recent_posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: {regex: $tagRegex} } }
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