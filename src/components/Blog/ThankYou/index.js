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
            <Avatar src="/luca.jpg"/>
            <Content>
                <Heading>
                    🙌 Grazie per aver letto questo articolo!
                </Heading>
                <Paragraph>
                    Sapevi che ho creato una comunità di droni FPV, si chiama NorthFPV
                </Paragraph>
                <Button href="https://northfpv.com" target="_blank">
                    Scopri di più!
                </Button>
            </Content>
        </Container>
    );
}

export default ThankYou;
