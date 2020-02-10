import React, { useEffect, useState, useRef } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import {
    Default,
    TwitterPromo
} from '../../components';

import  {
    Container,
    PostContainer,
    NavigationContainer,
    NavigationHeading,
    NavigationLink,
    Info,
    Title,
    Date,
    Post
} from '../../components/PageStyles/BlogStyles';

const BlogPost = ({ data }) => {


    const {
        markdownRemark: {
            frontmatter: {
                title,
                date
            },
            excerpt,
            html
        }
    } = data;

    const post = useRef(null);

    const [ headings, setHeadings ] = useState(null);

    useEffect(() => {
        const postDiv = post.current;

        const headingsRaw = postDiv.querySelectorAll('h1, h2, h3');
        const headings = [...headingsRaw].map(heading => ({text: heading.innerText, heading }));

        setHeadings(headings)
    }, [])

    const handleNavigationClick = element => {
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <Default>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={excerpt}/>
                <meta name="author" content="Kyle McDonald" />
            </Helmet>
            <Container>
                <NavigationContainer>
                    <NavigationHeading>
                        Quick Navigate
                    </NavigationHeading>
                    {headings && headings.map((heading, index) => (
                        <NavigationLink
                            onClick={() => handleNavigationClick(heading.heading)}
                            key={index}
                        >
                            {heading.text}
                        </NavigationLink>
                    ))}
                </NavigationContainer>
                <PostContainer>
                    <Info>
                        <Date>
                            {date}
                        </Date>
                        <Title>
                            {title}
                        </Title>
                    </Info>
                    <Post 
                        dangerouslySetInnerHTML={{ __html: html}}
                        ref={post}
                    />
                    <TwitterPromo/>
                </PostContainer>
            </Container>
        </Default>
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
`;
