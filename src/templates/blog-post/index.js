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
    NewsletterContainer,
    QuickNavigationContainer,
    NavigationHeading,
    NavigationLink,
    ShareButtons,
    Info,
    Title,
    Date,
    Post,
    Banner,
    // Newsletter stuff
    Heading,
    Paragraph,

} from '../../components/PageStyles/BlogStyles';
import { OutboundLink } from 'gatsby-plugin-google-analytics';


const BlogPost = ({ data, location }) => {

    const url = location.href ? location.href : '';

    const {
        markdownRemark: {
            frontmatter: {
                title,
                excerpt,
                date,
                ogimage
            },
            fields : {
                slug,
                readingTime : {
                    text
                }
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

    const ogImage = data.markdownRemark.frontmatter.ogimage || '/images/opengraph/opengraph-default.png';
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
                <meta property="og:image" content={ogImage}/>

                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={excerpt}/>
                <meta name="twitter:image" content={ogImage}/>
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
                    <OutboundLink href="https://t.me/fpv_coupons" target="_blank" rel="nofollow">
                        <Banner src="/canale_telegram.png"/>
                    </OutboundLink>
                    <Info>
                        <Date>
                            {date} &nbsp;&middot;&nbsp; {text.replace('read', '')}
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
    markdownRemark(fields: {slug: {eq: $slug}, readingTime: {}}) {
      id
      html
      fields {
        slug
        readingTime {
            text
        }
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "it")
        excerpt
        ogimage
      }
    }
  }
  
`;
