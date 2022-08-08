const {
  CreateMarkdownPages,
  CreateBlogListPage,
  CreateBlogCategoryListPage,
  CreateBlogTagListPage,
  dedupeTags,
  dedupeCategories,
} = require("./src/utils/build");

export const createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      posts: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              slug
              title
              categories
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors); // eslint-disable-line no-console
    throw result.errors;
  }

  // Create Posts
  const posts = result.data.posts.edges;
  CreateMarkdownPages({ actions, posts });


  // Create Blog List
  const postsPerPage = 10;
  const allPosts = {
    numPages: Math.ceil(posts.length / postsPerPage),
  };
  CreateBlogListPage({ ...allPosts, postsPerPage, actions });


  // Create Categories List
  dedupeCategories(posts).forEach(({occurrences, category}, _) => {
    CreateBlogCategoryListPage({category, occurrences, postsPerPage, actions})
  });

  // Create Tags List
  dedupeTags(posts).forEach(({occurrences, tag}, _) => {
    CreateBlogTagListPage({tag, occurrences, postsPerPage, actions})
  });
};


export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.slug,
    });
  }
};
