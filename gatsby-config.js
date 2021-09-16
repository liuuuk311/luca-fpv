module.exports = {
  siteMetadata: {
    title: 'Luca FPV - Vola in prima persona',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
              quality: 75,
              backgroundColor: "transparent",
            }
          },
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,  
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
            filter: {frontmatter: {draft: {ne: true}}}
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
    `gatsby-plugin-minify`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-55771620-2", // Google Analytics / GA
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-preact`,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-offline`,
  ],
}
