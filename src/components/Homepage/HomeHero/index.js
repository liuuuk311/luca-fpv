import React from 'react';

import {
    Container,
    Avatar,
    Heading,
    SubHeading,
    Paragraph,
} from './styled';

const HomeHero = () => {
    return (
        <Container>
          <Avatar src='/luca.jpg' width={110} height={110} alt={"Luca FPV"}/>
            <Heading>
                Ciao!
            </Heading>
            <Paragraph>
                Mi chiamo Luca e sono un appassionato di droni FPV. Questa passione mi ha portato anche a creare la prima community italiana di FPV chiamata <strong>NorthFPV</strong>. 
                <br/><br/>
                Lo scopo di questa community è quello di condividere una passione e aiutarsi a vicenda. Sono molto contento che la community stia crescendo rapidamente, entra anche tu a farne parte!
            </Paragraph>
            <SubHeading>Cerchi qualcosa di specifico?</SubHeading>
            <div id="search"></div>
        </Container>
    );
}

export default HomeHero;
