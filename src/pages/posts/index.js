import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import FeaturedPosts from '../../components/FeaturedPosts';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

import {
  MainContainer,
  ContentContainer,
  ContentTitleContainer,
  ContentTitle
} from '../../components/BlogPostStyles';

class AllPosts extends Component {
  render() {
    const { data } = this.props; 
    return (
      <MainContainer>
        <Helmet 
          title="Posts | Kyle McDonald"
        >
          <meta charset="UTF-8" />
          <meta name="description" content="Kyle McDonald's Personal Site" />
          <meta name="keywords" content="Maker, HTML, Developer, Engineer" />
          <meta name="author" content="Kyle McDonald" />
          <style>{`body { margin: 0 !important }`}</style>
        </Helmet>
        <Logo />
        <ContentTitleContainer>
          <ContentTitle>
            Read all of my posts and thoughts
            </ContentTitle>
        </ContentTitleContainer>
        <ContentContainer>
          <FeaturedPosts data={data} fullwidth={true}/>
        </ContentContainer>
        <Footer/>
      </MainContainer>
    );
  }
}

export default AllPosts;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC, }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
