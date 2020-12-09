import React from 'react';

import {
    HomeNewsletter,
    LastVideo,
} from '../../../components';

import {
    Container,
    Avatar,
    Heading,
    SubHeading,
    Paragraph,
    Button
} from './styled';

const HomeHero = () => {
    return (
        <Container>
          <Avatar muted autoplay poster='/luca.jpg' src='/luca.mp4'/>
            <Heading>
                Ciao!
            </Heading>
            <Paragraph>
                Mi chiamo Luca e sono un appassionato di droni FPV. Questa passione mi ha portato anche a creare la prima community italiana di FPV chiamata <strong>NorthFPV</strong>. 
                <br/><br/>
                Lo scopo di questa community è quello di condividere una passione e aiutarsi a vicenda. Sono molto contento che la community stia crescendo rapidamente, entra anche tu a farne parte!
            </Paragraph>
            <Button href="https://northfpv.com" target="_blank">
                    Scopri di più!
            </Button>
        </Container>
    );
}

export default HomeHero;
