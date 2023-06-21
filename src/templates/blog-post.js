import { FPVfinderBanner, Support, SupportAfterArticle } from "../components/marketing/banners";
import { Link, graphql } from "gatsby"

import AdSense from 'react-adsense';
import AffiliateLink from "../components/blog/affiliate-link"
import Author from "../components/author"
import Categories from "../components/categories"
import { FPVfinderAds } from "../components/marketing/ads";
import { Layout } from "../components/layout";
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import NewsletterCard from "../components/marketing/newsletter";
import OutsideLink from "../components/blog/outside-link"
import React from "react"
import ReadNext from "../components/read-next"
import Seo from "../components/seo"
import Share from "../components/share"
import Tags from "../components/tags"
import YouTubeEmbed from "../components/blog/youtube-embed"

const Post = ( {data} ) => {
  const { post, recommendations, me } = data
  const { frontmatter, body } = post

  const img = me
        ? me.edges[0].node.childImageSharp.gatsbyImageData
        : "";

  const shortcodes = { OutsideLink, YouTubeEmbed, AffiliateLink, Link, Support, FPVfinderBanner }

  return (
    <Layout>
      <div className="flex flex-row">    
          <article className="blog-post md:w-4/6">
            <header className="my-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{frontmatter.title}</h1>
              <Tags tags={frontmatter.tags}/>
            </header>
            <div className="my-8 mb-0 leading-loose text-xl">
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
            </div>
            <div class="flex-grow border-t border-gray-200 dark:border-gray-600 my-3"></div>
            <Categories categories={frontmatter.categories} />
            <SupportAfterArticle />
          </article>
        <div className="hidden md:flex flex-col pl-8 justify-start md:w-2/6">
          <div className="mb-4">
              <Author image={img} />
          </div>
          <div className="my-8 h-72 w-full">
            <NewsletterCard />
          </div>
          <Share />
          <div className="sticky top-72 my-8">
            <FPVfinderAds />
            <AdSense.Google
                client='ca-pub-4566556883137005'
                slot='2806584328'
                style={{ display: 'block' }}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
            <AdSense.Google
                client='ca-pub-4566556883137005'
                slot='5109167274'
                style={{ display: 'block' }}
                format='fluid'
            />
          </div>
        </div>
      </div>
      <div className="md:w-4/6 flex flex-col gap-4">
        <ReadNext posts={recommendations.edges} currentTags={frontmatter.tags} currentCategories={frontmatter.categories} />
        <Author image={img} extraCssClasses={"md:hidden"} />
        <NewsletterCard extraCssClasses={"md:hidden"} />
      </div>
    </Layout>
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
  me: allFile(filter: {relativePath: {eq: "me.jpg"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(height: 650, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  }
}
`
