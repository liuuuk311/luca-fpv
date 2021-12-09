import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import {
    Container,
    PostList,
    PostListItem,
    Date,
    Heading,
    Preview
} from './styled';

const RecommendedArticles = props => {

    const { slug } = props;

    const [ firstRecommended, setFirstRecommended ] = useState(null);
    const [ secondRecommended, setSecondRecommended ] = useState(null);

    const unfilteredData = useStaticQuery(graphql`
        query {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            ) {
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
    `)

    useEffect(() => {
        let filteredData = unfilteredData.allMarkdownRemark.edges.filter(item => item.node.fields.slug !== slug);
        
        let firstRecommended = getRandomInt(0, filteredData.length - 1);
        setFirstRecommended(filteredData[firstRecommended]);

        filteredData.splice(firstRecommended);

        let secondRecommended =  getRandomInt(0, filteredData.length - 1);

        setSecondRecommended(filteredData[secondRecommended])
    }, [])


    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    }
    
    return (
        <Container>
            <Heading>Altri articoli</Heading>
            <PostList>
                {firstRecommended && (
                    <PostListItem>
                        <Link to={`${firstRecommended.node.fields.slug}`}>
                            <Date>
                                {firstRecommended.node.frontmatter.date}
                            </Date>
                            <Heading>
                                {firstRecommended.node.frontmatter.title}
                            </Heading>
                            <Preview>
                                {firstRecommended.node.excerpt}
                            </Preview>
                        </Link>
                    </PostListItem>
                )}
                {secondRecommended && (
                    <PostListItem>
                        <Link to={`${secondRecommended.node.fields.slug}`}>
                            <Date>
                                {secondRecommended.node.frontmatter.date}
                            </Date>
                            <Heading>
                                {secondRecommended.node.frontmatter.title}
                            </Heading>
                            <Preview>
                                {secondRecommended.node.excerpt}
                            </Preview>
                        </Link>
                    </PostListItem>
                )}
            </PostList>
        </Container>
    );
}

export default RecommendedArticles;
