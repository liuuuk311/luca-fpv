import React from 'react';

import {
    Container,
    Copyright,
    SocialList,
    SocialListItem,
    SocialListLink
} from './styled';

const Footer = () => {
    return (
        <Container>
            <Copyright>
                &copy; {new Date().getFullYear()} &mdash; Luca Palonca 
            </Copyright>
            <SocialList>
                <SocialListItem>
                    <SocialListLink 
                        href="https://www.instagram.com/luca.fpv/"
                        target="_blank"
                        rel="noopener"
                    >
                        Instagram
                    </SocialListLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialListLink 
                        href="https://twitter.com/liuuuk311"
                        target="_blank"
                        rel="noopener"
                    >
                        Twitter
                    </SocialListLink>
                </SocialListItem>
            </SocialList>
        </Container>
    );
}

export default Footer;
