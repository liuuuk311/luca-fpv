import { resolve } from "path";
import { slugify } from "./urls";

async function CreateMarkdownPages({ posts, actions }) {
  posts.forEach((post, _) => {
    const id = post.node.id;
    
    if (post.node.frontmatter.title.length > 60) console.warn(`Post ${post.node.fields.slug} title is too long (${post.node.frontmatter.title.length})`)
    if (post.node.frontmatter.excerpt.length > 160) console.warn(`Post ${post.node.fields.slug} description is too long (${post.node.frontmatter.excerpt.length})`)

    const categoryRegex = `/${post.node.frontmatter.categories.join("|")}/i`;
    const tagRegex = `/${post.node.frontmatter.tags.join("|")}/i`;

    actions.createPage({
      path: post.node.fields.slug,
      component: resolve(
        `src/templates/blog-post.js`
      ),

      context: {
        id,
        categoryRegex,
        tagRegex,
      },
    });
  });
}

async function CreateBlogListPage({ numPages, postsPerPage, actions }) {
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/articoli` : `/articoli/${i + 1}`,
      component: resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        skipFeatured: i * 3,
        numPages,
        currentPage: i + 1,
      },
    });
  });
}

async function CreateBlogCategoryListPage({
  category,
  occurrences,
  postsPerPage,
  actions,
}) {
  const numPages = Math.ceil(occurrences / postsPerPage);
  let categoryRegex = `/${category}/i`;
  let categorySlug = slugify(category);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/${categorySlug}` : `/${categorySlug}/${i + 1}`,
      component: resolve("./src/templates/blog-category-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        categoryRegex,
        categorySlug,
        category,
      },
    });
  });
}

async function CreateBlogTagListPage({
  tag,
  occurrences,
  postsPerPage,
  actions,
}) {
  const numPages = Math.ceil(occurrences / postsPerPage);
  let tagRegex = `/${tag}/i`;
  let tagSlug = slugify(tag)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/${tagSlug}` : `/${tagSlug}/${i + 1}`,
      component: resolve("./src/templates/blog-tag-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        tagRegex,
        tagSlug,
        tag,
      },
    });
  });
}

function dedupeCategories(posts) {
  const uniqueCategories = new Map();
  posts.forEach(({ node }) => {
    node.frontmatter.categories.forEach((category) => {

      const category_key = slugify(category);
      const categoryInfo = uniqueCategories.get(category_key) || {
        occurrences: 1,
        category: category
      };
      uniqueCategories.set(category_key, {
        ...categoryInfo,
        occurrences: categoryInfo.occurrences + 1,
      });
    });
  });
  console.log(`Categories: ${Array.from(uniqueCategories.keys())}`)
  return uniqueCategories;
}

function dedupeTags(posts) {
  const uniqueTags = new Map();
  posts.forEach(({ node }) => {
    node.frontmatter.tags.forEach((tag) => {
      const tag_key = slugify(tag);
      const tagInfo = uniqueTags.get(tag_key) || {
        occurrences: 1,
        tag: tag,
      };
      uniqueTags.set(tag_key, { ...tagInfo, occurrences: tagInfo.occurrences + 1 });
    });
  });
  console.log(`Tags: ${Array.from(uniqueTags.keys())}`)
  return uniqueTags;
}

export {
  CreateMarkdownPages,
  CreateBlogListPage,
  CreateBlogCategoryListPage,
  CreateBlogTagListPage,
  dedupeCategories,
  dedupeTags,
};
