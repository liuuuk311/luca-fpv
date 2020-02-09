import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import {
    Navigation
} from '../../components';

import  {
    Container,
    Info,
    Title,
    Date,
    Post
} from './styled';

const BlogPost = ({ data, pageContext, location }) => {

    console.log(data);

    const {
        markdownRemark: {
            frontmatter: {
                title,
                date
            },
            html
        }
     } = data;
    return (
        <div>
            <Helmet
                title={title}
            />
            <Navigation/>
            <Container>
                <Info>
                    <Date>
                        Kyle McDonald &nbsp;&nbsp; {date}
                    </Date>
                    <Title>
                        {title}
                    </Title>
                </Info>
                <Post dangerouslySetInnerHTML={{ __html: html}}/>
            </Container>
        </div>
    );
}

export default BlogPost;


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        bg
      }
    }
  }
`
