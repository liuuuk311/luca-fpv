const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem');
const { createPrinterNode } = require('gatsby-plugin-printer')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post/index.js')
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

        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

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
  // Custom OG Image Code
  // See: https://lannonbr.com/blog/2019-11-10-og-images/
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.includes('/posts/')
    ) {
    // get the folder name (ex: /blog/2019-11-04-github-actions-changelog-workflow/index.md -> 2019-11-04-github-actions-changelog-workflow)
    let filePathSplit = node.fileAbsolutePath.split('/')
    let fileName = filePathSplit[filePathSplit.length - 2]
    console.log('Generate OG Image for ' + fileName);
    createPrinterNode({
      id: node.id,
      fileName, // the filename of the image to be generated
      outputDir: 'og-images/blog', // relative to the 'public' folder.
      data: {
        // The data you wish to pass down to the react component to be rendered
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        readTime: node.fields.readingTime.text
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