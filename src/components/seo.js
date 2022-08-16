import React from "react"

import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, image, isArticle }) => {
  const { pathname } = useLocation()
  const { site, defaultImage } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage.edges[0].node.publicURL}`,
    url: `${siteUrl}${pathname}`,
  }


  return (
    <>
      <html lang={"it"} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {seo.url && <meta property="og:url" content={seo.url} />}

      {(isArticle ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </>
  )
}

export default Seo



const query = graphql`
query SEO {
    site {
        siteMetadata {
            defaultTitle: title
            siteUrl: siteUrl
            defaultDescription: description
        }
    }
    defaultImage: allFile(filter: {relativePath: {eq: "default_image.png"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
}
`
