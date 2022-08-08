import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import {
    HomeHero,
    HomePostList,
    Default
} from '../components';

import {
    TopContainer
} from '../components/PageStyles/HomeStyles';

const Homepage = ({ location, data }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Luca FPV - Vola in prima persona</title>
                <meta name="description" content="Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV."/>
            </Helmet>
            <TopContainer>
                <HomeHero/>
                <HomePostList posts={data.allMarkdownRemark.edges}/>
            </TopContainer>
        </Default>
    );
}

export default Homepage;


export const PageQuery = graphql`
query HomeQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {featured: {eq: true}}}, limit: 10) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM YYYY", locale: "it")
          title
          excerpt
          tags
        }
      }
    }
  }
}    
`