import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import {
    Container,
    PostList,
    PostListItem,
    Date,
    Tag,
    SubHeading,
    Preview
} from './styled';

const HomePostList = () => {

    const data = useStaticQuery(graphql`
    {
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
    `)

    const posts = data.allMarkdownRemark.edges;

    return (
        <Container>
            <PostList>
                {posts.map(( node, index ) => {
                    const { node : { frontmatter : { title, date, excerpt, tags}, fields : { slug } } } = node;
                    return (
                        <PostListItem>
                            <Link to={`${slug}`} key={index}>
                                <Date>
                                    {date} &nbsp;&middot;&nbsp; 
                                    {tags.map( (tag) => <Tag>#{tag} </Tag>)}
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
    );
}

export default HomePostList;
