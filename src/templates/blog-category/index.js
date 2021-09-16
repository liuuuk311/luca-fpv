import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash.kebabcase'

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

const BlogCategory = ({ data, pageContext }) => {
    const { allMarkdownRemark } = data
    const posts = data.allMarkdownRemark.edges;
    return (<Default
            location = ''
            >
            <Helmet>
                <title>{pageContext.category} | Luca FPV</title>
                <meta name="description" content="Tutti gli articoli di Luca FPV"/>
            </Helmet>
            <Container>
            <Title>
                {pageContext.category}
            </Title>
            <PostList>
                {posts.map(( node, index ) => {
                    const { node : { frontmatter : { title, date, excerpt, tags}, fields : { slug } } } = node;
                    return (
                        <PostListItem>
                            <Link to={`${slug}`} key={index}>
                                <Date>
                                    {date} &nbsp;&middot;&nbsp; 
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
            )
}
export default BlogCategory

export const query = graphql`
  query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] }, draft: {ne: true} } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
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
`