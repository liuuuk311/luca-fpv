import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import PostList from "../components/post-list"
import NewsletterBlock from "../components/marketing/newsletter"
import Pagination from "../components/pagination"
import TelegramBlock from "../components/marketing/telegram"

const BlogList = ({ data, pageContext }) => {

    const { currentPage, numPages } = pageContext
    return (
        <>
            <Seo/>
            <div className="flex flex-row">
                <section className="md:w-4/6 ">
                    <PostList
                        title={"Articoli Recenti"}
                        posts={data.recent_posts.edges}
                    />
                    <Pagination currentPage={currentPage} numPages={numPages} />
                </section>
                <div className="hidden md:flex flex-col pl-8 w-2/6 py-24">
                    <TelegramBlock />
                    <NewsletterBlock />
                </div>
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
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`