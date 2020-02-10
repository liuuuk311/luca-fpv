import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import {
    Container,
    PostList,
    PostListItem,
    Date,
    Heading,
    Preview
} from './styled';

const HomePostList = () => {

    const data = useStaticQuery(graphql`
        query {
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
    `)

    const posts = data.allMarkdownRemark.edges;

    return (
        <Container>
            <PostList>
                {posts.map(( node, index ) => {
                    const { node : { excerpt, frontmatter : { title, date }, fields : { slug } } } = node;
                    return (
                        <PostListItem>
                            <Link to={`${slug}`} key={index}>
                                <Date>
                                    {date}
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
    );
}

export default HomePostList;
