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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
      __key: "images",
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
          allSitePage(
            filter: {pluginCreator: {nodeAPIs: {in: "createPagesStatefully"}}}
          ) {
            nodes {
              path
            }
          }
          allMdx(
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
        resolvePages: ({ site, allMdx, allSitePage }) => {
          var posts = allMdx.edges
              .map(({ node }) => {
                return {
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  path: node.fields.slug,
                  lastmod: node.frontmatter.date
                };
              });

            var pages = allSitePage.nodes.map(({ path }) => {
              return {
                url: site.siteMetadata.siteUrl + path,
                path: path,
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
              maxWidth: 720,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-minify",
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true,
        ignore: ["/styles/blog-post.css", "/styles/carousel.css", "/styles/modal.css"],
        purgeCSSOptions: {
          safelist: ["ol", "ul", "lite-youtube"],
        },
      },
    },
  ],
}
