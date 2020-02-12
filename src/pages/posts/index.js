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
    Heading,
    Preview
} from '../../components/PageStyles/AllPostStyles';

const Posts = ({ location }) => {

    const data = useStaticQuery(graphql`
        query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC, }) {
          edges {
            node {
              excerpt
              fields {
                slug
                readingTime {
                  text
                }
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

    const posts = data.allMarkdownRemark.edges;

    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>All posts | Kyle McDonald</title>
                <meta name="description" content="Every blog post every from Kyle McDonald"/>
            </Helmet>
            <Container>
                <Title>
                    All of my posts
                </Title>
                <PostList>
                    {posts.map(( node, index ) => {
                        const { node : { excerpt, frontmatter : { title, date }, fields : { slug, readingTime : { text } } } } = node;
                        return (
                            <PostListItem>
                                <Link to={`${slug}`} key={index}>
                                    <Date>
                                        {date} &nbsp;&middot;&nbsp; {text}
                                    </Date>
                                    <Heading>
                                        {title}
                                    </Heading>
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
