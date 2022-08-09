module.exports = {
  siteMetadata: {
    title: 'Luca FPV',
    tagLine: 'Vola in prima persona',
    author: 'Luca',
    description: 'Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV.',
    siteUrl: 'https://lucafpv.com',
    keywords: ['Drone', 'FPV', 'DJI', 'Mini Quad'],
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        path: `${__dirname}/src/blog`,
        name: 'blog',
      },
    },
    "gatsby-plugin-preact",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require("postcss-import"),
          require("postcss-nested"),
          require("postcss-discard-comments"),
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/404', '/404.html', '/grazie'],
        query: `
        {
          site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage(filter: {isCreatedByStatefulCreatePages: {eq: true}}) {
          edges {
            node {
              path
            }
          }
        }
          allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  date
                }
              }
            }
          }
        }`,
        resolveSiteUrl: ({site}) => site.siteMetadata.siteUrl,
        resolvePagePath: (page) => page.path, 
        resolvePages: ({ site, allMarkdownRemark, allSitePage }) => {
          var posts = allMarkdownRemark.edges
              .map(({ node }) => {
                return {
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  path: node.fields.slug,
                  lastmod: node.frontmatter.date
                };
              });

            var pages = allSitePage.edges.map(({ node }) => {
              return {
                url: site.siteMetadata.siteUrl + node.path,
                path: node.path,
              };
            });
            return posts.concat(pages);
        },
        serialize: (page) => {
          return page.lastmod ? {url: page.url, lastmod: page.lastmod} : {url: page.url}
        }
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-4566556883137005`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luca FPV`,
        short_name: `Luca FPV`,
        description: `Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV.`,
        start_url: `/`,
        lang: `it`,
        background_color: `#ffffff`,
        theme_color: `#eda550`,
        display: `standalone`,
        icon: `./src/assets/propeller.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-6YB9CW1683", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag-outbound`,
      options: {
        trackingId: `G-6YB9CW1683`,
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true,
        ignore: ["/styles/blog-post.css"],
        purgeCSSOptions: {
          safelist: ["ol", "ul", "lite-youtube"],
        },
      },
    },
  ],
}
