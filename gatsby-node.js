const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem');
const { createPrinterNode } = require('gatsby-plugin-printer');
const kebabCase = require(`lodash.kebabcase`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post/index.js')
    const blogCategory = path.resolve(`./src/templates/blog-category/index.js`)
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    category
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;
        const categories = []
        
        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;
          post.node.frontmatter.category.forEach(cat => categories.push(cat))

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        const countCategories = categories.reduce((prev, curr) => {
          prev[curr] = (prev[curr] || 0) + 1
          return prev
        }, {})

        const allCategories = Object.keys(countCategories)
        const postsPerPage = 10
        allCategories.forEach((cat, i) => {
          const link = `/${kebabCase(cat)}`

          Array.from({
            length: Math.ceil(countCategories[cat] / postsPerPage),
          }).forEach((_, i) => {
            createPage({
              path: i === 0 ? link : `${link}/page/${i + 1}`,
              component: blogCategory,
              context: {
                allCategories: allCategories,
                category: cat,
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage: i + 1,
                numPages: Math.ceil(countCategories[cat] / postsPerPage),
              },
            })
          })
        })
      })
    )
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  // For now, generate images only locally


  // Custom OG Image Code
  // See: https://lannonbr.com/blog/2019-11-10-og-images/
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.includes('/blog/')
  ) {
    // get the folder name (ex: /blog/2019-11-04-github-actions-changelog-workflow/index.md -> 2019-11-04-github-actions-changelog-workflow)
    let filePathSplit = node.fileAbsolutePath.split('/')
    let fileName = filePathSplit[filePathSplit.length - 2]
    console.log('Generate OG Image for ' + "fileName");
    createPrinterNode({
      id: node.id,
      fileName, // the filename of the image to be generated
      outputDir: 'og-images/blog', // relative to the 'public' folder.
      data: {
        // The data you wish to pass down to the react component to be rendered
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
      component: require.resolve('./src/components/Global/OpenGraphImage'), // the react component to be used.
    })
    // create a field to be then used later on for usage
    actions.createNodeField({
      node,
      name: 'ogFileName',
      value: fileName,
    })
  }
}