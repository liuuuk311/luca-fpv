import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery, Link } from 'gatsby';

import {
    Default
} from '../../components';

import {
    Container,
    Title,
    PostList,
    PostListItem,
    Date,
    Tag,
    Heading,
    SubHeading,
    Preview
} from '../../components/PageStyles/AllPostStyles';

const Posts = ({ location }) => {

    const data = useStaticQuery(graphql`
        query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC, }) {
          edges {
            node {
              fields {
                slug
                readingTime {
                  text
                }
              }
              frontmatter {
                date(formatString: "DD MMMM YYYY", locale:"it")
                title
                excerpt
                tags
              }
            }
          }
        }
      }
    `)

    const posts = data.allMarkdownRemark.edges;

    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Tutti gli Articoli | Luca FPV</title>
                <meta name="description" content="Tutti gli articoli di Luca FPV"/>
            </Helmet>
            <Container>
                <Title>
                    Tutti i miei articoli
                </Title>
                <PostList>
                    {posts.map(( node, index ) => {
                        const { node : { frontmatter : { title, date, excerpt, tags}, fields : { slug, readingTime : { text } } } } = node;
                        return (
                            <PostListItem>
                                <Link to={`${slug}`} key={index}>
                                    <Date>
                                        {date} &nbsp;&middot;&nbsp; 
                                        {text.replace('read', '')} &nbsp;&middot;&nbsp;
                                        {tags.map( ( tag ) => <Tag>#{tag} </Tag>)}
                                    </Date>
                                    <SubHeading>
                                        {title}
                                    </SubHeading>
                                    <Preview>
                                        {excerpt}
                                    </Preview>
                            </Link>
                            </PostListItem>
                        )
                    })}
                </PostList>
            </Container>
        </Default>
    );
}

export default Posts;
