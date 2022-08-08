import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import PostList from "../components/post-list"
import NewsletterBlock from "../components/marketing/newsletter"
import Pagination from "../components/pagination"
import TelegramBlock from "../components/marketing/telegram"

const BlogCategoryList = ({ data, pageContext }) => {

    const { currentPage, numPages, tag, tagSlug } = pageContext

    return (
        <>
            <Seo />
            <div className="flex flex-row">
                <section className="md:w-4/6 ">
                    <PostList
                        title={`#${tag}`}
                        titleCss={"uppercase"}
                        posts={data.recent_posts.edges}
                    />
                    <Pagination currentPage={currentPage} numPages={numPages} customSlug={tagSlug} />
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
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`