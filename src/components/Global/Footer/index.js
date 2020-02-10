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
                &copy; {new Date().getFullYear()} &mdash; Kyle McDonald 
            </Copyright>
            <SocialList>
                <SocialListItem>
                    <SocialListLink 
                        href="https://twitter.com/designbykyle"
                        target="_blank"
                        rel="nofollow"
                    >
                        Twitter
                    </SocialListLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialListLink 
                        href="https://github.com/kylemcd"
                        target="_blank"
                        rel="nofollow"
                    >
                        GitHub
                    </SocialListLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialListLink 
                        href="https://linkedin.com/in/kylemcd1/"
                        target="_blank"
                        rel="nofollow"
                    >
                        Linkedin
                    </SocialListLink>
                </SocialListItem>
            </SocialList>
        </Container>
    );
}

export default Footer;
