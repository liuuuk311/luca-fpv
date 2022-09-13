import React from "react";
import { PostCard } from "./post-grid";

const ReadNext = ({ posts, currentTags, currentCategories }) => {

  const recommendations = getRecommendations({
    posts,
    currentTags,
    currentCategories,
  });

  if (recommendations.length === 0) return <div></div>

  return (
    <div className="my-8">
      <h3 className="text-3xl font-bold mb-4 dark:text-gray-200">
        Articoli simili
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recommendations.map((el) => (
          <PostCard post={el.node} />
        ))}
      </div>
    </div>
  );
};

export default ReadNext;

const getRecommendations = ({ posts, currentTags, currentCategories }) => {
  const MIN_SUGGESTIONS = 2;

  const getRandomElements = (array, n) => array.sort(() => 0.5 - Math.random()).slice(0, n);
  const arraysInteresct = (a, b) => a.map((el) => b.includes(el)).some((x) => x === true)
  const postWithTheSameTags = (aPost) => arraysInteresct(aPost.node.frontmatter.tags, currentTags);
  const postWithTheSameCategories = (aPost) => arraysInteresct(aPost.node.frontmatter.categories, currentCategories);

  const postsWithSameTags = posts.filter(postWithTheSameTags)
  
  const bestSuggestions = getRandomElements(postsWithSameTags.filter(postWithTheSameCategories), MIN_SUGGESTIONS)
  
  if (bestSuggestions.length < MIN_SUGGESTIONS) {
    let otherSuggestions = getRandomElements(postsWithSameTags, MIN_SUGGESTIONS - bestSuggestions.length - 1);
    if (otherSuggestions.length > 0)
      return [...bestSuggestions, ...otherSuggestions]

    const postsWithSameCategories = posts.filter(postWithTheSameTags)
    otherSuggestions = getRandomElements(postsWithSameCategories, MIN_SUGGESTIONS - bestSuggestions.length - 1)

    if (otherSuggestions.length > 0)
      return [...bestSuggestions, ...otherSuggestions]

    return bestSuggestions
  }
  
  return bestSuggestions
};
