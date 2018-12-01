import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Bio from '../../components/Bio'
import Layout from '../../components/Layout'
import { rhythm, scale } from '../../utils/typography'

import Logo  from '../../components/Logo';

import {
  ImageContainer,
  BlogContainer,
  BlogDateContainer,
  BlogDate,
  BlogTitle, 
  BlogAuthor,
  BlogContent
} from './styled';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Logo/>
        <ImageContainer image={post.frontmatter.bg}/>
        <BlogContainer>
          <BlogDateContainer>
            <BlogDate>
              {post.frontmatter.date}
            </BlogDate>
          </BlogDateContainer>
          <BlogTitle>
            {post.frontmatter.title}
          </BlogTitle>
          <BlogAuthor>
            {this.props.data.site.siteMetadata.author}
          </BlogAuthor>
          <BlogContent  dangerouslySetInnerHTML={{ __html: post.html }} /> 

          
        </BlogContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        bg
      }
    }
  }
`
