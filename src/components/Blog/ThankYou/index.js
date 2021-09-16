import React from 'react';
import {
    Container,
    Avatar,
    Content,
    Heading,
    Paragraph,
    Button
} from './styled';


const ThankYou = () => {
    return (
        <Container>
            <Avatar src="/luca_new.jpeg" width={120} height={160} alt="Luca FPV"/>
            <Content>
                <Heading>
                    🙌 Grazie per aver letto questo articolo!
                </Heading>
                <Paragraph>
                    Mi segui già su Instagram? 
                </Paragraph>
                <Button href="https://instagram.com/iamlucafpv" target="_blank" rel="noreferrer">
                    Seguimi ora!
                </Button>
            </Content>
        </Container>
    );
}

export default ThankYou;
