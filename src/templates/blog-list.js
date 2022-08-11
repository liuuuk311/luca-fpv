import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import PostGrid from "../components/post-grid"
import Pagination from "../components/pagination"

const BlogList = ({ data, pageContext }) => {

    const { currentPage, numPages } = pageContext
    return (
        <>
            <Seo/>
            <div className="flex flex-row">
                <section>
                    <PostGrid
                        title={"Articoli Recenti"}
                        posts={data.recent_posts.edges}
                    />
                    <Pagination currentPage={currentPage} numPages={numPages} />
                </section>
            </div>
        </>
    )
}

export default BlogList

export const pageQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    recent_posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
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