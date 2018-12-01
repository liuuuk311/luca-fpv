import React, { Component } from 'react';
import { navigate, Link } from 'gatsby';

import {
  FeaturedPostsMainContainer,
  FeaturedPostsContainer,
  FeaturedPost,
  FeaturedPostTitle,
  FeaturedPostDate,
  FeaturedButtonContainer,
  FeaturedButton
} from './styled'

class FeaturedPosts extends Component {
  render() {
    const { data, fullwidth } = this.props; 
    const posts = data.allMarkdownRemark.edges
    
    return (
      <FeaturedPostsMainContainer>
        <FeaturedPostsContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <FeaturedPost key={node.fields.slug} fullwidth={fullwidth}
                onClick={(() => navigate(node.fields.slug))}>
                {/* <Link style={{ boxShadow: 'none' }} to={node.fields.slug}> */}
                  <FeaturedPostTitle>
                    {title}
                  </FeaturedPostTitle>
                  <FeaturedPostDate>
                    {node.frontmatter.date}
                  </FeaturedPostDate>
                {/* </Link> */}
              </FeaturedPost>
            )
          })}
        </FeaturedPostsContainer>
        {!fullwidth && 
          <FeaturedButtonContainer>
            <Link to="/posts">
              <FeaturedButton>
                See All Posts
              </FeaturedButton>
            </Link>
          </FeaturedButtonContainer>
        }
      </FeaturedPostsMainContainer>
    );
  }
}

export default FeaturedPosts;
