import React from 'react';

import {
    HomeNewsletter,
} from '../../../components';

import {
    Container,
    Avatar,
    Heading,
    Paragraph
} from './styled';

const HomeHero = () => {
    return (
        <Container>
            <Avatar src="/luca.mp4" autoPlay='true'/>
            <Heading>
                Ciao!
            </Heading>
            <Paragraph>
                Mi chiamo Luca e sono un appassionato di droni FPV. Ho creato questo blog per condividere tutto ciò che riguarda il mondo FPV. 
                <br/><br/>
                Qui potrai trovare articoli, tutorial e recensioni sul tema dei droni FPV. 
            </Paragraph>
            <HomeNewsletter/>
        </Container>
    );
}

export default HomeHero;
