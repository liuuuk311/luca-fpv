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
            filter: {frontmatter: {draft: {ne: true}}}
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
            <div id="search"></div>
            <script type="text/javascript" dangerouslySetInnerHTML={{
                __html: `
                    algoliasearchNetlify({
                    appId: 'G0M23X5AHA',
                    apiKey: 'f64ebf0353bcad837657a655e4523786',
                    siteId: 'c3f13e8c-97b2-4e0f-b137-9df20f9f0153',
                    branch: 'master',
                    selector: '#search',
                    placeholder: 'Cerca...',
                    detached: false,
                    theme: {
                        mark: '#eda550',                                 // Color of the matching content
                        background: '#fff',                        // Background Color of the input and the panel
                        selected: '#f5f5fa',                          // Background Color of the selected item
                        text: '#23263b',                              // Color of the title of the items
                        colorSourceIcon: '#d6d6e7'                    // Color of the icon on the left of results
                    }
                });
                ` }} />
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
