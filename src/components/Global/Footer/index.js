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
                        href="https://www.youtube.com/channel/UC3Jw4XZ2h0cAh6jFL63e0uA"
                        target="_blank"
                        rel="noopener"
                    >
                        YouTube
                    </SocialListLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialListLink 
                        href="https://www.instagram.com/iamlucafpv/"
                        target="_blank"
                        rel="noopener"
                    >
                        Instagram
                    </SocialListLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialListLink 
                        href="https://twitter.com/iamlucafpv"
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
