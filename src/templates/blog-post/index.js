import React, { useEffect, useState, useRef } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinIcon,
    LinkedinShareButton,
    RedditShareButton,
    RedditIcon
} from 'react-share';

import {
    Default,
    ThankYou,
    RecommendedArticles
} from '../../components';

import  {
    Container,
    PostContainer,
    NavigationContainer,
    QuickNavigationContainer,
    NavigationHeading,
    NavigationLink,
    ShareButtons,
    Info,
    Title,
    Date,
    Post,
} from '../../components/PageStyles/BlogStyles';


const BlogPost = ({ data, location }) => {

    const {
        markdownRemark: {
            frontmatter: {
                title,
                excerpt,
                date,
            },
            fields : {
                slug,
            },
            html
        }
    } = data;
    
    const post = useRef(null);

    const [ headings, setHeadings ] = useState(null);

    useEffect(() => {
        const postDiv = post.current;

        const headingsRaw = postDiv.querySelectorAll('h1, h2');
        const headings = [...headingsRaw].map(heading => {
            let indentLevel = 0;
            const tagName = heading.tagName;

            if(tagName === 'H3'){
                indentLevel = 1
            } else if(tagName === 'H4'){
                indentLevel = 2
            } else if(tagName === 'H5'){
                indentLevel = 3
            } else if(tagName === 'H6'){
                indentLevel = 4
            }

            return {
                text: heading.innerText, 
                heading,
                indentLevel
            }
        });

        setHeadings(headings)
    }, [])

    const handleNavigationClick = element => {
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }

    const getOgSlug = slug => {
        const slugSplit = slug.split('/')
        const ogSlug = slugSplit[slugSplit.length - 2]

        return ogSlug;
    }

    return (
        <Default
            location={location}
        >
            
            <Helmet>
                <title>{title} | Luca FPV</title>
                <meta name="description" content={excerpt}/>
                <meta name="author" content="Luca Palonca" />

                <meta property="og:title" content={title}/>
                <meta property="og:description" content={excerpt}/>
                <meta property="og:url" content={`http://lucafpv.com/${getOgSlug(slug)}`}/>

                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={excerpt}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            <Container>
                <NavigationContainer>
                    <QuickNavigationContainer>
                        <NavigationHeading>
                            Indice
                        </NavigationHeading>
                        {headings && headings.map((heading, index) => (
                            <NavigationLink
                                onClick={() => handleNavigationClick(heading.heading)}
                                indentLevel={heading.indentLevel}
                                key={index}
                            >
                                {heading.text}
                            </NavigationLink>
                        ))}
                    </QuickNavigationContainer>
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
                        dangerouslySetInnerHTML={{ __html: `<div>${html}</div>` }}
                        as="div"
                        ref={post}
                    />
                    <ShareButtons>
                        <TwitterShareButton
                            url={`http://lucafpv.com/${getOgSlug(slug)}`}
                            title={title}
                        >
                            <TwitterIcon size={24} round={true}/>
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={`http://lucafpv.com/${getOgSlug(slug)}`}
                            title={title}
                        >
                            <LinkedinIcon size={24} round={true}/>
                        </LinkedinShareButton>
                        <RedditShareButton
                            url={`http://lucafpv.com/${getOgSlug(slug)}`}
                            title={title}
                        >
                            <RedditIcon size={24} round={true}/>
                        </RedditShareButton>
                    </ShareButtons>
                    <ThankYou/>
                    <RecommendedArticles slug={slug}/>
                </PostContainer>
            </Container>
            <script src="https://npmcdn.com/lite-youtube-embed@0.2.0/src/lite-yt-embed.js" defer/>
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
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "it")
        excerpt
      }
    }
  }
  
`;
