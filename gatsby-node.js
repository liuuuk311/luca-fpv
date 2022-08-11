const { createFilePath } = require(`gatsby-source-filesystem`)

const requireEsm = require('esm')(module)

module.exports = {
  ...requireEsm('./gatsby-node.esm.js'),

  onCreateNode: ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
}