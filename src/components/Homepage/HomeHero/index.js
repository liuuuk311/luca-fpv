import React from 'react';
import {Link} from 'gatsby';

import {
    Container,
    Avatar,
    Heading,
    Paragraph,
} from './styled';

const HomeHero = () => {
    return (
        <Container>
          <Avatar src='/luca_new.jpeg' width={110} height={110} alt={"Luca FPV"}/>
            <Heading>
                Ciao!
            </Heading>
            <Paragraph>
                Mi chiamo Luca e sono un appassionato di droni FPV. Questa passione mi ha portato anche a creare la prima community italiana di FPV chiamata <strong>NorthFPV</strong>. 
            </Paragraph>
            <Paragraph>
                Lo scopo di questo blog è aiutare principalmente chi inizia ad usare droni FPV. 
            </Paragraph>
            <Paragraph>
                Nel corso degli anni ho potuto aiutare diverse migliaia di persone, facendole diventare piloti migliori. Se non trovi quello di cui hai bisogno, <Link to={"https://lucafpv.com/contattami"}>contattami</Link>.
            </Paragraph>
        </Container>
    );
}

export default HomeHero;
