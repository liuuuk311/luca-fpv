import { graphql, Link } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'
import AdSense from 'react-adsense';


import Seo from "../components/seo"
import ReadNext from "../components/read-next"
import Share from "../components/share"
import Categories from "../components/categories"
import Tags from "../components/tags"

import YouTubeEmbed from "../components/blog/youtube-embed"
import AffiliateLink from "../components/blog/affiliate-link"
import OutsideLink from "../components/blog/outside-link"


const Post = ( {data} ) => {
  const { post, recommendations } = data
  const { frontmatter, body } = post

  const shortcodes = { OutsideLink, YouTubeEmbed, AffiliateLink, Link }

  return (
    <>
      <div className="flex flex-row">    
          <article className="blog-post md:w-4/6">
            <header className="my-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{frontmatter.title}</h1>
              {/* <Tags tags={frontmatter.tags}/> */}
            </header>
            <div className="my-8 mb-0 leading-loose text-xl">
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
            </div>
            <div class="flex-grow border-t border-gray-200 dark:border-gray-600 mb-2"></div>
            <Categories categories={frontmatter.categories} />
          </article>
        <div className="hidden md:flex flex-col pl-8 justify-start md:w-2/6">
          <div className="mb-8 h-96">
            <AdSense.Google
                client='ca-pub-4566556883137005'
                slot='2806584328'
                style={{ display: 'block' }}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
          </div>
          <div className="my-8 h-96 w-full">
            <AdSense.Google
                client='ca-pub-4566556883137005'
                slot='5109167274'
                style={{ display: 'block' }}
                format='fluid'
            />
          </div>
          <Share />
          <div className="sticky top-64 my-8"></div>
        </div>
      </div>
      <div className="w-full">
        <ReadNext posts={recommendations.edges} currentTags={frontmatter.tags} currentCategories={frontmatter.categories} />
      </div>
    </>
  )
}


export default Post

export const Head = ({data}) => (
  <Seo
    title={data.post.frontmatter.title}
    description={data.post.frontmatter.excerpt}
    image={undefined}
    isArticle={true}
  />
)

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
