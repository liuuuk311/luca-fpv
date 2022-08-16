import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import PostGrid from "../components/post-grid"
import { Hero } from "../components/landing/hero"

const IndexPage = ({data}) => {
  const img = data.me
  ? data.me.edges[0].node.childImageSharp.gatsbyImageData
  : "";

  return (
    <>
      <Hero 
        title="Ciao, benvenuto nel mio blog!"
        paragraphs={[
          "Mi chiamo Luca e sono un appassionato di droni FPV. Questa passione mi ha portato anche a creare la prima community italiana di FPV chiamata NorthFPV.",
          "Lo scopo di questo blog è aiutare principalmente chi inizia ad usare droni FPV. Nel corso degli anni ho potuto aiutare diverse migliaia di persone, facendole diventare piloti migliori.",
        ]}
        extraCssClasses="px-0 sm:px-0"
        image={img}
        altText="Foto di @iamlucafpv"
      />
      <PostGrid 
        title={"Per chi inizia"} 
        posts={data.starting_posts.edges} 
      /> 
      <PostGrid 
        title={"Articoli Recenti"} 
        cta_label={"Tutti gli articoli"} 
        cta_link={"/articoli"}
        posts={data.recent_posts.edges} 
      />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <Seo 
    title="Luca FPV - Vola in prima persona" 
    description="Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV."
  />
)

export const pageQuery = graphql`
  query HomeQuery {
    me: allFile(filter: {relativePath: {eq: "me.jpg"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(height: 650, placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    }
    starting_posts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { featured: {eq: true}, categories: {in: "Principianti"} } }
      limit: 3
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
