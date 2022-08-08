import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet';

import Seo from "../components/seo"
import PostGrid from "../components/post-grid"
import AboutMe from "../components/about-me"

const IndexPage = ({data}) => {

  return (
    <>
      <Seo/>
      <Helmet>
        <title>Luca FPV - Vola in prima persona</title>
        <meta name="description" content="Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV."/>
    </Helmet>
      <AboutMe />
      <PostGrid 
        title={"Da non perdere"} 
        posts={data.featured_posts.edges} 
      /> 
      <PostGrid 
        title={"Articoli Recenti"} 
        cta_label={"Leggi tutti gli articoli"} 
        cta_link={"/articoli"}
        posts={data.recent_posts.edges} 
      />
    </>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query HomeQuery {
    featured_posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { featured: {eq: true} } }
      limit: 6
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    recent_posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { featured: {eq: false} } }
      limit: 6
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
