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
            <Avatar src="/luca.gif" alt="Foto di Luca"/>
            <Content>
                <Heading>
                    🙌 Grazie per aver letto questo articolo!
                </Heading>
                <Paragraph>
                    Seguimi su Instagram e Twitter per rimanere sempre aggiornato
                </Paragraph>
                {/* <TwitterFollowButton
                    screenName={'designbykyle'}
                /> */}
            </Content>
        </Container>
    );
}

export default TwitterPromo;
