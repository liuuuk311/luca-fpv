import React, { useEffect, useState, useRef } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import AdSense from 'react-adsense';

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
    AdsContainer,
    ShareButtons,
    Info,
    Title,
    Date,
    Post,
    SubHeading,
    Paragraph,
    Button, 
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
                <AdsContainer>
                    <div>
                        <SubHeading>FPV Finder</SubHeading>
                        <Paragraph>Ho creato un sito per confrontare i prodotti FPV su più di 15 negozi online per trovare il prezzo migliore.</Paragraph>
                        <Button href="https://fpvfinder.netlify.app/?utm_source=lucafpv&utm_medium=referral&utm_campaign=lucafpv_sidebar" target="_blank">Provalo Ora</Button>
                    </div>
                    <AdSense.Google
                        client='ca-pub-4566556883137005'
                        slot='2806584328'
                        style={{ display: 'block' }}
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                    <AdSense.Google
                            client='ca-pub-4566556883137005'
                            slot='5109167274'
                            style={{ display: 'block' }}
                            format='fluid'
                        />
                </AdsContainer>
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
