import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby';

// Component Import
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import About from '../components/About';
import FeaturedPosts from '../components/FeaturedPosts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { 
  mobileHeroHeight, 
  desktopHeroHeight,
  mediumBp
} from '../utils/variables';

import { navy } from '../utils/colors';

const Content = styled.div`
  animation: flyin 0.8s;
  margin-top: ${mobileHeroHeight};
  z-index: 10;

  @media(min-width: ${mediumBp}){
    margin-top: ${desktopHeroHeight};
  }

  @keyframes flyin {
    0% {
      transform: translateY(1000px)
    }

    70% {
      transform: translateY(-15px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const MainContainer = styled.div`
  font-family: Arial !important; 
  background-color: #032C57;
`

class HomePage extends Component {
  render() {
    const { data } = this.props; 
    return (
      <MainContainer>
        <Helmet 
          title="Kyle McDonald"
        >
        <style>{`body { background-color: ${navy}; }`}</style>
        </Helmet>
        <Hero/>
        <Content>
          <Featured/>
          <About/>
          <FeaturedPosts data={data}/>
          <Contact/>
          <Footer/>
        </Content>
      </MainContainer>
    );
  }
}

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC, }, limit: 4) {
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
