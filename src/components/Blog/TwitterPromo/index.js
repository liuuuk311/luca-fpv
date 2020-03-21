import React from 'react';
import { TwitterFollowButton } from 'react-twitter-embed';
import {
    Container,
    Avatar,
    Content,
    Heading,
    Paragraph
} from './styled';


const TwitterPromo = () => {
    return (
        <Container>
            <Avatar src="/luca.jpg"/>
            <Content>
                <Heading>
                    🙌 Grazie per aver letto questo articolo!
                </Heading>
                <Paragraph>
                    Seguimi su Twitter per rimanere sempre aggiornato
                </Paragraph>
                <TwitterFollowButton
                    screenName={'iamlucafpv'}
                />
            </Content>
        </Container>
    );
}

export default TwitterPromo;
